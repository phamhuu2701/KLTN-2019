import React, { Component } from "react";
import { Form, Button, Image } from "react-bootstrap";

import "./DropdownUser.css";


class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: props.sign
        }
    }

    changeSign(sign) {
        this.state.sign = sign;
        this.setState(this.state);
    }

    render() {
        if (this.state.sign === 'in') {
            return (
                <Form>
                    <div className="dropdown-user-body-content sign-in">
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="field-filter-form-input-search"
                            required
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-in">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            className="field-filter-form-input-search"
                            required
                        />
                    </div>
                    <div className="dropdown-user-body-content text-center">
                        <Button variant="success" type="submit">
                            Đăng nhập
                        </Button>
                    </div>
                    <hr className="dropdown-user-body-content-divide" />
                    <div className="dropdown-user-body-content sign-in text-center">
                        <div className="ui buttons">
                            <button className="btn btn-fb">
                                <img src="icons/facebook.svg" height="28px"/> Facebook
                            </button>
                            <div className="or"></div>
                            <button className="btn btn-gplus">
                                <img src="icons/google.svg" height="28px"/> Google
                            </button>
                        </div>
                    </div>
                </Form>
            )
        } else if (this.state.sign === 'up'){
            return (
                <Form mehthod="post">
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="text"
                            name="fullname"
                            placeholder="Họ và Tên"
                            className="field-filter-form-input-search"
                            required
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="field-filter-form-input-search"
                            required
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            className="field-filter-form-input-search"
                            required
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            className="field-filter-form-input-search"
                            required
                        />
                    </div>
                    <div className="dropdown-user-body-content text-center">
                        <Button variant="primary" type="submit">
                            Đăng ký
                        </Button>
                    </div>
                </Form>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default class DropdownUser extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            sign: ''
        }
        this.onClicked = this.onClicked.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.childSignForm = React.createRef();
        this.wrapperRef = React.createRef()
    }

    onClicked() {
        let x = document.getElementById("dropdown-user-body");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

<<<<<<< HEAD
    signIn() {
        this.childSignForm.current.changeSign('in');
    }

    signUp() {
        this.childSignForm.current.changeSign('up');
    }

    componentWillMount() {
        // Check user logged in
        fetch('/login', {
            mehthod: 'get'
        })
        .then(result => {
            if (result.status === 200) {
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

    componentDidMount() {
        document.addEventListener('click', this.handleClick)
    }
      
    componentWillUnmount() {
        // important
        document.removeEventListener('click', this.handleClick)
    }
      
    handleClick = (event) => {
       const { target } = event
       if (!this.wrapperRef.current.contains(target)) {
            document.getElementById("dropdown-user-body").style.display = "none";
       }
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
<<<<<<< HEAD
                                    Quản lý cửa hàng
=======
                                    Quản lý nhà trọ
>>>>>>> 49f6930e6ee1a8b98a900d2f1921edaa68ddcd66
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
<<<<<<< HEAD
                <div className="dropdown-user" ref={this.wrapperRef}>
                    <Image
                        className="dropdown-user-image"
                        src="icons/user.svg"
=======
                <div className="dropdown-user">
                    <Image
                        className="dropdown-user-image"
                        src="icons/no_user.svg"
>>>>>>> 49f6930e6ee1a8b98a900d2f1921edaa68ddcd66
                        width={50}
                        height={50}
                        roundedCircle
                        onClick={this.onClicked}
                    />
                    <div className="dropdown-user-body" id="dropdown-user-body">
                        <div className="dropdown-user-body-sub"></div>
                        <div className="dropdown-user-body-main">
                            <div className="dropdown-user-body-content">
<<<<<<< HEAD
                                <div className="ui buttons">
                                    <button className="ui button btn-success" onClick={this.signIn}>Đăng nhập</button>
                                    <div className="or"></div>
                                    <button className="ui button btn-primary" onClick={this.signUp}>Đăng ký</button>
                                </div>
                            </div>
                            <SignForm ref={this.childSignForm} sign=''/>
=======
                                <img
                                    className="dropdown-user-body-content-imgage"
                                    alt=""
                                    src="icons/user.svg"
                                ></img>
                                <span className="dropdown-user-body-content-title">
                                    NANCY - KOREA
                                </span>
                            </div>
>>>>>>> 49f6930e6ee1a8b98a900d2f1921edaa68ddcd66
                        </div>
                    </div>
                </div>
            )
        }
    }
}
