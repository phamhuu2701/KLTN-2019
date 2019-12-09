import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeIndex from "./components/HomeIndex";
import StoreIndex from "./components/StoreIndex";
import AdminLogin from "./components/AdminLogin";
import AdminIndex from "./components/AdminIndex";
import VerifyIndex from "./components/VerifyIndex";

//import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/store/:template/:id" component={StoreIndex} />
                    <Route exact path="/user" component={AdminLogin} />
                    <Route path="/user" component={AdminIndex} />
                    <Route path="/auth" component={AdminIndex} />
                    <Route path="/verify" component={VerifyIndex} />
                </Switch>
            </Router>
        );
    }
}
