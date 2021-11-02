import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div className="text-center">
            {props.products.map( (product, index) => {
                return (
                    <p key={index}>
                        <Link className="d-block" to={`/products/${product._id}`}>{product.title}</Link>
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList