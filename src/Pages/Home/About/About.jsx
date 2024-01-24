import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctor from '../../../Images/about-banner1.png';
import doctorAnimated from '../../../Images/cleaner.png';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={doctor} alt="doctor" className="img-fluid doctor" />
                            <img src={doctorAnimated} alt="doctor" className="img-fluid animated doctorAnim" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Bienvenue dans notre cabinet médical</h1>
                                <p>Bienvenue dans notre cabinet médical qui représente tout ce qu'une visite chez le médecin devrait être. Nous avons créé un environnement accueillant et confortable pour nos patients.  </p>
                                <a href='/page/about'>À propos de nous</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <span>500</span>
                                    <span>+</span>
                                    <p>Patients satisfaits</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <span>88</span>
                                    <span>+</span>
                                    <p>Médecins qualifiés</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <span>25</span>
                                    <span>+</span>
                                    <p>Années d'expérience</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <span>50</span>
                                    <span>+</span>
                                    <p>Prix médicaux</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;