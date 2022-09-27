import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import productImage from '../../products.png'

const Products = ({products, cartHandler}) => {
    const {img, name, price, ratings, ratingsCount, seller, category, shipping} = products;
    return (
        <div className='product'>
            <img src={img?img:productImage} alt="productPhoto" />
            <h4> {name}</h4>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <p>Ratings : {ratings}</p>
                <p>Total Ratings : {ratingsCount}</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <p>Category : {category}</p>
                <p>Brand : {seller}</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <h4>Price : {price}</h4>
                <p>shipping : {shipping}</p>
            </div>
            <button className='cart-btn' onClick={()=> cartHandler(products)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>

        </div>
    );
};

export default Products;