import React from 'react';
import Banner from '../Banner/Banner';
import Dashboard from '../Dashboard/Dashboard';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Dashboard></Dashboard>
        </div>
           
        
    );
};

export default Home;