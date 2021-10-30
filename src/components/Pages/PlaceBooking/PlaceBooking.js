import { faMapMarkedAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import './PlaceBooking.css';
const PlaceBooking = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        fetch('/services.json')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    useEffect(() => {
        const found_service = services.find((ser) => ser.id == id);
        setService(found_service);
    }, [services]);

    return (
        <div>
            <Container>
                <Row xs={1} sm={1} md={1} lg={2}>
                    <Col lg={8} className="mb-5">
                        <Card>
                            <Card.Img variant="top" src={service?.img} />
                            <Card.Body>
                                <Card.Title>{service?.title}</Card.Title>
                                <Card.Text>{service?.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col
                        lg={4}
                        sm={12}
                        md={12}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Card>
                            <Card.Header>Booking Info</Card.Header>
                            <Card.Body>
                                <Card.Title>{service?.title}</Card.Title>
                            </Card.Body>
                            <ListGroup
                                variant="flush"
                                className="border-0 mb-3"
                            >
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faMapMarkedAlt}
                                        />
                                        {'    '}
                                        {service?.location}
                                    </div>
                                    <div>
                                        {' '}
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faUser}
                                        />{' '}
                                        {service?.num_of_person}
                                        person
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {' '}
                                    <div className="d-flex justify-content-center align-items-center">
                                        <h5 className="service-price">
                                            <span className="service-price-for-person">
                                                From
                                            </span>{' '}
                                            {service?.price}BDT
                                            <span className="service-price-for-person">
                                                /person
                                            </span>{' '}
                                        </h5>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <Button>Place booking</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceBooking;
