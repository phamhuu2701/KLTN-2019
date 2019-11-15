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
import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <>
                <div
                    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                        minHeight: "600px",
                        backgroundImage:
                            "url(" + require("components/argon-dashboard-react-master/assets/img/theme/profile-cover.jpg") + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }}
                >
                    {/* Mask */}
                    <span className="mask bg-gradient-default opacity-8" />
                    {/* Header container */}
                    <Container className="d-flex align-items-center" fluid>
                        <Row>
                            <Col lg="7" md="10">
                                <h1 className="display-2 text-white">
                                    Hello {this.props.user && this.props.user.fullname.firstname}
                                </h1>
                                <p className="text-white mt-0 mb-5">
                                    Chào mừng <b>{this.props.user && this.props.user.fullname.firstname}</b> đến với <b>iStore</b>. Bạn có thể quản lý thông tin cá nhân và các cửa hàng của bạn tại đây. Chúc bạn một ngày làm việc hiệu quả với <b>iStore</b>. 
                                </p>
                                <Button
                                    color="info"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Thông tin cá nhân
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default UserHeader;
