import React from 'react';
import './BrandPartner.css';
import yamaha from '../../../images/brand-logo/yamaha-logo.png';
import suzuki from '../../../images/brand-logo/suzuki-logo.png';
import tvs from '../../../images/brand-logo/tvs-logo.png';
import bajaj from '../../../images/brand-logo/bajaj-logo.png';
import hero from '../../../images/brand-logo/hero-logo.png';
import ducati from '../../../images/brand-logo/ducati-logo.png';

const BrandPartner = () => {
    return (
        <section  style={{background : '#f1f1f1'}}>
            <div className='container py-5'>
                <h2 className='text-center'>Our Brand Partner :</h2>
                <div className='brand-container'>
                    <img src={yamaha} alt="" />
                    <img src={suzuki} alt="" />
                    <img src={tvs} alt="" />
                    <img src={bajaj} alt="" />
                    <img src={hero} alt="" />
                    <img src={ducati} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BrandPartner;