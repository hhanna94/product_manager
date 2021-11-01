import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, [])

    
    return (
        <>
        {loaded && (<div className="container mt-5 text-center">
            <p>Title: {product.title} </p>
            <p>Price: ${product.price}.00</p>
            <p>Description: {product.description}</p>
        </div>)}
        </>
    );
};



export default ProductDetail;