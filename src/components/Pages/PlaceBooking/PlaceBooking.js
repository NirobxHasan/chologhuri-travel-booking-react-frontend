import { faMapMarkedAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, ListGroup } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './PlaceBooking.css';
import useAuth from '../../../hooks/useAuth';
const PlaceBooking = () => {
    const { id } = useParams();
    const history = useHistory();
    const [service, setService] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.packageID = id;
        data.title = service.title;
        data.price = service.price;
        data.img = service.img;
        data.status = 'Pendding';

        axios
            .post('https://spooky-beast-33270.herokuapp.com/order', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Successfully added order!');
                    history.push('/home');
                }
            });
    };

    useEffect(() => {
        fetch(`https://spooky-beast-33270.herokuapp.com/services/${id}`)
            .then((res) => res.json())
            .then((service) => setService(service));
    }, []);

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
                            </ListGroup>

                            <div className="w-100 d-flex justify-content-center align-items-center">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="m-2"
                                >
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        className="input-box"
                                        id="name"
                                        value={user.displayName}
                                        {...register('Name', {
                                            required: true,
                                            maxLength: 30
                                        })}
                                    />
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        className="input-box"
                                        id="email"
                                        value={user?.email}
                                        type="email"
                                        {...register('Email', {
                                            required: true
                                        })}
                                    />
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        className="input-box"
                                        id="phone"
                                        type="number"
                                        {...register('phone', {
                                            required: true
                                        })}
                                    />
                                    <label htmlFor="checkin">Check in:</label>
                                    <input
                                        className="input-box"
                                        id="checkin"
                                        type="date"
                                        {...register('date', {
                                            required: true
                                        })}
                                    />
                                    <br /> <br />
                                    <div className="booking-submit">
                                        <input type="submit" value="Booking" />
                                    </div>
                                </form>
                            </div>

                            <Card.Footer>
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
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceBooking;
