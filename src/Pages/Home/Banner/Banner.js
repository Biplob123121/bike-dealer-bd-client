import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';



const Banner = () => {
    return (
        <section className='banner-background'>
            <section className='container'>
                <div className='row banner-section'>
                    <div className='col-lg-6 col-sm-12 d-flex align-items-center text-white'>
                        <div>
                            <marquee behavior="scroll" direction="left"><h1 className='site-title'>Welcome to BIKE DEALER BD</h1></marquee>
                            <h4>It's the best Bike Dealer in BD. We are provided various luxurious Bike in Bangladesh. It is the realiable place to find and choose your Bike...</h4>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner-img"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner-img"
                                    src={banner2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner-img"
                                    src={banner3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Banner;