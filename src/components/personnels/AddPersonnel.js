import axios from 'axios';
import React  from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';
import { useRef , useState , useEffect} from 'react';
 
const AddPersonnel = () => {
  const nomPersonnel = useRef("");
  const prenomPersonnel = useRef("");
  const telePersonnel = useRef("");
  const rolePersonnel = useRef("");
  const emailPersonnel = useRef("");
  const passwordPersonnel = useRef("");
    
    const navigate = useNavigate();
    function sendPersonnel() {
      var payload = {
        nom: nomPersonnel.current.value,
        prenom: prenomPersonnel.current.value,
        tele : telePersonnel.current.value,
        role: rolePersonnel.current.value,
        email: emailPersonnel.current.value,
        password : passwordPersonnel.current.value
      };
    
      axios
        .post('https://localhost:7285/api/Personnels', payload)
        .then(response => {
          navigate("/personnels");
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
             
            <legend>Ajouter un personnel</legend>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group d-flex flex-column align-items-center">
              <label>Nom personnel</label>
              <input type="text" ref={nomPersonnel} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Prenom personnel</label>
              <input type="text" ref={prenomPersonnel} className="form-control"  style={{ width: '400px' }}  required />
            </div>
 
            <div className="form-group d-flex flex-column align-items-center">
              <label>Email personnel</label>
              <input type="email" ref={emailPersonnel} className="form-control"  style={{ width: '400px' }} required />
            </div>
             
            <div className="form-group d-flex flex-column align-items-center">
              <label>Telephone personnel</label>
              <input type="text" ref={telePersonnel}  className="form-control"  style={{ width: '400px' }} required />
            </div>
            <div className="form-group d-flex flex-column align-items-center">
            <label>Role</label>
            <select ref={rolePersonnel} className="form-control"  style={{ width: '400px' }} required>
                <option value="medecin">Médecin</option>
                <option value="patient">Patient</option>
                <option value="Personnel administratif">Personnel administratif</option>
                <option value="admin">Admin</option>
            </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success" onClick={sendPersonnel} >Ajouter</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default AddPersonnel
