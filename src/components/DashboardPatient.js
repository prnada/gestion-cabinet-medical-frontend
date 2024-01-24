import React, { useEffect } from 'react'
import SidebarPatient from './sharedComponents/SidebarPatient'
import NavebarPatient from './sharedComponents/NavebarPatient'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
const DashboardPatient = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded.role);

        if (decoded.role === 'patient') {
          navigate('/patient');
        } else  {
          console.log('Vous etes pas un patient avec ce compte, veuillez se connecter autant que patient');
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
         <SidebarPatient/>
     <div id="content">
       <NavebarPatient/>
  
    
    <div className="box-container">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Diastole BP</div>
              <div className="number dbp"></div>
              <div className="indicator">
                <span className="text">Safe [60 - 80 mm Hg]</span>
              </div>
            </div>
            <i className="fas fa-heart cart two"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Systole BP</div>
              <div className="number sbp"></div>
              <div className="indicator">
                <span className="text">Safe [90 - 120 mm Hg]</span>
              </div>
            </div>
            <i className="fas fa-heart cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">HeartRate</div>
              <div className="number heartrate"></div>
              <div className="indicator">
                <span className="text">Safe [60 to 100 beats]</span>
              </div>
            </div>
            <i className="fas fa-heartbeat cart four"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Respiration Rate</div>
              <div className="number respiration"></div>
              <div className="indicator">
                <span className="text">Safe [12 to 16 breaths/min]</span>
              </div>
            </div>
            <i className="fas fa-lungs cart two"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">SpO2</div>
              <div className="number spo2"></div>
              <div className="indicator">
                <span className="text">Range [95% or higher]</span>
              </div>
            </div>
            <i className="fas fa-wind cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Blood Group</div>
              <div className="number bloodg"></div>
              <div className="indicator">
                <span className="text"></span>
              </div>
            </div>
            <i className="fas fa-droplet cart four"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Temperature</div>
              <div className="number temp"></div>
              <div className="indicator">
                <span className="text">Range [97°F to 99°F]</span>
              </div>
            </div>
            <i className="fa-solid fa-temperature-half cart "></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Ambulation </div>
              <div className="number ambulation"></div>
              <div className="indicator">
                <span className="text">Values possible : True/False</span>
              </div>
            </div>
            <i className="fa-solid fa-face-thermometer"></i>
            <i className="fas fa-syringe cart three"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Fever History </div>
              <div className="number fever"></div>
              <div className="indicator">
                <span className="text">Values possible : Yes/No/Other</span>
              </div>
            </div>
            <i className="fas fa-temperature-half cart four"></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">BMI</div>
              <div className="number bmi"></div>
              <div className="indicator">
                <span className="text">Range [18.5 to 24.9]</span>
              </div>
            </div>
            <i className="fas fa-balance-scale cart "></i>
          </div>
          <div className="box">
            <div className="right-side">
              <div className="box-topic">FiO2 </div>
              <div className="number fio2"></div>
              <div className="indicator">
                <span className="text">Range [50 to 100]</span>
              </div>
            </div>
            <i className="fas fa-lungs cart two"></i>
          </div>
          </div>
 

     
  
    </div>
</div>
  )
}

export default DashboardPatient
