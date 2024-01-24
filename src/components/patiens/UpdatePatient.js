import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const UpdatePatient = () => {
    const nomPatient = useRef("");
    const prenomPatient = useRef("");
     const cinPatient =useRef("")
    const telePatient = useRef("");
    const emailPatient = useRef("");
    const navigate = useNavigate();
    const {id} =useParams();
useEffect( ()=>{
    axios.get(`https://localhost:7285/api/Patients/${id}`)
    .then(response => {
    nomPatient.current.value=response.data.nomP
    prenomPatient.current.value=response.data.prenomP
    telePatient.current.value=response.data.numtel
    emailPatient.current.value=response.data.email
    cinPatient.current.value=response.data.cin
     
  })
    .catch(err => console.log(err))
    },[])
    function setPatients(){
        var payload = {
            "nomP": nomPatient.current.value,
            "prenomP": prenomPatient.current.value,
            "email": emailPatient.current.value,
            "numtel": telePatient.current.value,
            "cin": cinPatient.current.value,
             
            id:id
          };
        axios.put("https://localhost:7285/api/Patients",payload)
        .then((response) => {
            navigate("/patients");
          })
    }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <h5>Modifier les information du Patient</h5>
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
            <button type="button" className="btn btn-success" onClick={setPatients} >Confirmer</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default UpdatePatient
