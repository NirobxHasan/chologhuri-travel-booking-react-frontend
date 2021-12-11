import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdminService from './AdminService';

const AllServices = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://spooky-beast-33270.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    const deleteService = (id) => {
        fetch(`https://spooky-beast-33270.herokuapp.com/services/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((result) => {
                const restservice = services.filter(
                    (service) => service._id !== id
                );

                setService(restservice);
            });
    };
    return (
        <Container className="mt-3">
            <Row xs={1} md={2} lg={3} className="g-4">
                {services.map((service) => (
                    <AdminService
                        key={service._id}
                        service={service}
                        deleteService={deleteService}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default AllServices;
