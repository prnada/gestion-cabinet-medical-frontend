import axios from 'axios';
import React  from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';
import { useRef , useState , useEffect} from 'react';
 
const AddMedecin = () => {
    const nomMedecin = useRef("");
    const prenomMedecin = useRef("");
    const specialisationMedecin = useRef("");
    const teleMedecin = useRef("");
    const emailMedecin = useRef("");
    const occupe=useRef("");
    
    const navigate = useNavigate();
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
      function sendMedecin() {

    
        var payload = {
          nomM: nomMedecin.current.value,
          prenomM: prenomMedecin.current.value,
          numtel: teleMedecin.current.value,
          email: emailMedecin.current.value,
          occupe: parseInt(occupe.current.value, 10),
          idSpecialite: parseInt(specialisationMedecin.current.value, 10)
        };
      
        axios
          .post('https://localhost:7285/api/Medecins', payload)
          .then(response => {
            navigate("/medecins");
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
             
            <legend>Ajouter un médecin</legend>
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
              <input type="text" ref={teleMedecin}  className="form-control"  style={{ width: '400px' }} required />
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
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success" onClick={sendMedecin} >Ajouter</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default AddMedecin
