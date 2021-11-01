import React from 'react'

const ProductList = (props) => {

    return (
        <div className="container text-center">
            {props.products.map( (product, index) => {
                return <a className="d-block" href={`/products/${product._id}`}>{product.title}</a>
            })}
        </div>
    )
}

export default ProductList