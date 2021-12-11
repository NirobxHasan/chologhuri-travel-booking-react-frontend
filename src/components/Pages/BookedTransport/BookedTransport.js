import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
const BookedTransport = () => {
    const [transports, setTransports] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(
            `https://spooky-beast-33270.herokuapp.com/transports/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setTransports(data));
    }, []);

    const handleCancle = (id) => {
        console.log(id);

        fetch(`https://spooky-beast-33270.herokuapp.com/transports/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((result) => {
                const restbooking = transports.filter(
                    (transport) => transport._id !== id
                );

                setTransports(restbooking);
            });
    };
    return (
        <div>
            <Container className="mt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transports.map((transport) => (
                            <tr>
                                <td>{transport.title}</td>
                                <td>{transport.date}</td>
                                <td className="text-center">
                                    <Button
                                        onClick={(e) =>
                                            handleCancle(transport._id)
                                        }
                                        variant="danger"
                                        size="sm"
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default BookedTransport;
