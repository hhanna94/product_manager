import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'

const Main = () => {
    const [products, setProducts] = useState([]);
    const defaultProductInfo = {
        title: "",
        price: "",
        description: "",
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    // const removeFromDom = productID => {
    //     setProducts(products.filter(product => product._id !== productID))
    // }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => setProducts([...products, res.data]))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1 className="text-center">Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} defaultProductInfo={defaultProductInfo} />
            <ProductList products={products}/>
        </>
    )
}

export default Main