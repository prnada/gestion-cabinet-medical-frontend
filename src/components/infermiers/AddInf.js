import axios from 'axios';
import React  from 'react'
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from '../sharedComponents/SidebarAdmin';
import NavebarAdmin from '../sharedComponents/NavebarAdmin';
import { useRef , useState , useEffect} from 'react';
 
const AddInf = () => {
    const nomInfermier = useRef("");
    const prenomInfermier = useRef("");
    const teleInfermier = useRef("");
    const emailInfermier = useRef("");
    const medecinInf=useRef("");
    
    const navigate = useNavigate();
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
 
      function sendInfermier() {

    
        var payload = {
          nomInf: nomInfermier.current.value,
          prenomInf: prenomInfermier.current.value,
          nomtele: teleInfermier.current.value,
          email: emailInfermier.current.value,
          
          idMedecin: parseInt(medecinInf.current.value, 10)
        };
      
        axios
          .post('https://localhost:7285/api/Infermiers', payload)
          .then(response => {
            navigate("/infermiers");
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
             
            <legend>Ajouter un infermier</legend>
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
              <label>Telephone infermier</label>
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
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-success" onClick={sendInfermier} >Ajouter</button>
          </div>
        </div>
        </div>
      
 
  )
}

export default AddInf
