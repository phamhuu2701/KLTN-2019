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

class StoreProducts extends Component {
    constructor() {
        super();

        this.state = {
            store: null
        };
    }

    componentWillMount() {
        // console.log(this.props.match.params.id);
        fetch("/api/stores/" + this.props.match.params.id)
            .then(res => res.json())
            .then(store => {
                this.setState({
                    store: store
                });
            });
    }

    render() {
        console.log(this.state.store);
        if (!this.state.store) {
            return <div></div>;
        } else {
            return (
                <div>
                    <Header store={this.state.store}/>
                    <Products />
                    <Footer store={this.state.store}/>
                </div>
            );
        }
    }
}

export default StoreProducts;
