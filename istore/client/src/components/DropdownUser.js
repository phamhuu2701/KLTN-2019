import React, { Component } from "react";
import { Form, Button, Image } from "react-bootstrap";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';

import "./DropdownUser.css";


class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sign: props.sign,
            feedback: '',
            feedbackContent: '',
            checkFirstname: '',
            checkLastname: '',
            checkEmail: '',
            checkPhone: '',
            checkPassword: '',
            checkPasswordConfirm: ''
        }
        this.signInSubmit = this.signInSubmit.bind(this);
        this.signUpSubmit = this.signUpSubmit.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    UNSAFE_componentWillMount() {
        Cookies.set('1P_JAR', 'Strick', {sameSite: 'none', secure: true})
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            sign: nextProps.sign
        })
    }

    signInSubmit(e) {
        e.preventDefault();
        const emailInput = e.target.childNodes[1].childNodes[0];
        const passwordInput = e.target.childNodes[2].childNodes[0];
        const email = emailInput.value;
        const password = passwordInput.value;
        emailInput.style.borderColor = '#ced4da';
        passwordInput.style.borderColor = '#ced4da';

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
            }
        })
        .then(res => {
            if (res && res.isLogged === true) {
                this.props.loginHandler(res.user);
                document.getElementById("dropdown-user-body").style.display = "none";
            } else {
                emailInput.style.borderColor = 'red';
                passwordInput.style.borderColor = 'red';
            }
        })
        .catch(err => console.log(err))
    }

    signUpSubmit(e) {
        e.preventDefault();
        if (this.state.checkFirstname && this.state.checkLastname && this.state.checkEmail && this.state.checkPhone && this.state.checkPassword && this.state.checkPasswordConfirm) {
            const userInfo = {
                fullname: {
                    firstname: e.target.childNodes[1].childNodes[0].value,
                    lastname: e.target.childNodes[2].childNodes[0].value
                },
                email:              e.target.childNodes[3].childNodes[0].value,
                phone:              e.target.childNodes[4].childNodes[0].value,
                password:           e.target.childNodes[5].childNodes[0].value
            }

            fetch(`/api/users`, {
                method: "POST",
                headers: {
                    'Accept': 'application',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            .then(result => {
                return result.json();
            })
            .then(res => {
                if (res.err) {
                    // Error
                    this.setState({
                        feedback: 'error',
                        feedbackContent: res.err,
                        checkEmail: 'invalid',
                        checkPhone: 'invalid'
                    })
                } else {
                    // Success
                    this.setState({
                        sign: 'in',
                        feedback: '',
                        feedbackContent: ''
                    })
                    this.props.successSignUpHandler(res.message);
                }
            })
            .catch(err => console.log(err));
        } else {
            this.setState({
                checkFirstname: this.state.checkFirstname ? this.state.checkFirstname : 'invalid',
                checkEmail: this.state.checkEmail ? this.state.checkEmail : 'invalid',
                checkPhone: this.state.checkPhone ? this.state.checkPhone : 'invalid',
                checkPassword: this.state.checkPassword ? this.state.checkPassword : 'invalid',
                checkPasswordConfirm: this.state.checkPasswordConfirm ? this.state.checkPasswordConfirm : 'invalid'
            })
        };
    }

    validateInput(e) {
        // Check something
        const key = e.target.name;
        const value = e.target.value;
        switch (key) {
            case 'firstname':
                // Check length
                if (value.length < 3) {
                    this.setState({
                        checkFirstname: 'invalid'
                    })
                } else {
                    this.setState({
                        checkFirstname: 'valid'
                    })
                }
                break;
            case 'lastname':
                // Check length
                if (value.length < 3) {
                    this.setState({
                        checkLastname: 'invalid'
                    })
                } else {
                    this.setState({
                        checkLastname: 'valid'
                    })
                }
                break;
            case 'email':
                // Check contain @
                if (value.includes('@') && value.length > 12) {
                    this.setState({
                        checkEmail: 'valid'
                    })
                } else {
                    this.setState({
                        checkEmail: 'invalid'
                    })
                }
                break;
            case 'phone':
                // Check length and start with 0xxx
                if (value.length < 10 || !value.startsWith('0')) {
                    this.setState({
                        checkPhone: 'invalid'
                    })
                } else {
                    this.setState({
                        checkPhone: 'valid'
                    })
                }
                break;
            case 'password':
                // Check length
                if (value.length < 3) {
                    this.setState({
                        checkPassword: 'invalid'
                    })
                } 
                // Check contain a character
                else if (!value.match(/[a-z]/m)) {
                    this.setState({
                        checkPassword: 'invalid'
                    })
                } else {
                    const passwordConfirm = document.querySelector('input[name="password_confirm"]').value;
                    if (passwordConfirm !== '' && value !== passwordConfirm) {
                        this.setState({
                            checkPassword: 'invalid',
                            checkPasswordConfirm: 'invalid'
                        })
                    }
                    else {
                        this.setState({
                            checkPassword: 'valid',
                            checkPasswordConfirm: 'valid'
                        })
                    }
                }
                break;
            default:
                // Check the password equal password_confirm
                if (value.length < 3) {
                    this.setState({
                        checkPasswordConfirm: 'invalid'
                    })
                }
                // Compare with password
                else if (value !== document.querySelector('input[name="password"]').value) {
                    this.setState({
                        checkPassword: 'invalid',
                        checkPasswordConfirm: 'invalid'
                    })
                }
                else {
                    this.setState({
                        checkPassword: 'valid',
                        checkPasswordConfirm: 'valid'
                    })
                }
                break;
        }
    }

    render() {
        const responseFacebook = (response) => {
            console.log(response);
        }

        const responseGoogle = (response) => {
            console.log(response);
        }

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
                            <FacebookLogin
                                appId="984029191952495"
                                textButton=" Facebook"
                                //autoLoad={true}
                                fields="name,email,picture"
                                //onClick={componentClicked}
                                cssClass="btn btn-fb"
                                icon="fa-facebook"
                                callback={responseFacebook}
                            />
                           {/* <button className="btn btn-fb" type="button" onClick={this.signInWithFacebook}>
                                <img src="./resources/icons/facebook.svg" height="28px" alt=""/> Facebook
                            </button>*/}
                            <div className="or"></div>
                            {/*<button className="btn btn-gplus" type="button" onClick={this.signInWithGoogle}>
                                <img src="./resources/icons/google.svg" height="28px"  alt=""/> Google
                            </button>*/}
                            <GoogleLogin
                                clientId="167843177082-13lcr3s5m9vmlbjagl8ko1qh1jekg8j0.apps.googleusercontent.com"
                                buttonText="Google"
                                className="btn btn-gplus"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="https://localhost:3000"
                            />
                        </div>
                    </div>
                </Form>
            )
        } else if (this.state.sign === 'up'){
            return (
                <Form id='signUpForm' onSubmit={this.signUpSubmit}>
                    {/*<div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="hidden"
                            name="_csrf"
                            defaultValue={Cookies.get('csrfToken')}
                        />
                        
                    </div>*/}
                    <div className={'feedback ' + this.state.feedback}>{this.state.feedbackContent}</div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="text"
                            name="firstname"
                            placeholder="Tên"
                            className={'field-filter-form-input-search ' + this.state.checkFirstname}
                            required
                            onBlur={this.validateInput}
                        />
                        <div className="valid-feedback">Good</div>
                        <div className="invalid-feedback">Fail</div>
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="text"
                            name="lastname"
                            placeholder="Họ"
                            className={'field-filter-form-input-search ' + this.state.checkLastname}
                            required
                            onBlur={this.validateInput}
                        />
                        <div className="valid-feedback">Good</div>
                        <div className="invalid-feedback">Fail</div>
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={'field-filter-form-input-search ' + this.state.checkEmail}
                            required
                            onBlur={this.validateInput}
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="phone"
                            name="phone"
                            placeholder="Số điện thoại"
                            className={'field-filter-form-input-search ' + this.state.checkPhone}
                            minLength="10"
                            maxLength="10"
                            required
                            onBlur={this.validateInput}
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            className={'field-filter-form-input-search ' + this.state.checkPassword}
                            required
                            onBlur={this.validateInput}
                        />
                    </div>
                    <div className="dropdown-user-body-content sign-up">
                        <Form.Control
                            type="password"
                            name="password_confirm"
                            placeholder="Nhập lại mật khẩu"
                            className={'field-filter-form-input-search ' + this.state.checkPasswordConfirm}
                            required
                            onBlur={this.validateInput}
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
        this.setState({
            sign: 'in'
        })
    }

    signUp() {
        this.setState({
            sign: 'up'
        })
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

    UNSAFE_componentWillReceiveProps(nextProps) {

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
                            <SignForm sign={this.state.sign} loginHandler={(loginSign) => this.loginHandler(loginSign)} successSignUpHandler={this.props.successSignUpHandler}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
