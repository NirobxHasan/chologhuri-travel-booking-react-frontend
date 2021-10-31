import React from 'react';
import './HeaderBanner.css';
const HeaderBanner = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <h1>Descover Fantastic Place</h1>
                <h5>We offer a varity of service and option</h5>
                <p>
                    Accompanying us, you have a trip full of experiences. With
                    Chisfis, booking accommodation, resort villas, hotels.
                </p>
                <a className="booknow-btn" href="">
                    Book Now!
                </a>
            </div>
        </div>
    );
};

export default HeaderBanner;
