import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import "./e-shop/css/bootstrap.min.css"
import "./e-shop/css/font-awesome.min.css";
import "./e-shop/css/nouislider.min.css";
import "./e-shop/css/slick-theme.css";
import "./e-shop/css/slick.css";
import "./e-shop/css/style.css";

import "./Store.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

class Store extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: null
        };
    }

    UNSAFE_componentWillMount() {
        fetch("/api/stores/" + this.props.match.params.id)
            .then(res => res.json())
            .then(store => {
                this.setState({
                    store: store
                });
            });
    }

    componentDidMount() {
        if(!this.state.store){
            fetch("/api/stores/" + this.props.match.params.id, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
                .then(res => res.json())
                .then(store => {
                    this.setState({
                        store: store
                    });
                });
        }
    }

    render() {
        // console.log(this.state.store);
        if (this.state.store) {
            return (
                <div>
                    <Header store={this.state.store} />
                    <Switch>
                        <Route exact path={this.props.match.path}>
                            <Home store={this.state.store} />
                        </Route>
                        <Route exact path={this.props.match.path + "/products"}>
                            <Products store={this.state.store} />
                        </Route>
                        <Route
                            exact
                            path={this.props.match.path + "/products/:idProduct"}
                        >
                            <ProductDetail />
                        </Route>
                    </Switch>
                    <Footer store={this.state.store} />
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Store;
