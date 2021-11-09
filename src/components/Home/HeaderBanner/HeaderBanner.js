import { Carousel } from 'bootstrap';
import React from 'react';
import './HeaderBanner.css';
import img01 from '../../../images/banner/img01.jpg';
import img02 from '../../../images/banner/img02.jpg';
import img03 from '../../../images/banner/img03.jpg';
const HeaderBanner = () => {
    return (
        // <div className="header-container">
        //     <div className="header-content">
        //         <h1>EXPLORE BANGLADESH</h1>
        //         <h5>
        //             Discover New Places In Bangladesh With Us, Adventure Awaits
        //             Discover More
        //         </h5>

        //         <a className="booknow-btn" href="">
        //             DISCOVER MORE
        //         </a>
        //     </div>

        //     {/* <div className="banner">
        //         <video autoPlay muted loop>
        //             <source src={vid01} type="video/mp4" />
        //         </video>
        //         <div className="content">
        //             <h1>EXPLORE BANGLADESH</h1>
        //             <h5>
        //                 Discover New Places In Bangladesh With Us, Adventure
        //                 Awaits Discover More
        //             </h5>

        //             <a className="booknow-btn" href="">
        //                 DISCOVER MORE
        //             </a>
        //         </div>
        //     </div> */}
        // </div>
        <div>
            <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-container"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img03} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Cox's Bazar</h4>
                            <p>
                                Cox’s Bazar is a town on the southeast coast of
                                Bangladesh.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img02} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Bandarban District</h4>
                            <p>
                                It is one of the three hill districts of
                                Bangladesh and a part of the Chittagong Hill
                                Tracts, the others being Rangamati District and
                                Khagrachhari District.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img01} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Tanguar Haor</h4>
                            <p>
                                The area of Tanguar haor including 46 villages
                                within the haor is about 100 square kilometres
                                of which 2,802.36 ha² is wetland.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeaderBanner;
