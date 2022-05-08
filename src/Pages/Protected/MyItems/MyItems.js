import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './MyItems.css';
import deleteIcon from '../../../images/delete-icon.png';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const myProducts = products.filter(p => p.sEmail === user.email);

    const deleteItem = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
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
        <section style={{ background: '#f1f1f1', padding : '30px' }}>
            <div className='container'>
                <h2 className='text-center text-primary pb-3'>My Added Items : {myProducts.length}</h2>
                <div className='my-items'>
                    {
                        myProducts.map(myProduct => <div
                        key={myProduct._id}>
                            <div className='d-flex justify-content-between  my-item'>
                                <img src={myProduct.picture} alt="" />
                                <h5>Name : {myProduct.name}</h5>
                                <button onClick={() => deleteItem(myProduct._id)} className='border-0'><img src={deleteIcon} alt="" /></button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyItems;