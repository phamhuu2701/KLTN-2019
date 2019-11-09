import React, { Component } from "react";

// import "./e-shop/css/bootstrap.min.css"
import "./e-shop/css/font-awesome.min.css";
import "./e-shop/css/nouislider.min.css";
import "./e-shop/css/slick-theme.css";
import "./e-shop/css/slick.css";
import "./e-shop/css/style.css";

import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import App from "./../../App";

class StoreProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: {}
        };
    }

    componentWillMount() {
        fetch("/api/stores/" + this.props.match.params.id)
            .then(res => res.json())
            .then(store => {
                this.setState({
                    store: store
                });
            });
    }

    render() {
        if (this.state.store != null) {
            return (
                <div>
                    <Header store={this.state.store} />
                    <Products products={this.state.store.products} />
                    <Footer store={this.state.store} />
                </div>
            );
        }
    }
}

export default StoreProducts;
