import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../DeleteComfirmation';
import { Button } from 'react-bootstrap';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const ListPatients = () => {
    const [Patients,setPatients] = useState([])
    const [showModel,setShowModel] = useState(false)
    const navigate = useNavigate();

    const [itemToDelete,setItemToDelete]= useState(0);
 
    useEffect(()=> {
        axios.get("https://localhost:7285/api/Patients")
        .then((response)=>{
            setPatients((existingData)=>{
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
      axios.delete(`https://localhost:7285/api/Patients/${itemToDelete}`)
      .then((response)=>{
        setPatients((existingData)=>{
          return existingData.filter(_ => _.id !==itemToDelete)

        })
        setItemToDelete(0);
        setShowModel(false);
      })
    }
 

  return (
    <div className="wrapper">
        <div class="body-overlay"></div>
      <SidebarAdmin/>
     <div id="content">
   <NavebarAdmin/>
  
 

     
<div className="main-content">
			 <div className="row">
        <div className="col-md-12">
         <div className="table-wrapper">
         <div className="table-title">
          <div className="row">
            <div className="col-sm-6 p-0 flex justify-content-lg-start justify-content-center">
              <h2 className="ml-lg-2">Gérer les patients</h2>
            </div>
            <DeleteConfirmation 
        showModel={showModel}
        title="Delete Comfirmation"
        body="Are you sur to delete the patient?"
        closeDeleteConfirmation={closeDeleteConfirmation} 
        deleteConfirmHandler={deleteConfirmHandler} ></DeleteConfirmation>
            <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
              <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                <i className="material-icons">&#xE147;</i>
                <Link to="/create" >Ajouter un patient</Link>
              </a>
 
            </div>
          </div>
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
            
              <th>Nom</th>
              <th>Prenom</th>
              <th>CIN</th>
              <th>Numere de telephone</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
          {
              Patients.map((Patient)=> {
                return <tr key={Patient.id}>
                  <td>{Patient.nomP}</td>
                  <td>{Patient.prenomP}</td>
                  <td>{Patient.cin}</td>
                  <td>{Patient.numtel}</td>
                  <td>{Patient.email}</td>
                  <td>
                  <Button variant='success' type='button' onClick={()=> {
                      navigate(`/update/${Patient.id}`)
                   }}>
                      <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                   </Button>
                 
              
                <Button variant='danger' type='button' onClick={()=>{ showDeleteConfirmation(Patient.id);}}>
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

export default ListPatients

