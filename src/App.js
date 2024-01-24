import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Dentist from './Pages/Dentist/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';
import DashboardAdmin from './components/DashboardAdmin.js';
import Signup from './Pages/Login/Signup.js';
import DashboardMedecin from './components/DashboardMedecin.js';
import DashboardPatient from './components/DashboardPatient.js';
import AfterLogin from './components/AfterLogin.js';
import ListPatients from './components/patiens/ListPatients.js';
import AddPatient from './components/patiens/AddPatient.js';
import UpdatePatient from './components/patiens/UpdatePatient.js';
import ListMedecins from './components/medecins/ListMedecins.js';
import AddMedecin from './components/medecins/AddMedecin.js';
import UpdateMedecin from './components/medecins/UpdateMedecin.js';
import ListInfs from './components/infermiers/ListInfs.js';
import AddInf from './components/infermiers/AddInf.js';
import UpdateInf from './components/infermiers/UpdateInf.js';
import ListMedicaments from './components/medicaments/ListMedicaments.js';
import AddMedicament from './components/medicaments/AddMedicament.js';
import UpdateMedicament from './components/medicaments/UpdateMedicament.js';
import ListPersonnels from './components/personnels/ListPersonnels.js';
import AddPersonnel from './components/personnels/AddPersonnel.js';
import UpdatePersonnel from './components/personnels/UpdatePersonnel.js';
import ListSpecilaites from './components/specialites/ListSpecialites.js';
import AddSpecialite from './components/specialites/AddSpecialite.js';
import UpdateSpecialite from './components/specialites/UpdateSpecialite.js';
import ListRV from './components/rendezVous/ListRV.js';
import AddRV from './components/rendezVous/AddRV.js';
import ListRVdoctor from './components/rendezVous/ListRVdoctor.js';
import ListRVpatient from './components/rendezVous/ListRVpatient.js';
import AddRVpatient from './components/rendezVous/AddRVpatient.js';
import ListDossiers from './components/dossiers medicaux/ListDossiers.js';
import CreateDossier from './components/dossiers medicaux/CreateDossier.js';
import UpdateDossier from './components/dossiers medicaux/UpdateDossier.js';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/dentist' element={<Dentist />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<AfterLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/admin' element={<DashboardAdmin />} />
          <Route path='/medecin' element={<DashboardMedecin />} />
          <Route path='/patient' element={<DashboardPatient />} />

          <Route path='/patients' element={<ListPatients />} />
          <Route path='/create' element={<AddPatient />} />
          <Route path='/update/:id' element={<UpdatePatient />} />

          <Route path='/medecins' element={<ListMedecins />} />
          <Route path='/new-medecin' element={<AddMedecin />} />
          <Route path='/update-medecin/:id' element={<UpdateMedecin />} />

          <Route path='/infermiers' element={<ListInfs />} />
          <Route path='/new-infermier' element={<AddInf />} />
          <Route path='/update-infermier/:id' element={<UpdateInf />} />

          <Route path='/medicaments' element={<ListMedicaments />} />
          <Route path='/new-medicament' element={<AddMedicament />} />
          <Route path='/update-medicament/:id' element={<UpdateMedicament />} />

          <Route path='/personnels' element={<ListPersonnels />} />
          <Route path='/new-personnel' element={<AddPersonnel />} />
          <Route path='/update-personnel/:id' element={<UpdatePersonnel />} />

          <Route path='/specialites' element={< ListSpecilaites />} />
          <Route path='/new-specialite' element={<AddSpecialite />} />
          <Route path='/update-specialite/:id' element={<UpdateSpecialite />} />

          <Route path='/rendez-vous' element={< ListRV />} />
          <Route path='/add-rv' element={<AddRV />} />

          <Route path='/doctor-rendez-vous' element={< ListRVdoctor />} />
          <Route path='/patient-rendez-vous' element={< ListRVpatient />} />
          <Route path='/prendre-rv' element={<AddRVpatient />} />

          <Route path='/dossiers-medicaux' element={<ListDossiers />} />
          <Route path='/new-dossier' element={<CreateDossier />} />
          <Route path='/update-dossier/:id' element={<UpdateDossier />} />
        </Routes>
       
      
      </Router>
       
    </AuthProvider>
    <Router>
    
    </Router>
    </div>
  );
}

export default App;
