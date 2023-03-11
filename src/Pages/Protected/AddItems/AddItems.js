import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddItems.css';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = d => {
        const supplierData = {
            supplier: `${user.displayName}`,
            sEmail: `${user.email}`
        };
        const data = Object.assign(supplierData, d);

        const url = `https://bike-dealer-bd-server.vercel.app/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    toast('Item is Added');
                    reset();
                }
            })
    };
    return (
        <section style={{ background: '#f1f1f1' }}>
            <div className='container addItems-section'>
                <h2 className='text-center text-primary'>Add an items :</h2>
                <form className='add-item-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Supplier name' value={user.displayName} readOnly disabled />
                    <input placeholder='Supplier email' value={user.email} readOnly disabled />
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Product name' />
                    <textarea {...register("description")} placeholder='Product description' />
                    <input type="number" {...register("price")} placeholder='Product price' />
                    <input type="number" {...register("quantity")} placeholder='Product Quantity' />
                    <input type="text" {...register("picture")} placeholder='Photo URL' />
                    <input type="submit" className='add-btn' value='Add Item' />
                </form>
                <ToastContainer />
            </div>
        </section>
    );
};

export default AddItems;