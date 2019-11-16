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

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            user: null,
            stores: 0
        }
    }

    componentDidMount() {
        fetch("/api/login")
            .then(res => res.json())
            .then(result => {
                this.setState({
                    user: result.user
                })

                fetch("/api/users/" + result.user._id + "/stores")
                    .then(res => res.json())
                    .then(stores => {
                        
                        this.setState({
                            stores: stores
                        })
                    });
            });
    }

    render() {
        return (
            <>
                <UserHeader user={this.state.user} />
                {/* Page content */}
                <Container className="mt--7" fluid>
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
                                                    src={this.state.user && this.state.user.avatars[0]}
                                                />
                                            </a>
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
                                                    <span className="description">Cửa hàng</span>
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
                                            {this.state.user && (this.state.user.fullname.lastname + " " + this.state.user.fullname.firstname)}
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            {this.state.user && this.state.user.address}
                                        </div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2" />
                                            Công việc:
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2" />
                                            Chức vụ:
                                        </div>
                                        <hr className="my-4" />
                                        <p>
                                            (Hãy giới thiệu về bạn..)
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
                                                            defaultValue={this.state.user && this.state.user.fullname.firstname}
                                                            id="input-first-name"
                                                            placeholder="Tên"
                                                            type="text"
                                                        />
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
                                                            defaultValue={this.state.user && this.state.user.fullname.lastname}
                                                            id="input-last-name"
                                                            placeholder="Họ"
                                                            type="text"
                                                        />
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
                                                            defaultValue={this.state.user && this.state.user.phone}
                                                            id="input-phone"
                                                            placeholder="Số điện thoại"
                                                            type="tel"
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
                                                            defaultValue={this.state.user && this.state.user.email}
                                                            id="input-email"
                                                            placeholder="istore@gmail.com"
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-birthday"
                                                    >
                                                        Giới tính
                                                    </label>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="radio2" 
                                                            defaultChecked={this.state.user && this.state.user.gender ? true : false}/>{' '}
                                                            Nam
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check>
                                                        <Label check>
                                                            <Input type="radio" name="radio2" 
                                                            defaultChecked={this.state.user && this.state.user.gender ? false : true}/>{' '}
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
                                                            defaultValue={this.state.user && formatDate(this.state.user.birthday)}
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
                                                            defaultValue={this.state.user && this.state.user.address}
                                                            id="input-address"
                                                            placeholder="Địa chỉ"
                                                            type="text"
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
                                            <FormGroup>
                                                <Button className="btn btn-info" style={{float: "right"}}>CẬP NHẬT</Button>
                                            </FormGroup>
                                        </div>                                        
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Profile;
