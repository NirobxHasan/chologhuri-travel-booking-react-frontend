import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useMyBooking from '../../../hooks/useMyBooking';

const Booked = (props) => {
    const [service, setService] = useState({});
    const { _id, Name, Email, packageID, title, img } = props.booking;
    const history = useHistory();

    const { deleteBooKing } = useMyBooking();
    const handelDelete = (id) => {
        alert('are you sure to delete it?');
        deleteBooKing(id);
        history.push('/myorder');
    };
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button onClick={() => handelDelete(_id)} variant="primary">
                        delete
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Booked;
