import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './Inventory.css';

const Inventory = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    const navigateToManageItem = id => {
        navigate(`/product/${id}`)
    }
    return (
        <section style={{ background: '#f1f1f1' }}>
            <div className='container py-4'>
                <h2 className='text-center text-primary'>Our Inventory : {products.length}</h2>

                <div className='products-container'>
                    {
                        products.map(product =>
                            <div key={product._id} className='product'>
                                <img src={product.picture} alt="" />
                                <div className='py-4 px-2'>
                                    <h3>{product.name}</h3>
                                    <h6>Quantity : {product.quantity}</h6>
                                    <p>Price : BDT {product.price}</p>
                                    <p>Supplier : {product.supplier}</p>
                                    <p><small>{product.description}</small></p>
                                </div>
                                <button onClick={() => navigateToManageItem(product._id)} className='product-btn'>Manage Stock</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Inventory;