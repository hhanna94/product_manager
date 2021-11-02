import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {productID, successCallback} = props;

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then(res => { successCallback() })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
        </div>
    );
};


export default DeleteButton;