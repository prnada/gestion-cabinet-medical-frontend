import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';
import SidebarMedecin from '../sharedComponents/SidebarMedecin';
import NavebarMedecin from '../sharedComponents/NavebarMedecin';

const UpdateDossier = () => {
 
  const [medecins, setMedecins] = useState([]);
  const [patients, setPatients] = useState([]);

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
  useEffect(() => {
    axios.get('https://localhost:7285/api/Patients')
      .then(response => {
        setPatients(response.data);
        console.log(response.data);  
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }, []);

  const traitementRef = useRef("");
  const antecedentsRef = useRef("");
  const medecin = useRef("");
  const patient=useRef("");
  
    const navigate = useNavigate();
    const {id} =useParams();
    useEffect( ()=>
    {
        axios.get(`https://localhost:7285/api/DossiersMedicaux/${id}`)
        .then(response => {
        traitementRef.current.value=response.data.typeTraitement
        antecedentsRef.current.value=response.data.antecedentsMed
        medecin.current.value=response.data.id_patient
        medecin.current.value=response.data.id_medecin
      })
        .catch(err => console.log(err))
        },[])
        function setDossier(){
            var payload = {
                "typeTraitement": traitementRef.current.value,
                "antecedentsMed": antecedentsRef.current.value,
                
                "idMedecin" : medecin.current.value,
                "idPatient" : patient.current.value,
                id:id
              };
              axios.put(`https://localhost:7285/api/DossiersMedicaux/${id}`, payload)
            .then((response) => {
                navigate("/dossiers-medicaux");
              })
        }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarMedecin/>
        <div id="content">
            <NavebarMedecin/>
            
            <div className="main-content">
             
            <h5>Modifier vos dossiers mdicaux</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Patient</label>
            <select ref={patient} className="form-control"  style={{ width: '400px' }} required>
                {patients.map(pat => (
                <option key={pat.id} value={pat.id}>
                      {pat.nomP + ' ' + pat.prenomP}
                </option>
                ))}
            </select>
            </div>
          <div className="form-group d-flex flex-column align-items-center">
            <label> Médecin</label>
            <select ref={medecin} className="form-control"  style={{ width: '400px' }} required>
                {medecins.map(med => (
                <option key={med.id} value={med.id}>
                    {med.nomM + ' ' + med.prenomM}
                </option>
                ))}
            </select>
            </div>
            <div className="form-group d-flex flex-column align-items-center">
              <label>type traitement + prescription</label>
              <textarea ref={traitementRef} className="form-control" style={{ width: '500px' }} required />
            </div>
            <div className="form-group d-flex flex-column align-items-center">
              <label>Antecedent medical </label>
              <textarea ref={antecedentsRef} className="form-control" style={{ width: '500px' }} required />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={setDossier} >Confirmer</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default UpdateDossier
