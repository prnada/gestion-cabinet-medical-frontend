import React, { useEffect } from 'react'
import SidebarMedecin from './sharedComponents/SidebarMedecin'
 
import NavebarMedecin from './sharedComponents/NavebarMedecin'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const DashboardMedecin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded.role);

        if (decoded.role === 'medecin') {
          navigate('/medecin');
        } else  {
          console.log('Vous etes pas un medecin avec ce compte, veuillez se connecter autant que medecin');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        // Gérer l'erreur de manière appropriée
      }
    }
  }, []);
  return (
    <div className="wrapper">
        <div class="body-overlay"></div>
         <SidebarMedecin/>
     <div id="content">
          <NavebarMedecin/>
  
    <section className="main-content">
 
    <div className="home-content">
      <div className="overview-boxes">
      <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Appointments</div>
              <div class="number">36</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <span class="text">For Today</span>
              </div>
            </div>
            <i class="fas fa-calendar cart" aria-hidden="true"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Patients</div>
              <div class="number">23</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <span class="text">Up from yesterday</span>
              </div>
            </div>
            <i class="fas fa-person cart two" aria-hidden="true"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Total Staff</div>
              <div class="number">246</div>
              <div class="indicator">
                <i class="bx bx-up-arrow-alt"></i>
                <span class="text">Up from yesterday</span>
              </div>
            </div>
            <i class="fas fa-user-tie cart three" aria-hidden="true"></i>
          </div>
       
       
      </div>
    </div>
     </section>

     
  
    </div>
</div>
  )
}

export default DashboardMedecin
