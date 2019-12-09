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
import { Link } from "react-router-dom";
// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";

class AdminNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        })
    }

    render() {
        return (
            <>
                <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                    <Container fluid>
                        <Link
                            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                            to="/"
                        >
                            {this.props.brandText}
                        </Link>
                        <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <FormGroup className="mb-0">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Search" type="text" />
                                </InputGroup>
                            </FormGroup>
                        </Form>
                        <Nav className="align-items-center d-none d-md-flex" navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle className="pr-0" nav>
                                    <Media className="align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img
                                                alt="..."
                                                // src={require("components/argon-dashboard-react-master/assets/img/theme/team-4-800x800.jpg")}
                                                src={this.state.user && this.state.user.avatars[0]}
                                            />
                                        </span>
                                        <Media className="ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm font-weight-bold">
                                                {this.state.user && (this.state.user.fullname.firstname + " " + this.state.user.fullname.lastname)}
                                            </span>
                                        </Media>
                                    </Media>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                    <DropdownItem className="noti-title" header tag="div">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </DropdownItem>
                                    <DropdownItem to="/user/user-profile" tag={Link}>
                                        <i className="ni ni-single-02" />
                                        <span>Thông tin cá nhân</span>
                                    </DropdownItem>
                                    {/* <DropdownItem to="/user/messages" tag={Link}>
                                        <i className="ni ni-chat-round" />
                                        <span>Tin nhắn</span>
                                    </DropdownItem> */}
                                    <DropdownItem to="/user/stores-manage" tag={Link}>
                                        <i className="ni ni-bullet-list-67" />
                                        <span>Quản lý cửa hàng</span>
                                    </DropdownItem>
                                    {/* <DropdownItem to="/user/change-email" tag={Link}>
                                        <i className="ni ni-email-83" />
                                        <span>Đổi email</span>
                                    </DropdownItem>
                                    <DropdownItem to="/user/change-phone" tag={Link}>
                                        <i className="ni ni-mobile-button" />
                                        <span>Đổi số điện thoại</span>
                                    </DropdownItem>
                                    <DropdownItem to="/user/change-pasword" tag={Link}>
                                        <i className="ni ni-key-25" />
                                        <span>Đổi mật khẩu</span>
                                    </DropdownItem> */}
                                    <DropdownItem to="/user/index" tag={Link}>
                                        <i className="ni ni-support-16" />
                                        <span>Liên hệ hỗ trợ</span>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                        <i className="ni ni-user-run" />
                                        <span>Thoát</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default AdminNavbar;
