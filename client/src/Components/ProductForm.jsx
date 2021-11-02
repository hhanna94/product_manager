import {React, useState} from 'react';

const ProductForm = (props) => {
    // Call on the part to get the onSubmitProp function and the default values for a product (empty strings).
    const {onSubmitProp, defaultProductInfo} = props

    // Set the useState for the formInfo which by default is empty strings.
    const [formInfo, setFormInfo] = useState(defaultProductInfo)

    // When submitting the form, prevent the default (refreshing the page), use the parent's onSubmitProp function to call on the API and create a new product.
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp(formInfo)
        // Reset the text to the default, which is empty strings for all values.
        setFormInfo(defaultProductInfo)
    }

    // When typing in the form, update the values for whatever field you're typing in at the time.
    const handleChange = (e) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    return (
        <div className="container mt-5">
            <form onSubmit={(e) => handleSubmit(e)} className="container w-25 d-flex flex-column align-items-center">
                <div>
                    <label >Title:</label>
                    <input onChange={e => handleChange(e)} type="text" name="title" className="ms-3" value={formInfo.title}/>
                </div>
                <div className="mt-3">
                    <label >Price:</label>
                    <input onChange={e => handleChange(e)} type="number" name="price" className="ms-3" value={formInfo.price}/>
                </div>
                <div className="mt-3">
                    <label >Description:</label>
                    <input onChange={e => handleChange(e)} type="text" name="description" className="ms-3" value={formInfo.description}/>
                </div>
                <input className="btn btn-secondary mt-3" style={{width: 120+"px"}} type="submit" value="Submit" />
            </form>
        </div>
    );
};


export default ProductForm;