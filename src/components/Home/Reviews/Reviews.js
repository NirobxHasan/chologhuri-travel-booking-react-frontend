import React from 'react';
import pic02 from '../../../images/peoples/pic2.jpg';

import { Carousel } from '@trendyol-js/react-carousel';
import './Reviews.css';
const reviews = [
    {
        name: 'elma',
        img: pic02,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae eaque temporibus mollitia, dolorem tempora aspernatur neque vero inventore sapiente, accusantium recusandae quas. Repellat enim aspernatur quidem dolorum. Perspiciatis consequuntur atque placeat delectus recusandae ipsum repellat? Rem voluptatum molestias natus rerum optio eum similique fugit quod amet! Ipsam, neque nobis?'
    },
    {
        name: 'elma1',
        img: pic02,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae eaque temporibus mollitia, dolorem tempora aspernatur neque vero inventore sapiente, accusantium recusandae quas. Repellat enim aspernatur quidem dolorum. Perspiciatis consequuntur atque placeat delectus recusandae ipsum repellat? Rem voluptatum molestias natus rerum optio eum similique fugit quod amet! Ipsam, neque nobis?'
    },
    {
        name: 'elma2',
        img: pic02,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae eaque temporibus mollitia, dolorem tempora aspernatur neque vero inventore sapiente, accusantium recusandae quas. Repellat enim aspernatur quidem dolorum. Perspiciatis consequuntur atque placeat delectus recusandae ipsum repellat? Rem voluptatum molestias natus rerum optio eum similique fugit quod amet! Ipsam, neque nobis?'
    },
    {
        name: 'elma3',
        img: pic02,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae eaque temporibus mollitia, dolorem tempora aspernatur neque vero inventore sapiente, accusantium recusandae quas. Repellat enim aspernatur quidem dolorum. Perspiciatis consequuntur atque placeat delectus recusandae ipsum repellat? Rem voluptatum molestias natus rerum optio eum similique fugit quod amet! Ipsam, neque nobis?'
    },
    {
        name: 'elma4',
        img: pic02,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae eaque temporibus mollitia, dolorem tempora aspernatur neque vero inventore sapiente, '
    }
];

const Reviews = () => {
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
            <Carousel
                responsive={false}
                rightArrow={true}
                leftArrow={true}
                show={3.5}
                slide={2}
                transition={0.5}
                swiping={true}
                dynamic={true}
            >
                {reviews.map((review) => (
                    <div class="swiper-slide">
                        <div class="box">
                            <img src={review.img} alt="" />
                            <h3>{review.name}</h3>
                            <p>{review.review}</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Reviews;
