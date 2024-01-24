import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const UpdateInf = () => {
    const [medecins, setMedecins] = useState([]);


    useEffect(() => {
        axios.get('https://localhost:7285/api/Medecins')
          .then(response => {
            setMedecins(response.data);
            console.log(response.data);  
          })
          .catch(error => {
            console.error("An error occurred:", error);
          });
      }, []);
      const nomInfermier = useRef("");
      const prenomInfermier = useRef("");
      const teleInfermier = useRef("");
      const emailInfermier = useRef("");
      const medecinInf=useRef("");
    const navigate = useNavigate();
    const {id} =useParams();
        useEffect( ()=>{
        axios.get(`https://localhost:7285/api/Infermiers/${id}`)
            .then(response => {
            nomInfermier.current.value=response.data.nomInf
            prenomInfermier.current.value=response.data.prenomInf
            teleInfermier.current.value=response.data.nomtele
            emailInfermier.current.value=response.data.email
             
            medecinInf.current.value=response.data.id_medecin
        })
    .catch(err => console.log(err))
    },[])
    function setInfermiers(){
        var payload = {
            "nomInf": nomInfermier.current.value,
            "prenomInf": prenomInfermier.current.value,
            "email": emailInfermier.current.value,
            "nomtele": teleInfermier.current.value,
            "idMedecin" : medecinInf.current.value,
            id:id
          };
        axios.put("https://localhost:7285/api/Infermiers",payload)
        .then((response) => {
            navigate("/infermiers");
          })
    }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <h5>Modifier les information d'un infermier</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div className="form-group d-flex flex-column align-items-center">
              <label>Nom infermier</label>
              <input type="text" ref={nomInfermier} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Prenom infermier</label>
              <input type="text" ref={prenomInfermier} className="form-control"  style={{ width: '400px' }}  required />
            </div>
 
            <div className="form-group d-flex flex-column align-items-center">
              <label>Email infermier</label>
              <input type="email" ref={emailInfermier} className="form-control"  style={{ width: '400px' }} required />
            </div>
             
            <div className="form-group d-flex flex-column align-items-center">
              infermier<label>Telephone médecin</label>
              <input type="text" ref={teleInfermier}  className="form-control"  style={{ width: '400px' }} required />
            </div>
            <div className="form-group d-flex flex-column align-items-center">
            <label>du médecin</label>
            <select ref={medecinInf} className="form-control"  style={{ width: '400px' }} required>
                {medecins.map(med => (
                <option key={med.id} value={med.id}>
                    {med.nomM+' '+med.prenomM}
                </option>
                ))}
            </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={setInfermiers} >Confirmer</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default UpdateInf
