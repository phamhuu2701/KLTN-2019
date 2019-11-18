import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeIndex from "./components/HomeIndex";
import StoreIndex from "./components/StoreIndex";
import AdminIndex from "./components/AdminIndex";

// import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/store/:id" component={StoreIndex} />
                    <Route path="/admin" component={AdminIndex} />
                    <Route path="/auth" component={AdminIndex} />
                </Switch>
            </Router>
        );
    }
}
