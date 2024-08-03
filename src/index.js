import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productsReducer, { productsFetch } from './features/productsSlice.js';
import { productsApi } from './features/productsApi.js';



//npimport reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import cartReducer, { getTotals } from './features/cartSlice.js';

const store = configureStore({

  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter  >
    <Provider store = {store}>
    <App />

    </Provider>
    
     
     
  </BrowserRouter>
);