import axios from 'axios';
import React  from 'react'
import { useNavigate } from 'react-router-dom';

import { useRef , useState , useEffect} from 'react';
 
import SidebarMedecin from '../sharedComponents/SidebarMedecin';
import NavebarMedecin from '../sharedComponents/NavebarMedecin';
 
 

const CreateDossier = () => {
  const typeTraitementDRef = useRef(null);
  const antecedentMedicalRef = useRef(null);
  const medecinRef = useRef(null);
  const patientRef = useRef(null);
  const navigate = useNavigate();

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
      function sendDossier() {
    const payload = {
      typeTraitement: typeTraitementDRef.current.value,
      antecedentsMed: antecedentMedicalRef.current.value,
      idMedecin: parseInt(medecinRef.current.value, 10),
      idPatient: parseInt(patientRef.current.value, 10)
    };

    axios.post('https://localhost:7285/api/DossiersMedicaux', payload)
      .then(response => {
        navigate("/dossiers-medicaux");
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarMedecin/>
        <div id="content">
            <NavebarMedecin />
            
            <div className="main-content">
       
            <legend>Créer un dossier médical</legend>
            
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
           
          </div>
          <div className="modal-body">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Patient</label>
            <select ref={patientRef} className="form-control"  style={{ width: '400px' }} required>
                {patients.map(pat => (
                <option key={pat.id} value={pat.id}>
                      {pat.nomP + ' ' + pat.prenomP}
                </option>
                ))}
            </select>
            </div>
          <div className="form-group d-flex flex-column align-items-center">
            <label> Médecin</label>
            <select ref={medecinRef} className="form-control"  style={{ width: '400px' }} required>
                {medecins.map(med => (
                <option key={med.id} value={med.id}>
                    {med.nomM + ' ' + med.prenomM}
                </option>
                ))}
            </select>
            </div>
            <div className="form-group d-flex flex-column align-items-center">
              <label>type traitement + prescription</label>
              <textarea ref={typeTraitementDRef} className="form-control" style={{ width: '500px' }} required />
            </div>
            <div className="form-group d-flex flex-column align-items-center">
              <label>Antecedent medical </label>
              <textarea ref={antecedentMedicalRef} className="form-control" style={{ width: '500px' }} required />
            </div>
           
          </div>
          <div className="modal-footer">
           
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success" onClick={sendDossier} >Créer</button>
          </div>
        </div>
     
        </div>
      
 
  )
}

export default CreateDossier
