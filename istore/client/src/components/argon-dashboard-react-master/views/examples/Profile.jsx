/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Label
} from "reactstrap";
// core components
import UserHeader from "components/argon-dashboard-react-master/components/Headers/UserHeader.jsx";
import formatDate from "../../../../utils/dateUtils";
import { getStoresByIdUser } from "../../../../services/user.service";
import "./Profile.css";
import MessageNotify from "../../../istore/MessageNotify";
import { Link } from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // user: props.user,
            stores: [],
            inputFirstname: {
                errorMessage: "",
                value: props.user.fullname.firstname
            },
            inputLastname: {
                errorMessage: "",
                value: props.user.fullname.lastname
            },
            inputAddress: {
                errorMessage: "",
                value: props.user.address
            },
            inputBirthday: {
                errorMessage: "",
                value: props.user.birthday
            },
            inputGender: {
                errorMessage: "",
                value: props.user.gender
            },
            updateResultMessage: null
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onRadioGenderChange = this.onRadioGenderChange.bind(this);
        this.onUpdateSubmitClick = this.onUpdateSubmitClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            stores: getStoresByIdUser(this, this.props.user._id)
        })
    }

    onInputChange(e) {
        // console.log(e.target.id);
        // console.log(e.target.value);

        if (e.target.id === "input-first-name") {
            if (e.target.value.trim() === "") {
                this.setState({
                    inputFirstname: {
                        errorMessage: "Tên không được để trống!",
                        value: this.props.user.fullname.firstname
                    }
                })
            }
            else {
                this.setState({
                    inputFirstname: {
                        errorMessage: "",
                        value: e.target.value
                    }
                })
            }
        }
        if (e.target.id === "input-last-name") {
            if (e.target.value.trim() === "") {
                this.setState({
                    inputLastname: {
                        errorMessage: "Họ không được để trống!",
                        value: this.props.user.fullname.lastname
                    }
                })
            }
            else {
                this.setState({
                    inputLastname: {
                        errorMessage: "",
                        value: e.target.value
                    }
                })
            }
        }
        if (e.target.id === "input-birthday") {
            this.setState({
                inputBirthday: {
                    errorMessage: "",
                    value: e.target.value
                }
            })
        }
        if (e.target.id === "input-address") {
            this.setState({
                inputAddress: {
                    errorMessage: "",
                    value: e.target.value
                }
            })
        }
    }

    onRadioGenderChange(e) {
        this.setState({
            inputGender: {
                errorMessage: "",
                value: (e.target.value === "true" ? true : false)
            }
        })
    }

    onUpdateSubmitClick() {
        // console.log(this.state.inputFirstname);
        // console.log(this.state.inputLastname);
        // console.log(this.state.inputAddress);
        // console.log(this.state.inputBirthday);
        // console.log(this.state.inputGender);

        fetch("/api/users/" + this.props.user._id,
            {
                method: "PUT",
                body: JSON.stringify({
                    fullname: {
                        firstname: this.state.inputFirstname.value,
                        lastname: this.state.inputLastname.value
                    },
                    gender: this.state.inputGender.value,
                    birthday: this.state.inputBirthday.value,
                    address: this.state.inputAddress.value
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(userUpdate => {
                // console.log("Update success!");
                this.setState({
                    updateResultMessage: "Cập nhập thông tin thành công!",
                    inputFirstname: {
                        errorMessage: "",
                        value: userUpdate.fullname.firstname
                    },
                    inputLastname: {
                        errorMessage: "",
                        value: userUpdate.fullname.lastname
                    }
                })
                this.props.updateUserHandler();
            });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

    }

    render() {
        // console.log(this.props);
        //console.log(this.props.user);
        return (
            <>
                <UserHeader user={this.props.user} />
                {/* Page content */}
                <Container className="mt--7 user-profile" fluid>
                    <Row>
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    //   src={require("components/argon-dashboard-react-master/assets/img/theme/team-4-800x800.jpg")}
                                                    src={this.props.user.avatars[0]}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-profile-image-change">
                                            <i className="fa fa-camera" aria-hidden="true"></i>
                                        </div>
                                    </Col>
                                </Row>
                                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <Button
                                            className="mr-4"
                                            color="info"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="sm"
                                        >
                                            Kết nối
                                        </Button>
                                        <Button
                                            className="float-right"
                                            color="default"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="sm"
                                        >
                                            Tin nhắn
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0 pt-md-4">
                                    <Row>
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                                <div>
                                                    <span className="heading">{this.state.stores && this.state.stores.length}</span>
                                                    <span className="description">
                                                        <Link to="/admin/stores-manage">Cửa hàng</Link>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="heading">0</span>
                                                    <span className="description">Đánh giá</span>
                                                </div>
                                                <div>
                                                    <span className="heading">0</span>
                                                    <span className="description">Bình luận</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <h3>
                                            {(this.props.user.fullname.lastname + " " + this.props.user.fullname.firstname)}
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            {this.props.user.address}
                                        </div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2" />
                                            Công việc: ...
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2" />
                                            Chức vụ: ...
                                        </div>
                                        <hr className="my-4" />
                                        <p>
                                            Hãy giới thiệu về bạn..
                                        </p>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 id="user-info" className="mb-0">Thông tin tài khoản</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                Cập nhật
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <h6 className="heading-small text-muted mb-4">
                                            Thông tin cá nhân
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-first-name"
                                                        >
                                                            Tên
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.props.user.fullname.firstname}
                                                            id="input-first-name"
                                                            placeholder="Tên"
                                                            type="text"
                                                            minLength={1}
                                                            maxLength={10}
                                                            required={true}
                                                            onChange={this.onInputChange}
                                                        />
                                                        <span className={"message " + ((this.state.inputFirstname.errorMessage === "") ? "ok" : "error")}>
                                                            {this.state.inputFirstname.errorMessage}
                                                        </span>
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-last-name"
                                                        >
                                                            Họ
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.props.user.fullname.lastname}
                                                            id="input-last-name"
                                                            placeholder="Họ"
                                                            type="text"
                                                            minLength={1}
                                                            maxLength={10}
                                                            required={true}
                                                            onChange={this.onInputChange}
                                                        />
                                                        <span className={"message " + ((this.state.inputLastname.errorMessage === "") ? "ok" : "error")}>
                                                            {this.state.inputLastname.errorMessage}
                                                        </span>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-phone"
                                                        >
                                                            Số điện thoại
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.props.user.phone}
                                                            id="input-phone"
                                                            placeholder="Số điện thoại"
                                                            type="tel"
                                                            minLength={1}
                                                            maxLength={10}
                                                            readOnly={true}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-email"
                                                        >
                                                            Email
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.props.user.email}
                                                            id="input-email"
                                                            placeholder="istore@gmail.com"
                                                            type="email"
                                                            minLength={1}
                                                            maxLength={30}
                                                            readOnly={true}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <label
                                                        className="form-control-label"
                                                    >
                                                        Giới tính
                                                    </label>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="radio2"
                                                                defaultValue={true}
                                                                onChange={this.onRadioGenderChange}
                                                                defaultChecked={this.props.user.gender ? true : false} />{' '}
                                                            Nam
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="radio2"
                                                                defaultValue={false}
                                                                onChange={this.onRadioGenderChange}
                                                                defaultChecked={this.props.user.gender ? false : true} />{' '}
                                                            Nữ
                                                        </Label>
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-birthday"
                                                        >
                                                            Ngày sinh
                                                        </label>
                                                        <Input
                                                            type="date"
                                                            id="input-birthday"
                                                            placeholder="Ngày sinh"
                                                            defaultValue={formatDate(this.props.user.birthday)}
                                                            onChange={this.onInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                        <hr className="my-4" />
                                        {/* Address */}
                                        <h6 className="heading-small text-muted mb-4">
                                            Thông tin liên lạc
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-address"
                                                        >
                                                            Địa chỉ
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            defaultValue={this.props.user.address}
                                                            id="input-address"
                                                            placeholder="Địa chỉ"
                                                            type="text"
                                                            minLength={1}
                                                            maxLength={100}
                                                            onChange={this.onInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            {/* <Row>
                                            <Col lg="4">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                htmlFor="input-city"
                                                >
                                                City
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                defaultValue="New York"
                                                id="input-city"
                                                placeholder="City"
                                                type="text"
                                                />
                                            </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                htmlFor="input-country"
                                                >
                                                Country
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                defaultValue="United States"
                                                id="input-country"
                                                placeholder="Country"
                                                type="text"
                                                />
                                            </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                htmlFor="input-country"
                                                >
                                                Postal code
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                id="input-postal-code"
                                                placeholder="Postal code"
                                                type="number"
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row> */}
                                        </div>
                                        <hr className="my-4" />
                                        {/* Description */}
                                        <h6 className="heading-small text-muted mb-4">Giới thiệu</h6>
                                        <div className="pl-lg-4">
                                            <FormGroup>
                                                <label>Giới thiệu</label>
                                                <Input
                                                    className="form-control-alternative"
                                                    placeholder="Hãy viết gì đó về bạn"
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                        </div>
                                        <div className="pl-lg-4">
                                            <Button onClick={this.onUpdateSubmitClick} type="button" className="btn" style={{ float: "right" }} color="primary">CẬP NHẬT</Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <MessageNotify message={this.state.updateResultMessage} />
                </Container>
            </>
        );
    }
}

export default Profile;
