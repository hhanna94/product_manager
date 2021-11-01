import {React, useState} from 'react';
import axios from 'axios';


const ProductForm = () => {
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', formInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    const handleChange = (e) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    return (
        <div className="container mt-5">
            <form onSubmit={(e) => handleSubmit(e)} className="container w-25 d-flex flex-column align-items-center">
                <div>
                    <label >Title:</label>
                    <input onChange={e => handleChange(e)} type="text" name="title" className="ms-3" />
                </div>
                <div className="mt-3">
                    <label >Price:</label>
                    <input onChange={e => handleChange(e)} type="number" name="price" className="ms-3"/>
                </div>
                <div className="mt-3">
                    <label >Description:</label>
                    <input onChange={e => handleChange(e)} type="text" name="description" className="ms-3"/>
                </div>
                <input className="btn btn-secondary mt-3" style={{width: 120+"px"}} type="submit" value="Create" />
            </form>
        </div>
    );
};


export default ProductForm;