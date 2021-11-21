import React, { useEffect, useState } from 'react';
import pic02 from '../../../images/peoples/pic2.jpg';
import Slider from 'react-slick';
import './Reviews.css';
import ReactStars from 'react-rating-stars-component';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="my-5">
            <h1 class="heading">
                <span>R</span>
                <span>e</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>w</span>
            </h1>

            <div className="slide-container p-2">
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div class="swiper-slide ">
                            <div class="box">
                                <h3>{review.displayName}</h3>
                                <p>{review.review}</p>
                                <div class="stars">
                                    <ReactStars
                                        count={5}
                                        size={26}
                                        value={review.rating}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;
