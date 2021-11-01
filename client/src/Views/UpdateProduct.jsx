import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const history = useHistory();
    const { removeFromDom } = props;

    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            // .then(res => console.log(res.data))
            .then(res => setFormInfo(res.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, formInfo)
            .then(res => console.log(res))
            .then(history.push("/products"))
            .catch(err => console.log(err));

    }

    const handleChange = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    const handleDelete = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => { removeFromDom(productID) })
            .catch(err => console.log(err))
            .then(history.push("/products"))
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">Update Product</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="container w-25 d-flex flex-column align-items-center">
                <div>
                    <label >Title:</label>
                    <input onChange={e => handleChange(e)} type="text" name="title" className="ms-3" value={formInfo.title} />
                </div>
                <div className="mt-3">
                    <label >Price:</label>
                    <input onChange={e => handleChange(e)} type="number" name="price" className="ms-3" value={formInfo.price} />
                </div>
                <div className="mt-3">
                    <label >Description:</label>
                    <input onChange={e => handleChange(e)} type="text" name="description" className="ms-3" value={formInfo.description} />
                </div>
                <input className="btn btn-secondary mt-3" style={{ width: 120 + "px" }} type="submit" value="Update" />
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            </form>
            <hr />
        </div>
    );
};


export default UpdateProduct;