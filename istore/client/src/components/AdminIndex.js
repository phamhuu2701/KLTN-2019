import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "components/argon-dashboard-react-master/assets/vendor/nucleo/css/nucleo.css";
import "components/argon-dashboard-react-master/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "components/argon-dashboard-react-master/assets/scss/argon-dashboard-react.scss";

import AdminLayout from "components/argon-dashboard-react-master/layouts/Admin.jsx";
import AuthLayout from "components/argon-dashboard-react-master/layouts/Auth.jsx";

class AdminIndex extends Component {
    constructor() {
        super();

        this.state = {
            isLogged: false,
            user: null,
            loginError: false
        };
    }

    componentDidMount() {
        fetch("/api/login")
            .then(res => res.json())
            .then(result => {
                if (result.isLogged === true && result.user) {
                    this.setState({
                        isLogged: true,
                        user: result.user
                    });
                } else {
                    this.setState({
                        loginError: true
                    });
                }
            });
    }

    render() {
        // console.log(this.state.user);
        if (this.state.isLogged) {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/admin"
                            render={props => (
                                <AdminLayout
                                    {...props}
                                    user={this.state.user}
                                />
                            )}
                        />
                        <Route
                            path="/auth"
                            render={props => (
                                <AuthLayout {...props} user={this.state.user} />
                            )}
                        />
                        <Redirect from="/" to="/admin/index" />
                    </Switch>
                </BrowserRouter>
            );
        } else if (this.state.loginError) {
            alert("Vui lòng đăng nhập để có thể thực hiện chức năng này!");
            return <Redirect from="/" to="/" />;
        } else {
            return <div></div>;
        }
    }
}

export default AdminIndex;
