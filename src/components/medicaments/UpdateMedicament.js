import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const UpdateMedicament = () => {
    const medicamentDispo = useRef("");
    const navigate = useNavigate();
    const {id} =useParams();
    useEffect( ()=>{
        axios.get(`https://localhost:7285/api/Medicaments/${id}`)
        .then(response => {
            medicamentDispo.current.value=response.data.libelle
      })
        .catch(err => console.log(err))
        },[])
        function setMedicament(){
            var payload = {
                "libelle": medicamentDispo.current.value,
                
                id:id
              };
            axios.put("https://localhost:7285/api/Medicaments",payload)
            .then((response) => {
                navigate("/medicaments");
              })
        }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <h5>Modifier le libellé</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div  className="form-group d-flex flex-column align-items-center">
              <label>Libellé médicament</label>
              <input type="text" ref={medicamentDispo} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={setMedicament} >Confirmer</button>
          </div>
            </div>
        </div>
        </div>
      
 
  )
}

export default UpdateMedicament
