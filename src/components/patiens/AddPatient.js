import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const AddPatient = () => {
    const nomPatient = useRef("");
    const prenomPatient = useRef("");
     const cinPatient =useRef("")
    const telePatient = useRef("");
    const emailPatient = useRef("");
    
    const navigate = useNavigate();
     
  
  
   
  
    function sendPatient() {
  
      
      var payload = {
        nomP: nomPatient.current.value,
        prenomP: prenomPatient.current.value,
        cin : cinPatient.current.value,
        numtel: telePatient.current.value,
        email: emailPatient.current.value,
         
      };
    
      axios

        .post('https://localhost:7285/api/Patients', payload)
        .then(response => {
          navigate("/patients");
        })
        .catch(error => {
          console.error("An error occurred:", error);
        });
    } 
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <legend>Ajouter un patient</legend>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Nom Patient</label>
              <input type="text" ref={nomPatient} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Prenom Patient</label>
              <input type="text" ref={prenomPatient} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>CIN Patient</label>
              <input type="text" ref={cinPatient} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Email</label>
              <input type="email" ref={emailPatient} className="form-control" style={{ width: '400px' }} required />
            </div>
             
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Telephone</label>
              <input type="text" ref={telePatient}  className="form-control" style={{ width: '400px' }} required />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary align-items-center" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success align-items-center" onClick={sendPatient} >Ajouter</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default AddPatient
