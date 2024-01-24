import axios from 'axios';
import React  from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';
import { useRef , useState , useEffect} from 'react';
import emailjs from 'emailjs-com';
import SidebarPatient from '../sharedComponents/SidebarPatient';
import NavebarPatient from '../sharedComponents/NavebarPatient';

const AddRVpatient = () => {
    const dateRv = useRef(null);
  const heureRv = useRef(null);
  const statutR = useRef(null);
  const medecinRef = useRef(null);
 const emailPatient=useRef(null);
    
    const navigate = useNavigate();
    const [medecins, setMedecins] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
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
     
      function sendRendezVous() {
        const dateValue = new Date(dateRv.current.value);
        const formattedDate = dateValue.toISOString().split('T')[0];
        const payload = {
          dateR: formattedDate,
          heureR:   heureRv.current.value+ ":00",
          status: statutR.current.value,
          email: emailPatient.current.value,
          idMedecin: parseInt(medecinRef.current.value, 10),
          
        };
        
        axios
        .post('https://localhost:7285/api/RendezVous', payload)
        .then((response) => {
          console.log('Le rendez-vous a été enregistré avec succès !');
          setSuccessMessage('Le rendez-vous a été enregistré avec succès, un e-mail de confirmation sera envoyé !');
          setErrorMessage('');
           
        })
        .catch((error) => {
          console.log(
            'Le médecin a déjà un rendez-vous qui chevauche la plage horaire choisie. Veuillez choisir une autre date/heure.'
          );
          console.log(error);
          setSuccessMessage('');
          setErrorMessage(
            'Le médecin a déjà un rendez-vous qui chevauche la plage horaire choisie. Veuillez choisir une autre date/heure.'
          );
        });
       /////mail
        // Extraction des adresses e-mail
        
        const selectedMedecin = medecins.find((medecin) => medecin.id === parseInt(medecinRef.current.value, 10));
    
        if (!selectedMedecin) {
          console.error('Patient ou médecin introuvable');
          return;
        }
        const medecinEmail = selectedMedecin.email;
    
        // Envoi de l'e-mail au patient avec EmailJS
        const  patientTemplateParams = {
          to_email: emailPatient,
          from_name: 'ELKHALDI Nada',
          subject: 'Confirmation de rendez-vous',
          nomMedecin : selectedMedecin.nomM+' '+selectedMedecin.prenomM,
          nomPatient:  emailPatient,
          dateRendezVous : formattedDate,
          heureRendezVous :heureRv.current.value
          
      };
        emailjs.send('service_k42bvai', 'template_s3ff71e', patientTemplateParams, 'IfI91KRgqsq84ff5l')
        .then((response) => {
          console.log('E-mail envoyé avec succès (patient) !');
        })
        .catch((error) => {
          console.error("Une erreur s'est produite lors de l'envoi de l'e-mail :", error);
        });
    
        
        // Envoi de l'e-mail au patient avec EmailJS
        const  medecinTemplateParams = {
          to_email: medecinEmail,
          from_name: 'ELKHALDI Nada',
          nomMedecin : selectedMedecin.nomM+' '+selectedMedecin.prenomM,
          nomPatient: emailPatient.current.value,
          dateRendezVous : formattedDate,
          heureRendezVous :heureRv.current.value
          
      };
        emailjs.send('service_k42bvai', 'template_k6duw0m', medecinTemplateParams, 'IfI91KRgqsq84ff5l')
        .then((response) => {
          console.log('E-mail envoyé avec succès (medecin)!');
        })
        .catch((error) => {
          console.error("Une erreur s'est produite lors de l'envoi de l'e-mail :", error);
        }); 
      }
  return (
   
<div className="wrapper">
    <div class="body-overlay"></div>
        <SidebarPatient/>
        <div id="content">
            <NavebarPatient/>
            
            <div className="main-content">
             
            <legend>Prendre un rendez vous</legend>
            {successMessage && <div className="btn btn-success">{successMessage}</div>}
             {errorMessage && <button className="btn btn-danger">{errorMessage}</button>}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Email patient</label>
            
              <input type="email" ref={emailPatient} className="form-control"  style={{ width: '400px' }}  required />
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
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Date rendez-vous</label>
              <input type="date" ref={dateRv} className="form-control"  style={{ width: '400px' }}  required />
            </div>
            <div  className="form-group d-flex flex-column align-items-center">
              <label>Heure rendez-vous</label>
              <input type="time" ref={heureRv} className="form-control"  style={{ width: '400px' }}  required />
            </div>
            <div className="form-group d-flex flex-column align-items-center">
            <label>Statut</label>
            <select ref={statutR} className="form-control"  style={{ width: '400px' }} required>
                
                <option value="en attente">En attente</option>
                 
                
            </select>
            </div>
             
           
            
          </div>
          <div className="modal-footer">
          <a href='/patient-rendez-vous' type="button" className="btn btn-primary" data-dismiss="modal">Revenir</a>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success" onClick={sendRendezVous} >Confirmer</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default AddRVpatient
