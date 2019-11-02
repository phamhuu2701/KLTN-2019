import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Logo from "./components/Logo";
import Field from "./components/Field";
import Maps from "./components/Maps";
import DropdownUser from "./components/DropdownUser";
import StoreInformation from "./components/StoreInformation";
import Information from "./components/Information";
import MyStore from "./components/MyStore";

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
        this.logInToggle = this.logInToggle.bind(this)
    }

    componentDidMount() {
        // Refesh page on page resize
        window.onresize = function() {
            //this.location.reload();
        };
    }

    logInToggle(state) {
        this.setState({isLoggedIn: state});
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
                            <StoreInformation />
                        </div>
                    </Route>
                    <Route path="/information">
                        <div className='app'>
                            <Information isLoggedIn={this.state.isLoggedIn}/>
                        </div>
                    </Route>
                    <Route path="/mystore">
                        <div className='app'>
                            <MyStore isLoggedIn={this.state.isLoggedIn}/>
                        </div>
                    </Route>
                </Switch>
                <DropdownUser logInToggle={this.logInToggle}/>
            </Router>
        );
    }
}
