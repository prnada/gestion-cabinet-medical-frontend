import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import client from '../../../Images/testi1.png';
import './Testimonial.css';

const Testimonial = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    return (
        <section className="testimonial-wrapper">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="section-title">
                            <h1>Témoignages</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={6} lg={4} sm={12}>
                        <div className="client-box text-center" data-aos="fade-right">
                            <div className="client-img">
                                <img src={client} alt="" />
                            </div>
                            <h3 className="mt-4">Aliceano Colby</h3>
                            <span>CEO de Prime IT</span>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="review-item text-start" data-aos="zoom-out">
                            <h5>Travail impressionnant</h5>
                            <p>« Ils ont vraiment pris mon cas personnel à cœur. Leur équipe est très serviable. Ils travaillent tous ensemble de manière impressionnante pour s'assurer que mes besoins étaient satisfaits et que je suis sorti sans douleur. »</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;