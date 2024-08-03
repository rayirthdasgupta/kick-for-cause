import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';
import { useGetAllProductsQuery } from '../features/productsApi.js';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router";
import { addToCart } from '../features/cartSlice.js';

const Shop = () => {
  const {data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart")
    };
  return <div>
    <Navbar/>
    <div className='home-container'>
            {isLoading ? 
            (<p>loading</p>) : error ? 
            (<p>An error occured</p>) :
             <>
             <h2>New Arrivals</h2>
             <div className='products'>
                {data?.map(product => <div key = {product.id} className='product'>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt = {product.name}/>
                    <div className='details'>
                        <span>{product.desc}</span>
                        <span className='price'>${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>)}
             </div>
             </>}

            </div>
    <HeroImg2 heading="PRODUCTS." text = "Creative Designs"/> 
    <Footer/>
  </div>;
};

export default Shop;