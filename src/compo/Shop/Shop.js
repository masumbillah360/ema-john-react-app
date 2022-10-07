import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart'
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    console.log(products);
    const [cart, setCart] = useState([]);
    const addToCart =selectedProduct=>{
        let newCart = [];
        const exist = cart.find(product=> product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest= cart.filter(product=> product.id !== selectedProduct.id);
            exist.quantity =  exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(selectedProduct.id);
    }
    useEffect(()=>{
        const storedCart = getStoredCart()
        const savedCart = [];
        for(const id in storedCart){
            const addedProducts = products.find(product=>product.id === id);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts)
            }
        }
        setCart(savedCart)
    },[products])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                { products.map((product)=> <Products products={product} cartHandler = {addToCart} key={product.id} />) }
            </div>
        <div className='carts'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;