import React from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home.js"
import About from "./routes/About.js"
import Contact from "./routes/Contact.js"
import Shop from "./routes/Shop.js"
import {Route, Routes} from "react-router-dom"
import { BrowserRouter, Switch, redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart.jsx";
import NotFound from "./components/NotFound.jsx";


function App() {
  
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/not-found" component={NotFound} />
      
      
    </Routes>
    </>
  );
}

export default App;
