import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] =useState([]);

    useEffect( ()=>{
        fetch('https://bike-dealer-bd-server.vercel.app/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}
export default useProducts;