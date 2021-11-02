import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import DeleteButton from './DeleteButton';


const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)
    const {id} = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, [])

    
    return (
        <div>
            {loaded && (<div className="container mt-5 text-center">
                <h2>{product.title} </h2>
                <p>Price: ${product.price}.00</p>
                <p>Description: {product.description}</p>
                <a href={`/products/${id}/edit`} className="btn btn-success me-3">Edit</a>
                <DeleteButton productID={product._id} successCallback={() => history.push("/products")} />
            </div>)}
        </div>
    );
};



export default ProductDetail;