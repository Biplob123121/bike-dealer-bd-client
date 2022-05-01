import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, picture, description } = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='p-2'>
                <h3>{name}</h3>
                <p>Price : BDT {price}</p>
                <p><small>{description}</small></p>
            </div>
            <button>Update</button>
        </div>
    );
};

export default Product;