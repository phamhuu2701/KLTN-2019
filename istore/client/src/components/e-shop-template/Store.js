import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// import "./e-shop/css/bootstrap.min.css"
import "./e-shop/css/font-awesome.min.css";
import "./e-shop/css/nouislider.min.css";
import "./e-shop/css/slick-theme.css";
import "./e-shop/css/slick.css";
import "./e-shop/css/style.css";

import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

class Store extends Component {
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
                <Router>
                    <Header store={this.state.store} />
                    <Switch>
                        <Route exact path="/stores/:id">
                            <Products products={this.state.store.products} />
                        </Route>
                        <Route exact path="/stores/:id/products">
                            <Products products={this.state.store.products} />
                        </Route>
                        <Route exact path="/stores/:idStore/products/:idProduct">
                            <Products products={this.state.store.products} />
                        </Route>
                    </Switch>
                    <Footer store={this.state.store} />
                </Router>
            );
        }
    }
}

export default Store;
