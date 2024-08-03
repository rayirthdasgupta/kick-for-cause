import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
{/*import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';*/}



//import reportWebVitals from './reportWebVitals';


{/*const store = configureStore({

  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});*/}

{/*store.dispatch(productsFetch());
store.dispatch(getTotals());*/}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter  >
    {/*<Provider>*/}
    <App />

    {/*</Provider>*/}
    
     
     
  </BrowserRouter>,
);