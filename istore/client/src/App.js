import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeIndex from "./components/HomeIndex";
import StoreIndex from "./components/StoreIndex";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/store/:id" component={StoreIndex} />
                </Switch>
            </Router>
        );
    }
}
