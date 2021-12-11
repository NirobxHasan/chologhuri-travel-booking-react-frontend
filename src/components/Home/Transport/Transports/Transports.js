import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import transportImg01 from '../../../../images/transport/1.jpg';
import transportImg02 from '../../../../images/transport/2.jpg';
import transportImg03 from '../../../../images/transport/3.jpg';
import transportImg04 from '../../../../images/transport/4.jpg';
import { Container } from 'react-bootstrap';
import './Transports.css';
const transports = [
    {
        title: 'Explore Bangladesh By Air, Flight Awaits Date of journey',
        img: transportImg01
    },
    {
        title: 'Explore Bangladesh By Road, Bus Awaits Date of journey',
        img: transportImg02
    },
    {
        title: 'Explore Bangladesh By Rail, Train Awaits Date of journey',
        img: transportImg03
    },
    {
        title: 'Explore Bangladesh By River, Launch Awaits Date of journey',
        img: transportImg04
    }
];
const Transports = () => {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const { user } = useAuth();
    const handleBooking = (e) => {
        e.preventDefault();
        if (!date) {
            alert('please selete the date!');
            return;
        }
        const transportBook = {
            userEmail: user.email,
            title: title,
            date: date
        };
        fetch('https://spooky-beast-33270.herokuapp.com/transports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(transportBook)
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Successfully Booked!');
                }
            });
        console.log(transportBook);
        setDate('');
    };
    return (
        <div>
            <h1 class="heading">
                <span>T</span>
                <span>r</span>
                <span>a</span>
                <span>n</span>
                <span>s</span>
                <span>p</span>
                <span>o</span>
                <span>r</span>
                <span>t</span>
            </h1>

            <Container>
                <div className="transport-section">
                    {transports.map((transport) => (
                        <div className="transport-card">
                            <div className="transport-img">
                                <img src={transport.img} />
                            </div>
                            <div className="transport-book">
                                <form onSubmit={handleBooking}>
                                    <h3>{transport.title}</h3>

                                    <input
                                        type="date"
                                        onChange={(e) =>
                                            setDate(e.target.value)
                                        }
                                    />
                                    <br />
                                    <button
                                        onClick={(e) =>
                                            setTitle(transport.title)
                                        }
                                        type="submit"
                                        className="transport-btn"
                                    >
                                        Book Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Transports;
