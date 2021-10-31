import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';
import welcomeimg from '../../../images/about.jpg';
const About = () => {
    return (
        <div className="about mb-5" id="about">
            <h1 className="fw-bold">About</h1>

            <Row xs={1} sm={1} md={1} lg={2} className="m-3">
                <Col className="p-3 ">
                    <div>
                        <h6 className="text-color-brand">Our Story</h6>
                        <h1>
                            Our sole responsibility is to provide good and safe
                            tour packages.
                        </h1>
                        <p>
                            There are more than 30 islands in Bangladesh. Some
                            famous tourist attractions are: St. Martin's Island,
                            St.
                        </p>
                    </div>
                </Col>
                <Col className="">
                    <iframe
                        className="video"
                        width="90%"
                        height="300"
                        src="https://www.youtube.com/embed/rDYdeq3JW_E"
                    ></iframe>
                </Col>
            </Row>
        </div>
    );
};

export default About;
