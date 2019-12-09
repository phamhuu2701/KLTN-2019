import React, { Component } from "react";

import "./AdminLogin.css";

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminIsLoggedIn: false
        };
        this.adminLoginHandler = this.adminLoginHandler.bind(this);
    }

    UNSAFE_componentWillMount() {
        if (window.location.pathname === "/user/") {
            window.location.pathname = "/user";
        } else {
            // Check admin logged in
        }
    }

    adminLoginHandler(e) {
        e.preventDefault();
        const username = e.target.childNodes[0].childNodes[0].value;
        const password = e.target.childNodes[1].childNodes[0].value;
        // Login handler
        if (username === "admin" && password === "123") {
            this.setState({
                adminIsLoggedIn: true
            });
        }
    }

    render() {
        if (this.state.adminIsLoggedIn) {
            return <div>Đã đăng nhập</div>;
        } else
            return (
                <div className="limiter">
                    <div
                        className="container-login100"
                        style={{ backgroundImage: 'url("./admin-bg.jpg")' }}
                    >
                        <div className="wrap-login100 p-t-30 p-b-50">
                            <span className="login100-form-title p-b-41">
                                Admin Login
                            </span>
                            <form
                                action="admin"
                                method="post"
                                className="login100-form validate-form p-b-33 p-t-5"
                                onSubmit={this.adminLoginHandler}
                            >
                                <div
                                    className="wrap-input100 validate-input"
                                    data-validate="Enter username"
                                >
                                    <input
                                        className="input100"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                    />
                                    <span
                                        className="focus-input100"
                                        data-placeholder=""
                                    />
                                </div>
                                <div
                                    className="wrap-input100 validate-input"
                                    data-validate="Enter password"
                                >
                                    <input
                                        className="input100"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <span
                                        className="focus-input100"
                                        data-placeholder=""
                                    />
                                </div>
                                <div className="container-login100-form-btn m-t-32">
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}
