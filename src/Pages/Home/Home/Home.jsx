import React from 'react';
import Dentist from '../../../components/Dentist/Dentist';
import Feature from '../../../components/Feature/Feature';
import LatestBlog from '../../../components/LatestBlog/LatestBlog';
import Service from '../../../components/Service/Service';
import About from '../About/About';
import Promo from '../Appoinment-promo/Promo';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Slick from '../Slick/Slick';
import Testimonial from '../Testimonial/Testimonial';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <>
        <Header/>
        <Promo />
          
         
        
           <Dentist />
           <Appoinment />
           <Gallery />
           <Testimonial />
           <LatestBlog />
         
           <Slick />
           <Footer/>
        </>
    );
};

export default Home;