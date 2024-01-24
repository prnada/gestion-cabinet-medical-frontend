import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const AddMedicament = () => {
    const medicamentDispo = useRef("");
    
    const navigate = useNavigate();
    function sendMedicaments() {
        var payload = {
          libelle: medicamentDispo.current.value   
        };
        axios
        .post('https://localhost:7285/api/Medicaments', payload)
        .then(response => {
          navigate("/medicaments");
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
             
            <legend>Ajouter un médicament</legend>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Libellé médicament</label>
              <input type="text" ref={medicamentDispo} className="form-control" style={{ width: '400px' }} required />
            </div>
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary align-items-center" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success align-items-center" onClick={sendMedicaments} >Ajouter</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default AddMedicament
