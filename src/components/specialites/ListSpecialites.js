import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../DeleteComfirmation';
import { Button } from 'react-bootstrap';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const ListSpecilaites = () => {
    
  const [Specialites,setSpecialites] = useState([])
    const [showModel,setShowModel] = useState(false)
    const navigate = useNavigate();

    const [itemToDelete,setItemToDelete]= useState(0);
    
    useEffect(()=> {
        axios.get("https://localhost:7285/api/Specialites")
        .then((response)=>{
            setSpecialites((existingData)=>{
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
      axios.delete(`https://localhost:7285/api/Specialites/${itemToDelete}`)
      .then((response)=>{
        setSpecialites((existingData)=>{
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
              <h2 className="ml-lg-2">Les spécialités de notre cabinet</h2>
            </div>
            <DeleteConfirmation 
        showModel={showModel}
        title="Delete Comfirmation"
        body="Êtes-vous sûr(e) de vouloir supprimer cette spécialité ?"
        closeDeleteConfirmation={closeDeleteConfirmation} 
        deleteConfirmHandler={deleteConfirmHandler} ></DeleteConfirmation>
            <div className="col-sm-6 p-0 flex justify-content-lg-end justify-content-center">
              <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                <i className="material-icons">&#xE147;</i>
                <Link to="/new-specialite" >Ajouter une spécialité</Link>
              </a>
            </div>
          </div>
        </div>

        <table className="table table-striped table-hover">
          <thead>
          <tr>
              <th>Spécialité</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
          {
                Specialites.map((Specialite)=> {
                    return <tr key={Specialite.id}>
                      <td>{Specialite.specialite1}</td>
                  <td>
                  <Button variant='success' type='button' onClick={()=> {
                      navigate(`/update-specialite/${Specialite.id}`)
                   }}>
                      <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                   </Button>
                 
              
                <Button variant='danger' type='button' onClick={()=>{ showDeleteConfirmation(Specialite.id);}}>
                <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                   </Button>
              </td>
                </tr>
              })
            }
          </tbody>
        </table>

       
      </div>
    </div>
 
    </div>
   
           </div>   
    </div>
</div>
  )
}

export default ListSpecilaites

