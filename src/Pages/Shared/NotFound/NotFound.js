import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className='not-found-section d-flex align-items-center'>
            <div className='container text-center'>
                <h1 className='text-danger'>404</h1>
                <h3 className='text-primary fs-1'>This page is not Found!!!</h3>
            </div>
        </section>
    );
};

export default NotFound;