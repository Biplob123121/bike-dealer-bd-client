import React from 'react';
import './AddItems.css';

const AddItems = () => {
    return (
        <div className='container addItems-section'>
            <h2 className='text-center'>Add an items :</h2>
            <form>
                <p>Supplier Name : <input type="text" name="name" id="" /></p>
                <p>Supplier Email : <input type="email" name="email" id="" /></p>
                <p>Product Name : <input type="text" name="product-name" id="" /></p>
                <p>Product Quantity : <input type="number" name="product-quantity" id="" /></p>
                <p>Product Price : <input type="number" name="price" id="" /></p>
                <textarea cols="50" rows="3" placeholder='Give Product description...'></textarea>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;