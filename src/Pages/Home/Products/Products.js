import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useProducts();


    const topProducts = products.slice(0, 6);
    return (
        <section className='products-section' style={{background : '#f1f1f1'}}>
            <div className='container'>
                <h1 className='text-center text-primary pt-5'>Our Products :</h1>
                <div className='products-container'>
                    {
                        topProducts.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='inventory-btn'>
                    <Link to='/inventory'><button className='py-2'>SHOW INVENTORY</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Products;