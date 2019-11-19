import React, { Component } from "react";

import "./HomeIndex.css";
import Logo from "./istore/Logo";
import Field from "./istore/Field";
import Maps from "./istore/Maps";
import DropdownUser from "./istore/DropdownUser";
import ProductInformation from "./istore/ProductInformation";
import MessageNotify from "./istore/MessageNotify";
import Footer from "./istore/Footer";

// import "bootstrap/dist/css/bootstrap.min.css";

// console.log(window.location.href);

class HomeIndex extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            message: ""
        };
        this.logInToggle = this.logInToggle.bind(this);
        this.successSignUpHandler = this.successSignUpHandler.bind(this);
    }

    logInToggle(state) {
        this.setState({ isLoggedIn: state });
    }

    UNSAFE_componentReceiveProps(nextProps) {
        console.log(nextProps);
    }

    successSignUpHandler(message) {
        this.setState({
            message: message
        });
        setTimeout(() => {
            this.setState({
                message: ""
            });
        }, 4000);
    }

    render() {
        return (
            <div className="app">
                <div className="app-body-left">
                    <Logo />
                    <Field />
                </div>
                <div className="app-body-right">
                    <Maps />
                </div>
                <ProductInformation />
                <DropdownUser
                    logInToggle={this.logInToggle}
                    successSignUpHandler={this.successSignUpHandler}
                />
                <Footer />
                <MessageNotify message={this.state.message} />
            </div>
        );
    }
}

export default HomeIndex;
