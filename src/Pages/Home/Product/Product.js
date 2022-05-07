import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, price, picture, description, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateToManageItem = id =>{
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='py-4 px-2'>
                <h3>{name}</h3>
                <h6>Quantity : {quantity}</h6>
                <p>Price : BDT {price}</p>
                <p>Supplier : {supplier}</p>
                <p><small>{description}</small></p>
            </div>
            <button onClick={()=>navigateToManageItem(_id)} className='product-btn'>Manage Stock</button>
        </div>
    );
};

export default Product;