import React, { Component } from 'react';

// import "./e-shop/css/bootstrap.min.css"
import "./e-shop/css/font-awesome.min.css"
import "./e-shop/css/nouislider.min.css"
import "./e-shop/css/slick-theme.css"
import "./e-shop/css/slick.css"
import "./e-shop/css/style.css"

import Header from "./Header";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";

class StoreProductDetail extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProductDetail />
                <Footer />                
            </div>
        );
    }
}

export default StoreProductDetail;