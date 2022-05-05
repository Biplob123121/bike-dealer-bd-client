import React from 'react';
import Banner from '../Banner/Banner';
import BrandPartner from '../BrandPartner/BrandPartner';
import Dashboard from '../Dashboard/Dashboard';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Dashboard></Dashboard>
            <BrandPartner></BrandPartner>
        </div>
           
        
    );
};

export default Home;