import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const UpdatePersonnel = () => {
 
const nomPersonnel = useRef("");
const prenomPersonnel = useRef("");
const telePersonnel = useRef("");
const emailPersonnel = useRef("");
const rolePersonnel = useRef("");
const passwordPersonnel = useRef("");
  
    const navigate = useNavigate();
    const {id} =useParams();
    useEffect( ()=>{
        axios.get(`https://localhost:7285/api/Personnels/${id}`)
        .then(response => {
        nomPersonnel.current.value=response.data.nom
        prenomPersonnel.current.value=response.data.prenom
        telePersonnel.current.value=response.data.tele
        emailPersonnel.current.value=response.data.email
        rolePersonnel.current.value=response.data.role
        passwordPersonnel.current.value=response.data.password
         
      })
        .catch(err => console.log(err))
        },[])
        function setPersonnels(){
            var payload = {
                "nom": nomPersonnel.current.value,
                "prenom": prenomPersonnel.current.value,
                "email": emailPersonnel.current.value,
                "tele": telePersonnel.current.value,
                "role": rolePersonnel.current.value,
                "password": passwordPersonnel.current.value,
                 
                id:id
              };
            axios.put("https://localhost:7285/api/Personnels",payload)
            .then((response) => {
                navigate("/personnels");
              })
        }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <h5>Modifier les information du personnel</h5>
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
                <option value="Médecin">Médecin</option>
                <option value="Patient">Patient</option>
                <option value="Personnel administratif">Personnel administratif</option>
            </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={setPersonnels} >Confirmer</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default UpdatePersonnel
