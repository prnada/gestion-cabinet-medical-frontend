import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
import heroTeeth from '../../../Images/medicaltechnology-left.jpg';
import womanbrush from '../../../Images/woman-brush.c4158ac5.png';
import './Banner.css';

const Banner = () => {
    return (
        <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} sm={12} lg={6}>
                        <div className="hero-slide-left justify-content-end align-items-center text-center  ">
                            <h2>Une vie meilleure grâce à notre cabinet</h2>
 
                            <p className="mb-xs-5">Rejoignez-nous dans un environnement médical convivial et agréable. Nos professionnels travaillent dur pour voir un sourire sur votre visage, que vous méritez ! Nous sommes dévoués à notre travail.</p>
                            <div className="banner-btn m-sm-auto">
                                <Link to="/login"><button className="theme-btn btn-fill">Prendre un rendez-vous</button></Link>
                                <button className='theme-btn bth-blank'>En savoir plus</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={6} className="mt-sm-5">
                        <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                            
                            <img src={heroTeeth} alt="" className="heroTeeth" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;