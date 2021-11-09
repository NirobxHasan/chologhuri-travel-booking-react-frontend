import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import About from '../About/About';
import Services from '../Services/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCoffee,
    faHeadset,
    faPowerOff,
    faSwatchbook
} from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
import { Col, Container, Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
const HomePage = () => {
    return (
        <div>
            <HeaderBanner />
            <Services />

            <Container>
                <section class="services" id="services">
                    <h1 class="heading">
                        <span>s</span>
                        <span>e</span>
                        <span>r</span>
                        <span>v</span>
                        <span>i</span>
                        <span>c</span>
                        <span>e</span>
                        <span>s</span>
                    </h1>

                    <div class="box-container">
                        <div class="box">
                            <i class="fas fa-hotel"></i>
                            <h3>affordable hotels</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Inventore commodi earum, quis
                                voluptate exercitationem ut minima itaque iusto
                                ipsum corrupti!
                            </p>
                        </div>
                        <div class="box">
                            <i class="fas fa-utensils"></i>
                            <h3>food and drinks</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Inventore commodi earum, quis
                                voluptate exercitationem ut minima itaque iusto
                                ipsum corrupti!
                            </p>
                        </div>
                        <div class="box">
                            <i class="fas fa-bullhorn"></i>
                            <h3>safety guide</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Inventore commodi earum, quis
                                voluptate exercitationem ut minima itaque iusto
                                ipsum corrupti!
                            </p>
                        </div>
                        <div class="box">
                            <i class="fas fa-globe-asia"></i>
                            <h3>around Bangladesh</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Inventore commodi earum, quis
                                voluptate exercitationem ut minima itaque iusto
                                ipsum corrupti!
                            </p>
                        </div>
                        <div class="box">
                            <i class="fas fa-plane"></i>
                            <h3>fastest travel</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Inventore commodi earum, quis
                                voluptate exercitationem ut minima itaque iusto
                                ipsum corrupti!
                            </p>
                        </div>
                        <div class="box">
                            <i class="fas fa-hiking"></i>
                            <h3>adventures</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Inventore commodi earum, quis
                                voluptate exercitationem ut minima itaque iusto
                                ipsum corrupti!
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
            <Reviews />
        </div>
        // <!-- services section ends -->
    );
};

export default HomePage;
