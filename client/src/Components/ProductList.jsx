import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div className="text-center">
            {props.products.map( (product, index) => {
                return (
                    <>
                        <Link key={index} className="d-block" to={`/products/${product._id}`}>{product.title}</Link>
                    </>
                )
            })}
        </div>
    )
}

export default ProductList