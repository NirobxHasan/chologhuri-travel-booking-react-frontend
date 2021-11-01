import React from 'react';
import './HeaderBanner.css';
const HeaderBanner = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <h1>EXPLORE BANGLADESH</h1>
                <h5>
                    Discover New Places In Bangladesh With Us, Adventure Awaits
                    Discover More
                </h5>
                {/* <p>
                    Accompanying us, you have a trip full of experiences. With
                    Chisfis, booking accommodation, resort villas, hotels.
                </p> */}
                <a className="booknow-btn" href="">
                    DISCOVER MORE
                </a>
            </div>
        </div>
    );
};

export default HeaderBanner;
