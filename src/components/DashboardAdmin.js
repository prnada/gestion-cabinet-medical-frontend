import React, { useEffect } from 'react'
import NavebarAdmin from './sharedComponents/NavebarAdmin'
import SidebarAdmin from './sharedComponents/SidebarAdmin'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const DashboardAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded.role);

        if (decoded.role === 'admin') {
          navigate('/admin');
        } else  {
          console.log('Vous etes pas un admin avec ce compte, veuillez se connecter autant qu admin');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
       
      }
    }
  }, []);
  return (
    <div className="wrapper">
        <div class="body-overlay"></div>
      <SidebarAdmin/>
     <div id="content">
   <NavebarAdmin/>
  
    <section className="main-content">
 
 <div className="home-content">
   <div className="overview-boxes">
     <div className="box">
       <div className="right-side">
         <div className="box-topic">Total Doctors</div>
         <div className="number">105</div>
         <div className="indicator">
           <i className='bx bx-up-arrow-alt'></i>
           <span className="text">Till the date</span>
         </div>
       </div>
       <i className="fas fa-user-md cart"></i>
     </div>
     <div className="box">
       <div className="right-side">
         <div className="box-topic">Total Patients</div>
         <div className="number">876</div>
         <div className="indicator">
           <i className='bx bx-up-arrow-alt'></i>
           <span className="text">Up from yesterday</span>
         </div>
       </div>
       <i className='fas fa-person cart two'></i>
     </div>
     <div className="box">
       <div className="right-side">
         <div className="box-topic">Total Staff</div>
         <div className="number">50</div>
         <div className="indicator">
           <i className='bx bx-up-arrow-alt'></i>
           <span className="text">Till the date</span>
         </div>
       </div>
       <i className="fas fa-user-tie cart three"></i>
     </div>
     <div className="box">
       <div className="right-side">
         <div className="box-topic">Total Beds</div>
         <div className="number">80</div>
         <div className="indicator">
           <i className='bx bx-down-arrow-alt down'></i>
           <span className="text">Down From Today</span>
         </div>
       </div>
       <i className='fas fa-bed cart four'></i>
     </div>
    
   </div>
 </div>
     </section>

  
    </div>
</div>
  )
}

export default DashboardAdmin
