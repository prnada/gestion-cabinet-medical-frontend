import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                        <h2>Médecin Expérimenté</h2>
                            <p>Le sourire est naturel pour le Dr. Jeanne, auteur de "Vivre en bonne santé". Elle se spécialise dans les soins de médecine générale et a aidé des milliers de patients à retrouver leur bien-être.</p>
                            <p>Le Dr. Jeanne croit en fournissant à ses patients bien plus qu'une simple prise en charge médicale de qualité. Elle s'engage à prendre soin de la santé globale de ses patients et à établir une relation de confiance pour leur bien-être. Diplômée de la Faculté de Médecine de l'Université de Paris, le Dr. Jeanne est passionnée par son travail et dévouée à offrir des soins de qualité à ses patients.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;