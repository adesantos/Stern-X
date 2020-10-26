import React, { Component } from 'react';
import Banner from "./components/Banner";
import ProductsDisplay from "./components/products-page/ProductsDisplay";
import ProductsQuote from "./components/products-page/ProductsQuote";


export default class Products extends Component {
    render() {
        return (
            <div>
               <Banner/>
               <ProductsDisplay />
               <ProductsQuote />
            </div>
        )
    }
}
