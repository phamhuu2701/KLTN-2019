import React, { Component } from "react";

import "./HomeIndex.css";
import Logo from "./istore/Logo";
import Field from "./istore/Field";
import Maps from "./istore/Maps";
import DropdownUser from "./istore/DropdownUser";
import ProductInformation from "./istore/ProductInformation";
import MessageNotify from "./istore/MessageNotify";
import Footer from "./istore/Footer";

import { onZoomSearchFieldService } from '../services/store.service';

let that;

export function onZoomSearchField(zoom) {
    onZoomSearchFieldService(that, zoom);
}

class HomeIndex extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            message: ""
        };
        this.logInToggle = this.logInToggle.bind(this);
        this.successSignUpHandler = this.successSignUpHandler.bind(this);
        this.onZoom = this.onZoom.bind(this);
    }

    UNSAFE_componentWillMount() {
        that = this;
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
                message: "",
                leftBody: '',
                rigthBody: ''
            });
        }, 4000);
    }

    onZoom(zoom) {
        if (zoom === 'in') {
            this.setState({
                leftBody: 'big',
                rigthBody: 'small'
            })
        } else if (zoom === 'out') {
            this.setState({
                leftBody: 'small',
                rigthBody: 'big' 
            })
        } else if (zoom === 'normal') {
            this.setState({
                leftBody: '',
                rigthBody: '' 
            })
        } else {
            // Hidden search field
            this.setState({
                leftBody: 'hidden',
                rigthBody: 'fullScreen' 
            })
        }
    }

    render() {
        return (
            <div className="app">
                <div className={"app-body-left " + this.state.leftBody}>
                    <Logo />
                    <Field onZoom={this.onZoom}/>
                </div>
                <div className={"app-body-right " + this.state.rigthBody}>
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
