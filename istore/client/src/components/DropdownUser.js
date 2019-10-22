import React, { Component } from "react";
import { Image } from "react-bootstrap";

import "./DropdownUser.css";

export default class DropdownUser extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false
        }
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked() {
        let x = document.getElementById("dropdown-user-body");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    componentWillMount() {
        // Check user logged in
        fetch('/login', {
            mehthod: 'get'
        })
        .then(result => {
            if (result.status == 200) {
                return result.json();
            }
        })
        .then(isLogged => {
            this.state.isLogged = isLogged;
        })
        .catch(err => console.log(err))
        //this.state.isLogged = true;
    }

    render() {
        if (this.state.isLogged) {
            return (
                <div className="dropdown-user">
                    <Image
                        className="dropdown-user-image"
                        src="images/nancy.jpg"
                        width={50}
                        height={50}
                        roundedCircle
                        onClick={this.onClicked}
                    />
                    <div className="dropdown-user-body" id="dropdown-user-body">
                        <div className="dropdown-user-body-sub"></div>
                        <div className="dropdown-user-body-main">
                            <div className="dropdown-user-body-content">
                                <img
                                    className="dropdown-user-body-content-imgage"
                                    alt=""
                                    src="icons/user.svg"
                                ></img>
                                <span className="dropdown-user-body-content-title">
                                    NANCY - KOREA
                                </span>
                            </div>
                            <hr className="dropdown-user-body-content-divide" />
                            <div className="dropdown-user-body-content">
                                <img
                                    className="dropdown-user-body-content-imgage"
                                    alt=""
                                    src="icons/list.svg"
                                ></img>
                                <span className="dropdown-user-body-content-title">
                                    Quản lý nhà trọ
                                </span>
                            </div>
                            <hr className="dropdown-user-body-content-divide" />
                            <div className="dropdown-user-body-content">
                                <img
                                    className="dropdown-user-body-content-imgage"
                                    alt=""
                                    src="icons/logout.svg"
                                ></img>
                                <span className="dropdown-user-body-content-title">
                                    Thoát
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="dropdown-user">
                    <Image
                        className="dropdown-user-image"
                        src="icons/no_user.svg"
                        width={50}
                        height={50}
                        roundedCircle
                        onClick={this.onClicked}
                    />
                    <div className="dropdown-user-body" id="dropdown-user-body">
                        <div className="dropdown-user-body-sub"></div>
                        <div className="dropdown-user-body-main">
                            <div className="dropdown-user-body-content">
                                <img
                                    className="dropdown-user-body-content-imgage"
                                    alt=""
                                    src="icons/user.svg"
                                ></img>
                                <span className="dropdown-user-body-content-title">
                                    NANCY - KOREA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
