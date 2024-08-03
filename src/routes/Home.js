import React from 'react';
import Navbar from '../components/Navbar.js';
import HeroImg from '../components/HeroImg.js';
import Footer from '../components/Footer.js';
{/*import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router";*/}



const Home = () => {
    /*
    const {data, error, isLoading} = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart")

    }; */
    return (
        <div>
            
            
            <Navbar/>     
            <HeroImg/>
            
            <Footer/>
        </div>
    )
};

export default Home;