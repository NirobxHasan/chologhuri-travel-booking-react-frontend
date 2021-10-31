import React from 'react';
import {
    Col,
    Container,
    FormControl,
    InputGroup,
    Row,
    Button
} from 'react-bootstrap';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer mt-5">
            <Row xs={1} sm={1} md={2} lg={4}>
                <Col className="d-flex justify-content-center align-items-center">
                    <Container>
                        <div>
                            <h1 className="brand-name">CholoGhuri</h1>
                            <p>
                                ” The real voyage of discovery consists not in
                                seeking new landscapes, but in having new eyes.”
                                ~ Marcel Proust
                            </p>
                        </div>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h4 className="title">Company</h4>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Event</a>
                        <a href="">Add your hotel</a>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h4 className="title">Platform</h4>
                        <a href="">Browse Library</a>
                        <a href="">Library</a>
                        <a href="">Partner</a>
                        <a href="">News & Blogs</a>
                        <a href="">FAQ</a>
                    </Container>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Container>
                        <h4 className="title">Subscribe</h4>
                        <InputGroup className="mb-3 ">
                            <FormControl
                                className="input-field p-2"
                                placeholder="your email address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
