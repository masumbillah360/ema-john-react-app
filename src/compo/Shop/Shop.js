import React, { useEffect, useState } from 'react';
import Product from '../Porducts/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    }, [])
    // console.log(product);
    return (
        <div className='shop-container'>
            <div>
                {products.map(product=> <Product products = {product} key={product.id}></Product>)}
            </div>
            <h1>From Shop..</h1>
        </div>
    );
};

export default Shop;