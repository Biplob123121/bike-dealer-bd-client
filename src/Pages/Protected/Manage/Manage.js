import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import deleteIcon from '../../../images/delete-icon.png';
import './Manage.css';

const Manage = () => {
    const [products, setProducts] = useProducts();

    const deleteItem = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://bd-bike-dealer-server.vercel.app/api/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(p => p._id !== id);
                        setProducts(remaining);
                    }

                })
        }

    }
    return (
        <section style={{ background: '#f1f1f1', padding: '30px' }}>
            <div className='container'>
                <h2 className='text-center text-primary pb-3'>Manage products : </h2>
                <div className='manage-items'>
                    {
                        products.map(product => <div
                            key={product._id}>
                            <div className='d-flex justify-content-between  manage-item'>
                                <img src={product.picture} alt="" />
                                <h6>{product.name}</h6>
                                <p>{product.quantity}</p>
                                <Link to='/inventory'>
                                    <button className='btn-manage'>Update Quantity</button>
                                </Link>
                                <button onClick={() => deleteItem(product._id)} className='border-0'><img src={deleteIcon} alt="" /></button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Manage;