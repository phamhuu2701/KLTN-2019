import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Logo from "./components/Logo";
import Field from "./components/Field";
import Maps from "./components/Maps";
import DropdownUser from "./components/DropdownUser";
import ProductInformation from "./components/ProductInformation";
import Information from "./components/Information";
import MyStore from "./components/MyStore";
import StoreProducts from "./components/e-shop-template/StoreProducts";
import StoreProductDetail from "./components/e-shop-template/StoreProductDetail";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
        this.logInToggle = this.logInToggle.bind(this);
    }

    componentDidMount() {
        // Refesh page on page resize
        // window.onresize = function() {
        //     this.location.reload();
        // };
    }

    logInToggle(state) {
        this.setState({ isLoggedIn: state });
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="app">
                            <div className="app-body-left">
                                <Logo />
                                <Field />
                            </div>
                            <div className="app-body-right">
                                <Maps />
                            </div>
                            <ProductInformation />
                        </div>
                        <DropdownUser logInToggle={this.logInToggle} />
                    </Route>
                    <Route path="/information">
                        <div className="app">
                            <Information isLoggedIn={this.state.isLoggedIn} />
                        </div>
                    </Route>
                    <Route path="/mystore">
                        <MyStore isLoggedIn={this.state.isLoggedIn} />
                    </Route>
                    <Route exact path="/store/:id" component={ StoreProducts }/>
                    <Route exact path="/store/:id/products" component={ StoreProducts }/>
                    <Route exact path="/store/:idStore/products/:idProduct" component={ StoreProductDetail }/>
                </Switch>
            </Router>
        );
    }
}
