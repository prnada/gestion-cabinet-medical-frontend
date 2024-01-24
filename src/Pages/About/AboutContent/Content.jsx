import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Notre cabinet médical</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Depuis 1998, notre cabinet médical s'engage à combiner des techniques modernes et un équipement de haute technologie. Le Dr Nada Elkhaldi et son équipe offrent une expérience de soins médicaux personnalisée et confortable, comme aucun autre cabinet médical.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;