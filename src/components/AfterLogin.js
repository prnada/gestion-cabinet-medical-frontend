import React from 'react'
import Feature from './Feature/Feature'
import About from '../Pages/About/About/About'
import Service from './AboutService/AboutService'
import Appoinment from '../Pages/Home/Appoinment/Appoinment'
import Gallery from '../Pages/Home/Gallery/Gallery'
import Testimonial from '../Pages/Home/Testimonial/Testimonial'
import Footer from '../Pages/Home/Footer/Footer'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import Promo from '../Pages/Home/Appoinment-promo/Promo'
import Banner from '../Pages/About/Banner/Banner'

const AfterLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (token) {
          try {
            const decoded = jwtDecode(token);
            console.log(decoded.role);
    
            if (decoded.role === 'admin') {
              navigate('/admin');
            } else if (decoded.role === 'medecin') {
              navigate('/medecin');
            } else if (decoded.role === 'patient') {
              navigate('/patient');
            }
          } catch (error) {
            console.error('Error decoding token:', error);
            // Gérer l'erreur de manière appropriée
          }
        }
      }, []);
  return (
    <div>
       <Banner />
           <Feature />
           <About />
           <Service />
          
           <Appoinment />
           <Gallery />
           <Testimonial />
         
           <Promo />
        
           <Footer/>
    </div>
  )
}

export default AfterLogin
