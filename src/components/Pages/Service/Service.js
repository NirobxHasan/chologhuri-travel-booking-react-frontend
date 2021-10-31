import React from 'react';
import { Card, Col, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Service.css';
import { Link } from 'react-router-dom';
const Service = (props) => {
    const { _id, title, img, price, location, num_of_person } = props.service;
    return (
        <Col className="d-flex justify-content-center">
            {/* <div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div> */}
            <Card style={{ width: '20rem', height: '380px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <ListGroup variant="flush" className="border-0 mb-3">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <div>
                            <FontAwesomeIcon
                                className="icon"
                                icon={faMapMarkedAlt}
                            />
                            {'    '}
                            {location}
                        </div>
                        <div>
                            {' '}
                            <FontAwesomeIcon
                                className="icon"
                                icon={faUser}
                            />{' '}
                            {num_of_person}
                            person
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="service-price">
                            <span className="service-price-for-person">
                                From
                            </span>{' '}
                            {price}BDT
                            <span className="service-price-for-person">
                                /person
                            </span>{' '}
                        </h5>
                        <Link to={`/placebooking/${_id}`}>
                            <button className="booking-btn">Book Now</button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;
