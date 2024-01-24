import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    return (
        <>
            <section className="doctor-details-sec">
                <Container>
                    <Row>
                        <Col md={7} lg={8}>
                            <div className="single-doctor-details">
                                <h2>Dr. Nathan Currie <span>(Médecin généraliste)</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>D'autre part, nous condamnons avec indignation et méprisons les hommes qui sont si séduits et démoralisés par les charmes du plaisir du moment, si aveuglés par le désir, qu'ils ne peuvent prévoir la douleur et les ennuis qui sont certains de survenir ; et une égale faute appartient à ceux qui échouent dans leur devoir par faiblesse de volonté, c'est-à-dire par refus de l'effort et de la peine. Ces cas sont parfaitement simples et faciles.</p>
                            </div>
                            <div className="doctor-associations">
                                <h3>Associations médicales</h3>
                                <ul className="p-0">
                                    <li>Association médicale américaine</li>
                                    <li>Académie de médecine générale</li>
                                    <li>Société médicale de Caroline</li>
                                    <li>Académie de médecine générale</li>
                                    <li>Association américaine des femmes médecins</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="doctor-profile text-center">
                                <div className="profile-img"></div>
                                <p>Nom : <strong>Nathan Currie</strong></p>
                                <p>Spécialisation : <strong>Médecine générale</strong></p>
                                <p>Téléphone : <strong>1-866-764-5387</strong></p>
                                <div className="doctors-social">
                                    <a href=".#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=".#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="achievement-img-bg"></div>
                        </Col>
                        <Col lg={6}>
                            <div className="expert-doctor-txt mt-5 mt-lg-0">
                                <h2>Médecin expérimenté</h2>
                                <p>Le sourire vient naturellement au Dr Harrie, auteur de 'Donto'. Il s'est spécialisé en médecine générale et a redessiné les sourires de milliers de patients.</p>
                                <p>Le Dr Harrie croit en offrant à ses patients plus qu'une simple prise en charge dentaire de classe mondiale. Il les aide également à reconnaître le lien vital entre la santé dentaire et la santé globale. Diplômé de l'École de médecine dentaire de l'Université de Californie, le Dr Harrie est un leader du mouvement visant à apporter la santé environnementale et le bien-être dans le monde dentaire pour l'avenir.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Details;