import React from 'react';
import './Products.css'
import productImage from '../../products.png'

const Products = ({products}) => {
    const {img, name, price, ratings, ratingsCount, seller, stock, category} = products;
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
                <p>Stock : {stock}</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", marginBottom: "10px"}}>
                <button>Buy Now</button>
                <button>Add To Cart</button>
            </div>

        </div>
    );
};

export default Products;