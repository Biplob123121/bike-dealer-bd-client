import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './ManageItems.css';

const ManageItems = () => {
    const { manageId } = useParams();
    const numRef = useRef(0);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://bike-dealer-bd-server.vercel.app/product/${manageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);


    const decreasingQuantity = () => {
        //console.log(product.quantity);
        if (product.quantity > 0) {
            let { quantity, ...rest } = product;
            quantity = parseInt(quantity) - 1;
            const newProduct = { quantity, ...rest };
            setProduct(newProduct);
            fetch(`https://bike-dealer-bd-server.vercel.app/product/${manageId}`, {
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged === true){
                    toast('Product delivery is completed!!');
                }
            })
        }
        else {
            alert("You can't delivery product. Your quantity is zero.");
        }
    }

    const increasingQuantity = event =>{
        const increasingNum = numRef.current.value;
        let { quantity, ...rest } = product;
            quantity = parseInt(quantity) + parseInt(increasingNum);
            const newProduct = { quantity, ...rest };
            setProduct(newProduct);
            fetch(`https://bike-dealer-bd-server.vercel.app/product/${manageId}`, {
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged === true){
                    toast('Quantity is added....');
                }
            })

    }

    return (
        <section style={{ background: '#f1f1f1' }}>
            <div className='container py-4'>
                <h3 className='text-center text-primary pt-4'>Manage Item Id : {product._id}</h3>
                <div className='product-delivery text-center'>
                    <img className='delivery-img' src={product.picture} alt="" />
                    <h4>Product Name : {product.name}</h4>
                    <p>Product Quantity : {product.quantity}</p>
                    <button className='manage-btn' onClick={decreasingQuantity}>Deliveried</button>
                </div>
                <h3 className='text-center pt-5'>Increase Product Quantity :</h3>
                <div className='quantity-increasing d-flex justify-content-center'>
                    <input ref={numRef} type="number" name="addNum" id="" placeholder='Enter Quantity number' />
                    <input className='manage-btn' onClick={increasingQuantity} type="submit" value="Increase" />

                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ManageItems;