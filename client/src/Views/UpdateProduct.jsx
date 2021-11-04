import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router'
import ProductForm from '../Components/ProductForm';
import DeleteButton from '../Components/DeleteButton';

const UpdateProduct = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
    }, [])

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => console.log(res))
            .then(history.push("/products"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            {loaded && (
                <div>
                    <h2 className="text-center">Edit Product</h2>
                    <ProductForm onSubmitProp={updateProduct} defaultProductInfo={product} id={id}/>
                    <DeleteButton productID={product._id} successCallback={() => history.push("/products")} />
                </div>
            )}
        </div>
    );
};


export default UpdateProduct;