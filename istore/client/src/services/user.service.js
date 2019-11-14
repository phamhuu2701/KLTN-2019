export function LoginByLocalService(e, loginHandler) {
	e.preventDefault();
    const emailInput = e.target.childNodes[0].childNodes[0];
    const passwordInput = e.target.childNodes[1].childNodes[0];
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
            loginHandler(res.user);
        } else {
            emailInput.style.borderColor = 'red';
            passwordInput.style.borderColor = 'red';
        }
    })
    .catch(err => console.log(err))
}

export function SignUpByLocalService(e, that) {
	e.preventDefault();
    if (that.state.checkFirstname && that.state.checkLastname && that.state.checkEmail && that.state.checkPhone && that.state.checkPassword && that.state.checkPasswordConfirm) {
        const userInfo = {
            fullname: {
                firstname: e.target.childNodes[1].childNodes[0].value,
                lastname: e.target.childNodes[2].childNodes[0].value
            },
            email: e.target.childNodes[3].childNodes[0].value,
            phone: e.target.childNodes[4].childNodes[0].value,
            password: e.target.childNodes[5].childNodes[0].value
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
                that.setState({
                    feedback: 'error',
                    feedbackContent: res.err,
                    checkEmail: 'invalid',
                    checkPhone: 'invalid'
                })
            } else {
                // Success
                that.setState({
                    sign: 'in',
                    feedback: '',
                    feedbackContent: ''
                })
                that.props.successSignUpHandler(res.message);
            }
        })
        .catch(err => console.log(err));
    } else {
        that.setState({
            checkFirstname: that.state.checkFirstname ? that.state.checkFirstname : 'invalid',
            checkEmail: that.state.checkEmail ? that.state.checkEmail : 'invalid',
            checkPhone: that.state.checkPhone ? that.state.checkPhone : 'invalid',
            checkPassword: that.state.checkPassword ? that.state.checkPassword : 'invalid',
            checkPasswordConfirm: that.state.checkPasswordConfirm ? that.state.checkPasswordConfirm : 'invalid'
        })
    };
}

export function LogOutService(that) {
	fetch('/api/logout', {
        method: 'GET'
    })
    .then(result => {
        if (result.status === 200) {
            that.setState({
                isLogged: false,
                sign: ''
            });
            that.propslogInToggle(false);
            document.getElementById("dropdown-user-body").style.display = "none";
        } else {
            alert('Đã có lỗi!!!')
        }
    })
    .catch(err => console.log(err))
}

export function ValidateInputService(e, that) {
	// Check something
    const key = e.target.name;
    const value = e.target.value;
    switch (key) {
        case 'firstname':
            // Check length
            if (value.length < 3) {
                that.setState({
                    checkFirstname: 'invalid'
                })
            } else {
                that.setState({
                    checkFirstname: 'valid'
                })
            }
            break;
        case 'lastname':
            // Check length
            if (value.length < 3) {
                that.setState({
                    checkLastname: 'invalid'
                })
            } else {
                that.setState({
                    checkLastname: 'valid'
                })
            }
            break;
        case 'email':
            // Check contain @
            if (value.includes('@') && value.length > 12) {
                that.setState({
                    checkEmail: 'valid'
                })
            } else {
                that.setState({
                    checkEmail: 'invalid'
                })
            }
            break;
        case 'phone':
            // Check length and start with 0xxx
            if (value.length < 10 || !value.startsWith('0')) {
                that.setState({
                    checkPhone: 'invalid'
                })
            } else {
                that.setState({
                    checkPhone: 'valid'
                })
            }
            break;
        case 'password':
            // Check length
            if (value.length < 3) {
                that.setState({
                    checkPassword: 'invalid'
                })
            } 
            // Check contain a character
            else if (!value.match(/[a-z]/m)) {
                that.setState({
                    checkPassword: 'invalid'
                })
            } else {
                const passwordConfirm = document.querySelector('input[name="password_confirm"]').value;
                if (passwordConfirm !== '' && value !== passwordConfirm) {
                    that.setState({
                        checkPassword: 'invalid',
                        checkPasswordConfirm: 'invalid'
                    })
                }
                else {
                    that.setState({
                        checkPassword: 'valid',
                        checkPasswordConfirm: 'valid'
                    })
                }
            }
            break;
        default:
            // Check the password equal password_confirm
            if (value.length < 3) {
                that.setState({
                    checkPasswordConfirm: 'invalid'
                })
            }
            // Compare with password
            else if (value !== document.querySelector('input[name="password"]').value) {
                that.setState({
                    checkPassword: 'invalid',
                    checkPasswordConfirm: 'invalid'
                })
            }
            else {
                that.setState({
                    checkPassword: 'valid',
                    checkPasswordConfirm: 'valid'
                })
            }
            break;
    }
}