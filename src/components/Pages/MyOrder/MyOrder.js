import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

import Booked from '../Booked/Booked';
import useMyBooking from '../../../hooks/useMyBooking';
const MyOrder = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/mybooking/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyBooking(data));
    }, []);

    const deleteBooKing = (id) => {
        alert('Are you sure to cancel booking?');
        fetch(`http://localhost:5000/mybooking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((result) => {
                const restbooking = myBooking.filter((book) => book._id !== id);
                console.log(restbooking);
                setMyBooking(restbooking);
            });
    };
    return (
        <Container className="mt-3">
            {myBooking.map((booking) => (
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                src={booking.img}
                                class="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">{booking.title}</h3>
                                <h6>Price:{booking.price}</h6>
                                <p>Date:{booking.date}</p>
                                <button
                                    className="booking-btn mt-3"
                                    onClick={() => {
                                        deleteBooKing(booking._id);
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default MyOrder;
