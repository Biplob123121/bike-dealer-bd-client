import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageItems = () => {
    const { manageId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${manageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);
    return (
        <div className='container'>
            <h2 className='text-center'>Manage Item Id : {product._id}</h2>
            <div>
                <h4>Product Name : {product.name}</h4>
                <p>Product Quantity : {product.quantity}</p>
                <button>Deliveried</button>
            </div>
        </div>
    );
};

export default ManageItems;