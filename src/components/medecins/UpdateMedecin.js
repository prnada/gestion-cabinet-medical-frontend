import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';

const UpdateMedecin = () => {
  const [specialites, setSpecialites] = useState([]);


useEffect(() => {
  axios.get('https://localhost:7285/api/Specialites')
    .then(response => {
      setSpecialites(response.data);
      console.log(response.data);  
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}, []);
  const nomMedecin = useRef("");
  const prenomMedecin = useRef("");
  const specialisationMedecin = useRef("");
  const teleMedecin = useRef("");
  const emailMedecin = useRef("");
  
    const navigate = useNavigate();
    const {id} =useParams();
    useEffect( ()=>{
        axios.get(`https://localhost:7285/api/Medecins/${id}`)
        .then(response => {
        nomMedecin.current.value=response.data.nomM
        prenomMedecin.current.value=response.data.prenomM
        teleMedecin.current.value=response.data.numtel
        emailMedecin.current.value=response.data.email
         
        specialisationMedecin.current.value=response.data.id_specialite
      })
        .catch(err => console.log(err))
        },[])
        function setMedecins(){
            var payload = {
                "nomM": nomMedecin.current.value,
                "prenomM": prenomMedecin.current.value,
                "email": emailMedecin.current.value,
                "numtel": teleMedecin.current.value,
                
                "idSpecialite" : specialisationMedecin.current.value,
                id:id
              };
            axios.put("https://localhost:7285/api/Medecins",payload)
            .then((response) => {
                navigate("/medecins");
              })
        }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarAdmin/>
        <div id="content">
            <NavebarAdmin/>
            
            <div className="main-content">
             
            <h5>Modifier les information du médecin</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div className="form-group d-flex flex-column align-items-center">
              <label>Nom médecin</label>
              <input type="text" ref={nomMedecin} className="form-control" style={{ width: '400px' }} required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Prenom médecin</label>
              <input type="text" ref={prenomMedecin} className="form-control"  style={{ width: '400px' }}  required />
            </div>
 
            <div className="form-group d-flex flex-column align-items-center">
              <label>Email médecin</label>
              <input type="email" ref={emailMedecin} className="form-control"  style={{ width: '400px' }} required />
            </div>
             
            <div className="form-group d-flex flex-column align-items-center">
              <label>Telephone médecin</label>
              <input type="text" ref={teleMedecin} className="form-control"  style={{ width: '400px' }} required />
            </div>
            <div className="form-group d-flex flex-column align-items-center">
            <label>Spécialité médecin</label>
            <select ref={specialisationMedecin} className="form-control"  style={{ width: '400px' }} required>
                {specialites.map(sp => (
                <option key={sp.id} value={sp.id}>
                    {sp.specialite1}
                </option>
                ))}
            </select>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={setMedecins} >Confirmer</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default UpdateMedecin
