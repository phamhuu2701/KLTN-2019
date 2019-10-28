import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Logo from "./components/Logo";
import Field from "./components/Field";
import Maps from "./components/Maps";
import DropdownUser from "./components/DropdownUser";
import StoreInfomation from "./components/StoreInfomation";

export default class App extends Component {

    componentDidMount() {
        // Refesh page on page resize
        window.onresize = function() {
            //this.location.reload();
        };
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
                            <StoreInfomation />
                        </div>
                    </Route>
                    <Route path="/information">
                        <div className='app'>
                            My information
                        </div>
                    </Route>
                    <Route path="/mystore">
                        <div className='app'>
                            My store
                        </div>
                    </Route>
                </Switch>
                <DropdownUser />
            </Router>
        );
    }
}
