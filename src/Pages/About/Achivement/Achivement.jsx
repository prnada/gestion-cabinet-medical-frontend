import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Nos réalisations</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">Chez notre cabinet de médecine générale, la santé est notre priorité. Depuis des années, le Dr. Jean Martin et son équipe dévouée ont prodigué des soins de qualité à des milliers de patients. Nous nous engageons à offrir des services médicaux complets et personnalisés pour le bien-être de nos patients.</p>
                            <div className="more-tool">
                                <Link to="/login"><button className="theme-btn btn-fill">Prendre rendez-vous</button></Link>
                                <a href="https://www.youtube.com/watch?v=7HhdN9_MgE8" className="watchBtn"><button className="theme-btn btn-unfill"><FontAwesomeIcon className="play-btn" icon={faPlayCircle} /><span>Regarder la vidéo</span></button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>22 +</span>
                                    <p>Patients satisfaits</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>75 +</span>
                                    <p>Médecins qualifiés</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>25 +</span>
                                    <p>Distinctions et récompenses</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>28 +</span>
                                    <p>Cliniques</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;