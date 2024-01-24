import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../DeleteComfirmation';
import { Button } from 'react-bootstrap';
 
import SidebarMedecin from '../sharedComponents/SidebarMedecin';
import NavebarMedecin from '../sharedComponents/NavebarMedecin';


const ListDossiers = () => {

const [Dossiers,setDossiers] = useState([])
const [showModel,setShowModel] = useState(false)
const navigate = useNavigate();

    const [itemToDelete,setItemToDelete]= useState(0);
 

    useEffect(()=> {
        axios.get("https://localhost:7285/api/DossiersMedicaux")
        .then((response)=>{
            setDossiers((existingData)=>{
                return response.data
            })
        });
    },[])
    function showDeleteConfirmation(id){
        setShowModel(true)
        setItemToDelete(id)
      }
      function closeDeleteConfirmation(){
        setShowModel(false)
      }
      function deleteConfirmHandler(){
        axios.delete(`https://localhost:7285/api/DossiersMedicaux/${itemToDelete}`)
        .then((response)=>{
          setDossiers((existingData)=>{
            return existingData.filter(_ => _.id !==itemToDelete)
  
          })
          setItemToDelete(0);
          setShowModel(false);
        })
      }
  return (
    <div className="wrapper">
        <div class="body-overlay"></div>
      <SidebarMedecin/>
     <div id="content">
   <NavebarMedecin/>
<div className="main-content">
			 <div className="row">
        <div className="col-md-12">
         <div className="table-wrapper">
         <div className="table-title">
          <div className="row">
            <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
              <h2 className="ml-lg-2">Gérer les dossiers médicaux</h2>
            </div>
            <DeleteConfirmation 
        showModel={showModel}
        title="Delete Comfirmation"
        body=" Êtes-vous sûr(e) de vouloir supprimer ce dossier ?"
        closeDeleteConfirmation={closeDeleteConfirmation} 
        deleteConfirmHandler={deleteConfirmHandler} ></DeleteConfirmation>
            <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
              <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                <i className="material-icons">&#xE147;</i>
                <Link to="/new-dossier" >Créer un nouveau dosssier</Link>
              </a>
 
            </div>
          </div>
        </div>

        <table className="table table-striped table-hover">
          <thead>
          <tr>
              <th>Nom Patient</th>
              <th>Nom Medecin</th>
              <th>Type Traitement</th>
              <th>Antecedents medicaux</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
          {
               Dossiers.map((Dossier)=> {
                return <tr key={Dossier.id}>
                  <td>{Dossier.nomP+' '+Dossier.prenomP}</td>
                  <td>{Dossier.nomM+' '+Dossier.prenomM}</td>
                  
                  <td>{Dossier.typeTraitement.length > 10 ? Dossier.typeTraitement.substring(0, 10) + '...' : Dossier.typeTraitement}</td>
                  <td>{Dossier.antecedentsMed.length > 10 ? Dossier.antecedentsMed.substring(0, 10) + '...' : Dossier.antecedentsMed}</td>
                  <td>
                  <Button variant='success' type='button' onClick={()=> {
                      navigate(`/update-dossier/${Dossier.id}`)
                   }}>
                      <i className="material-icons" data-toggle="tooltip" title="Modifier">&#xE254;</i>
                   </Button>
                <Button variant='danger' type='button' onClick={()=>{ showDeleteConfirmation(Dossier.id);}}>
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

export default ListDossiers

