import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CommingProduct.css';
import suzuki from '../../../images/suzuki.png';
import yamaha from '../../../images/yamaha.png';
import bajaj from '../../../images/bajaj.png';

const CommingProduct = () => {
    return (
        <section style={{ background: '#f1f1f1' }}>
            <div className='py-5 container'>
                <h2 className='text-center py-2'>Comming Soon :</h2>
                <div className='comming-product text-center'>
                    <Carousel>
                        <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={suzuki}
                                    alt="First slide"
                                />
                                <h4>Suzuki GX-2</h4>
                                <p>Price : BDT 300000</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={yamaha}
                                alt="Second slide"
                            />
                            <h4>Yamaha Fz-5</h4>
                            <p>Price : BDT 300000</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={bajaj}
                                alt="Third slide"
                            />
                            <h4>Pulser 320</h4>
                            <p>Price : BDT 300000</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default CommingProduct;