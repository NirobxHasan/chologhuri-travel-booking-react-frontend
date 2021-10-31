import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const ManageAllOrder = () => {
    const [allBooking, setAllBooking] = useState([]);
    const [isApprove, setIsApprove] = useState(false);

    useEffect(() => {
        fetch('https://spooky-beast-33270.herokuapp.com/allbooking')
            .then((res) => res.json())
            .then((data) => setAllBooking(data));
    }, []);

    const deleteBooKing = (id) => {
        alert('Are you sure to cancel booking?');
        fetch(`https://spooky-beast-33270.herokuapp.com/mybooking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((result) => {
                const restbooking = allBooking.filter(
                    (book) => book._id !== id
                );
                console.log(restbooking);
                setAllBooking(restbooking);
            });
    };
    const deleteApproveUpdate = (id) => {
        fetch(`https://spooky-beast-33270.herokuapp.com/mybooking/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approve' })
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    alert('Successfully Updated status');
                }
                setIsApprove(true);
            });
    };
    return (
        <Container className="mt-3">
            {allBooking.map((booking) => (
                <div className="card mb-3" key={booking._id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={booking.img}
                                className="img-fluid rounded-start h-100"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{booking.title}</h3>
                                <h5>Booked by: {booking.Name}</h5>
                                <h6>Price:{booking.price}</h6>
                                <p>Date:{booking.date}</p>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p>
                                        {' '}
                                        <span className="badge bg-secondary">
                                            {booking.status}
                                        </span>
                                    </p>
                                    <div>
                                        {booking.status === 'Pendding' ? (
                                            <button
                                                className="booking-btn mt-3 me-3"
                                                onClick={() => {
                                                    deleteApproveUpdate(
                                                        booking._id
                                                    );
                                                }}
                                            >
                                                Approve
                                            </button>
                                        ) : (
                                            ''
                                        )}
                                        <button
                                            className="booking-btn mt-3"
                                            onClick={() => {
                                                deleteBooKing(booking._id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default ManageAllOrder;
