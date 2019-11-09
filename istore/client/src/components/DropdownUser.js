import React, { Component } from "react";
import { Form, Button, Image } from "react-bootstrap";
import Cookies from 'js-cookie';

import "./DropdownUser.css";


class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: props.sign
        }
        this.signInSubmit = this.signInSubmit.bind(this);
    }

    signInSubmit(e) {
        e.preventDefault();
        const signInForm = document.querySelector('#signInForm');
        const email = signInForm.childNodes[1].childNodes[0].value;
        const password = signInForm.childNodes[2].childNodes[0].value;

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(result => {
            if (result.status === 200) {
                return result.json();
            } else {
                alert('Lỗi đăng nhập!')
            }
        })
        .then(res => {
            if (res && res.isLogged === true) {
                this.props.loginHandler(res.user);
                document.getElementById("dropdown-user-body").style.display = "none";
            }
        })
        .catch(err => console.log(err))
    }

    signUpSubmit(e) {
        //const signInForm = document.querySelector('#signupForm');
    }

    changeSign(sign) {
        this.setState({
            sign: sign,
            csrfToken: Cookies.get('csrfToken')
        });
    }

    render() {
        if (this.state.sign === 'in') {
            return (
                <Form id='signInForm' onSubmit={this.signInSubmit}>
                    <div className="dropdown-user-body-content sign-in">
                        <Form.Control
                            type="hidden"
                            name="_csrf"
                            defaultValue={Cookies.get('csrfToken')}
                        />
                    </div>
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
                                <img src="./resources/icons/facebook.svg" height="28px" alt=""/> Facebook
                            </button>
                            <div className="or"></div>
                            <button className="btn btn-gplus">
                                <img src="./resources/icons/google.svg" height="28px"  alt=""/> Google
                            </button>
                        </div>
                    </div>
                </Form>
            )
        } else if (this.state.sign === 'up'){
            return (
                <Form id='signUpForm' onSubmit={this.signUpSubmit}>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="hidden"
                            name="_csrf"
                            defaultValue={Cookies.get('csrfToken')}
                        />
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
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="password"
                            name="password_confirm"
                            placeholder="Nhập lại mật khẩu"
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
        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
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

    signIn() {
        this.childSignForm.current.changeSign('in');
    }

    signUp() {
        this.childSignForm.current.changeSign('up');
    }

    UNSAFE_componentWillMount() {
         // Check user logged in
        fetch('/api/login')
        .then(res => {
            return res.json();
        })
        .then(result => {
            this.setState({
                isLogged: result.isLogged,
                user: result.user,
                sign: ''
            });
            this.props.logInToggle(result.isLogged);
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick)
    }
      
    componentWillUnmount() {
        // important
        document.removeEventListener('click', this.handleClick)
    }

    // Logged in successfully
    loginHandler(user) {
        this.setState({
            isLogged: true,
            user: user,
            sign: ''
        });
        this.props.logInToggle(true);
    }

    logoutHandler() {
        fetch('/api/logout', {
            method: 'GET'
        })
        .then(result => {
            if (result.status === 200) {
                this.setState({
                    isLogged: false,
                    sign: ''
                });
                this.props.logInToggle(false);
                document.getElementById("dropdown-user-body").style.display = "none";
            } else {
                alert('Đã có lỗi!!!')
            }
        })
        .catch(err => console.log(err))
    }
      
    handleClick = (event) => {
       const { target } = event
       if (!this.wrapperRef.current.contains(target)) {
            document.getElementById("dropdown-user-body").style.display = "none";
       }
    }

    render() {
        if (this.state.isLogged === true) {
            return (
                <div className="dropdown-user" ref={this.wrapperRef}>
                    <Image
                        className="dropdown-user-image"
                        src={this.state.user.avatars[0]}
                        width={50}
                        height={50}
                        roundedCircle
                        onClick={this.onClicked}
                    />
                    <div className="dropdown-user-body" id="dropdown-user-body">
                        <div className="dropdown-user-body-sub"></div>
                        <div className="dropdown-user-body-main">
                            <div className="dropdown-user-body-content">
                                <a href="/information" className="dropdown-user-body-content-link">
                                    <img
                                        className="dropdown-user-body-content-imgage"
                                        alt=""
                                        src="./resources/icons/user.svg"
                                    ></img>
                                    <span className="dropdown-user-body-content-title">
                                        {this.state.user.fullname.firstname}
                                    </span>
                                </a>
                            </div>
                            <hr className="dropdown-user-body-content-divide" />
                            <div className="dropdown-user-body-content">
                                <a href="/mystore" className="dropdown-user-body-content-link">
                                    <img
                                        className="dropdown-user-body-content-imgage"
                                        alt=""
                                        src="./resources/icons/list.svg"
                                    ></img>
                                    <span className="dropdown-user-body-content-title">
                                        Quản lý cửa hàng
                                    </span>
                                </a>
                            </div>
                            <hr className="dropdown-user-body-content-divide" />
                            <div className="dropdown-user-body-content" onClick={this.logoutHandler}>
                                <img
                                    className="dropdown-user-body-content-imgage"
                                    alt=""
                                    src="./resources/icons/logout.svg"
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
                <div className="dropdown-user" ref={this.wrapperRef}>
                    <Image
                        className="dropdown-user-image"
                        src="./resources/icons/user.svg"
                        width={50}
                        height={50}
                        roundedCircle
                        onClick={this.onClicked}
                    />
                    <div className="dropdown-user-body" id="dropdown-user-body">
                        <div className="dropdown-user-body-sub"></div>
                        <div className="dropdown-user-body-main">
                            <div className="dropdown-user-body-content">
                                <div className="ui buttons">
                                    <button className="ui button btn-success" onClick={this.signIn}>Đăng nhập</button>
                                    <div className="or"></div>
                                    <button className="ui button btn-primary" onClick={this.signUp}>Đăng ký</button>
                                </div>
                            </div>
                            <SignForm ref={this.childSignForm} sign='' loginHandler={(loginSign) => this.loginHandler(loginSign)}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
