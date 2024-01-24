import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const AddSpecialite = () => {
    const specialiteM = useRef("");
    
    const navigate = useNavigate();
    function sendSpecialite() {
        var payload = {
          specialite1: specialiteM.current.value   
        };
        axios
        .post('https://localhost:7285/api/Specialites', payload)
        .then(response => {
          navigate("/specialites");
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
             
            <legend>Ajouter une spécialité</legend>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Description spécialité</label>
              <input type="text" ref={specialiteM} className="form-control" style={{ width: '400px' }} required />
            </div>
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary align-items-center" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success align-items-center" onClick={sendSpecialite} >Ajouter</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default  AddSpecialite
