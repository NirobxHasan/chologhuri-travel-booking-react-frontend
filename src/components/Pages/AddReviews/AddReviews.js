import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useHistory } from 'react-router';
const AddReviews = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const { user } = useAuth();
    const history = useHistory();
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    const handleFrom = (e) => {
        const newReview = { review, rating };
        newReview['displayName'] = user.displayName;
        newReview['email'] = user.email;
        console.log(newReview);
        axios
            .post('https://spooky-beast-33270.herokuapp.com/reviews', newReview)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Successfully added your review!');
                    history.push('/home');
                }
            });

        e.preventDefault();
    };
    return (
        <Container>
            <div class="d-flex justify-content-center">
                <Card style={{ width: '30rem' }} className="text-center mt-5">
                    <Card.Header style={{ fontSize: '1.5rem' }}>
                        Add your review
                    </Card.Header>
                    <Card.Body>
                        <div class="mb-3">
                            <label
                                for="exampleFormControlTextarea1"
                                class="form-label"
                            >
                                Details
                            </label>
                        </div>
                        <form onSubmit={handleFrom}>
                            <textarea
                                onBlur={(e) => setReview(e.target.value)}
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="10"
                            ></textarea>
                            <div class="d-flex justify-content-center">
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <button type="submit" className="booking-btn mt-2">
                                POST
                            </button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default AddReviews;
