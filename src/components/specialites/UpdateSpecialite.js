import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const UpdateSpecialite = () => {
    const specialiteM = useRef("");
    const navigate = useNavigate();
    const {id} =useParams();
    useEffect( ()=>{
        axios.get(`https://localhost:7285/api/Specialites/${id}`)
        .then(response => {
            specialiteM.current.value=response.data.specialite1
      })
        .catch(err => console.log(err))
        },[])
        function setSpecialite(){
            var payload = {
                "specialite1": specialiteM.current.value,
                
                id:id
              };
            axios.put("https://localhost:7285/api/Specialites",payload)
            .then((response) => {
                navigate("/specialites");
              })
        }
  return (
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <h5>Modifier la spécialité</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div  className="form-group d-flex flex-column align-items-center">
              <label>Description spécialité</label>
              <input type="text" ref={specialiteM} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={setSpecialite} >Confirmer</button>
          </div>
            </div>
        </div>
        </div>
      
 
  )
}

export default UpdateSpecialite
