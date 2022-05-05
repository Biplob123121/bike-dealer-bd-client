import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <section className='products-section' style={{background : '#f1f1f1'}}>
            <div className='container'>
                <h1 className='text-center pt-5'>Our Inventory : {products.length}</h1>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;