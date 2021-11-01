import axios from 'axios'
import {React, useState, useEffect} from 'react'
import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'

export default () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1 className="text-center">Product Manager</h1>
            <ProductForm />
            <ProductList products={products} />
        </>
    )
}

