import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../DeleteComfirmation';
import { Button } from 'react-bootstrap';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';
import { jwtDecode } from "jwt-decode";
import SidebarMedecin from '../sharedComponents/SidebarMedecin';
import NavebarMedecin from '../sharedComponents/NavebarMedecin';
import SidebarPatient from '../sharedComponents/SidebarPatient';
import NavebarPatient from '../sharedComponents/NavebarPatient';

const ListRVpatient = () => {
  const [RendezVous,setRendezVous] = useState([])
  const [showModel,setShowModel] = useState(false)
    const navigate = useNavigate();

    const [itemToDelete,setItemToDelete]= useState(0);
 

    useEffect(()=> {
        const token = localStorage.getItem('token');
    
        if (token) {
        
            const decoded = jwtDecode(token);
            console.log(decoded.id);
            const idPatient=decoded.id;
        //axios.get(`https://localhost:7285/api/RendezVous/medecin/${idPatient}`)
        axios.get("https://localhost:7285/api/RendezVous")
        .then((response)=>{
            setRendezVous((existingData)=>{
                return response.data
            })
        }); }
    },[])
    function showDeleteConfirmation(id){
      setShowModel(true)
      setItemToDelete(id)
    }
    function closeDeleteConfirmation(){
      setShowModel(false)
    }
    function deleteConfirmHandler(){
        axios.delete(`https://localhost:7285/api/RendezVous/${itemToDelete}`)
        .then((response)=>{
          setRendezVous((existingData)=>{
            return existingData.filter(_ => _.id !==itemToDelete)
  
          })
          setItemToDelete(0);
          setShowModel(false);
        })
      }

  return (
    <div className="wrapper">
        <div class="body-overlay"></div>
      <SidebarPatient/>
     <div id="content">
   <NavebarPatient/>
<div className="main-content">
			 <div className="row">
        <div className="col-md-12">
         <div className="table-wrapper">
         <div className="table-title">
          <div className="row">
            <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
              <h2 className="ml-lg-2">La liste des Rendez Vous</h2>
            </div>
            <DeleteConfirmation 
        showModel={showModel}
        title="Delete Comfirmation"
        body=" Êtes-vous sûr(e) de vouloir supprimer ce rendez vous ?"
        closeDeleteConfirmation={closeDeleteConfirmation} 
        deleteConfirmHandler={deleteConfirmHandler} ></DeleteConfirmation>
            <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
              <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                <i className="material-icons">&#xE147;</i>
                <Link to="/prendre-rv" >Prendre un rendez vous</Link>
              </a>
 
            </div>
          </div>
        </div>

        <table className="table table-striped table-hover">
          <thead>
          <tr>
              <th>Email</th>
              <th>Nom Medecin</th>
              <th>Date Rendez-Vous</th>
              <th>Heure Rendez-Vous</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
          {
              RendezVous.map((rv)=> {
                return <tr key={rv.id}>
                  <td>{rv.email}</td>
                  <td>{rv.nomM+' '+rv.prenomM}</td>
                  <td>{rv.dateR}</td>
                  <td>{rv.heureR}</td>
                  <td>{rv.status}</td>
               
                  <td>
                  
                 
              
                <Button variant='danger' type='button' onClick={()=>{ showDeleteConfirmation(rv.id);}}>
                <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                   </Button>
              </td>
                </tr>
              })
            }
          </tbody>
        </table>

        <div className="clearfix">
          <div className="hint-text">Showing <b>5</b> out of <b>25</b></div>
          <ul className="pagination">
            <li className="page-item disabled"><a href="#">Previous</a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item active"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">4</a></li>
            <li className="page-item"><a href="#" className="page-link">5</a></li>
            <li className="page-item"><a href="#" className="page-link">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
 
    </div>
   
    </div>   
    </div>
</div>
  )
}

export default ListRVpatient

