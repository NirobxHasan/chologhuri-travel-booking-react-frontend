import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About';
import Services from '../Services/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCoffee,
    faHeadset,
    faPowerOff,
    faSwatchbook
} from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
import { Col, Container, Row } from 'react-bootstrap';
const HomePage = () => {
    return (
        <div>
            <HeaderBanner />
            <Services />
            <h1 className="mx-5  mt-5 service-header">Our Service</h1>
            <span className="line mx-5"></span>
            <Container className="my-5">
                <Row
                    xs={1}
                    md={2}
                    lg={3}
                    className="g-4 d-flex justify-content-center"
                >
                    <Col className="card-common card1 m-2 p-3 text-light">
                        <FontAwesomeIcon
                            className="icon fa-4x"
                            icon={faSwatchbook}
                        />
                        <h4>10</h4>
                        <h6>Services</h6>
                    </Col>
                    <Col className="card-common card2 m-2 p-3 text-light">
                        <FontAwesomeIcon
                            className="icon fa-4x"
                            icon={faCheckCircle}
                        />
                        <h4>Lifetime </h4>
                        <h6>support</h6>
                    </Col>
                    <Col className="card-common card3 m-2 p-3 text-light">
                        <FontAwesomeIcon
                            className="icon fa-4x"
                            icon={faHeadset}
                        />
                        <h4>Anytime</h4>
                        <h6>Cancel Booking</h6>
                    </Col>
                </Row>
            </Container>
            <About />
        </div>
    );
};

export default HomePage;
