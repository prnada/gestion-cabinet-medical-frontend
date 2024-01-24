import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Pratiques</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Pour les patients</NavLink>
                                <NavLink className="footer-link">FAQ</NavLink>
                                <NavLink className="footer-link">À propos</NavLink>
                                <NavLink className="footer-link">Contactez-nous</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Ressources</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Nouveaux patients</NavLink>
                                <NavLink className="footer-link">Rencontrez l'équipe</NavLink>
                                <NavLink className="footer-link">Formulaire patient</NavLink>
                                <NavLink className="footer-link">Assurance</NavLink>
                                <NavLink className="footer-link">Connexion au compte</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Dictionnaire médical</NavLink>
                                <NavLink className="footer-link">Scellements médicaux</NavLink>
                                <NavLink className="footer-link">Implants médicaux</NavLink>
                                <NavLink className="footer-link">Médecine générale</NavLink>
                                <NavLink className="footer-link">Médecine de la douleur</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Notre adresse</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Cabinet médical 5212 Cedar</NavLink>
                                <NavLink className="footer-link">Village Dr Mason, NY.</NavLink>
                                <NavLink className="footer-link">Téléphone : +1 3500 5867 340</NavLink>
                                <NavLink className="footer-link">Email : votredomaine@gmail.com</NavLink>
                                <NavLink className="footer-link">Fax : +1 675 5867 340</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2022 - <span className="developer">Saiful Emon</span> | Tous droits réservés</p>
            </div>
        </div>
    );
};

export default Footer;