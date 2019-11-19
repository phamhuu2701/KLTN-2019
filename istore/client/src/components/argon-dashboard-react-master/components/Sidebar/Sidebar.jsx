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
/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";
import { logoutAdmin } from "../../../../services/user.service";
import "./Sidebar.css";

var ps;

class Sidebar extends React.Component {
    state = {
        collapseOpen: false
    };
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    // toggles collapse between opened and closed (true/false)
    toggleCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    // closes the collapse
    closeCollapse = () => {
        this.setState({
            collapseOpen: false
        });
    };
    // creates the links that appear in the left menu / Sidebar
    createLinks = routes => {
        return routes.map((prop, key) => {
            return (
                <NavItem key={key}>
                    <NavLink
                        to={prop.layout + prop.path}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className={prop.icon} />
                        {prop.name}
                    </NavLink>
                </NavItem>
            );
        });
    };
    render() {
        const { bgColor, routes, logo } = this.props;
        let navbarBrandProps;
        if (logo && logo.innerLink) {
            navbarBrandProps = {
                to: logo.innerLink,
                tag: Link
            };
        } else if (logo && logo.outterLink) {
            navbarBrandProps = {
                href: logo.outterLink,
                target: "_blank"
            };
        }
        return (
            <Navbar
                className="navbar-vertical fixed-left navbar-light bg-white"
                expand="md"
                id="sidenav-main"
            >
                <Container fluid>
                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand */}
                    {logo ? (
                        <NavbarBrand className="pt-0" {...navbarBrandProps}>
                            <img
                                alt={logo.imgAlt}
                                className="navbar-brand-img"
                                src={logo.imgSrc}
                            />
                        </NavbarBrand>
                    ) : null}
                    {/* User */}
                    <Nav className="align-items-center d-md-none">
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav className="nav-link-icon">
                                <i className="ni ni-bell-55" />
                            </DropdownToggle>
                            {/* <DropdownMenu
                                aria-labelledby="navbar-default_dropdown_1"
                                className="dropdown-menu-arrow"
                                right
                            >
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Something else here</DropdownItem>
                            </DropdownMenu> */}
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                            alt="..."
                                            // src={require("components/argon-dashboard-react-master/assets/img/theme/team-1-800x800.jpg")}
                                            src={this.props.user && this.props.user.avatars[0]}
                                        />
                                    </span>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>Thông tin cá nhân</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/messages" tag={Link}>
                                    <i className="ni ni-chat-round" />
                                    <span>Tin nhắn</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/stores-manage" tag={Link}>
                                    <i className="ni ni-bullet-list-67" />
                                    <span>Quản lý cửa hàng</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/change-email" tag={Link}>
                                    <i className="ni ni-email-83" />
                                    <span>Đổi email</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/change-phone" tag={Link}>
                                    <i className="ni ni-mobile-button" />
                                    <span>Đổi số điện thoại</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/change-pasword" tag={Link}>
                                    <i className="ni ni-key-25" />
                                    <span>Đổi mật khẩu</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/index" tag={Link}>
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
                    {/* Collapse */}
                    <Collapse navbar isOpen={this.state.collapseOpen}>
                        {/* Collapse header */}
                        <div className="navbar-collapse-header d-md-none">
                            <Row>
                                {logo ? (
                                    <Col className="collapse-brand" xs="6">
                                        {logo.innerLink ? (
                                            <Link to={logo.innerLink}>
                                                <img alt={logo.imgAlt} src={logo.imgSrc} />
                                            </Link>
                                        ) : (
                                                <a href={logo.outterLink}>
                                                    <img alt={logo.imgAlt} src={logo.imgSrc} />
                                                </a>
                                            )}
                                    </Col>
                                ) : null}
                                <Col className="collapse-close" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        onClick={this.toggleCollapse}
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        {/* Form */}
                        <Form className="mt-4 mb-3 d-md-none">
                            <InputGroup className="input-group-rounded input-group-merge">
                                <Input
                                    aria-label="Search"
                                    className="form-control-rounded form-control-prepended"
                                    placeholder="Search"
                                    type="search"
                                />
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <span className="fa fa-search" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        {/* Navigation */}
                        <Nav navbar>{this.createLinks(routes)}</Nav>
                        {/* Divider */}
                        <hr className="my-3" />
                        {/* Heading */}
                        {/* <h6 className="navbar-heading text-muted">Documentation</h6> */}
                        {/* Navigation */}
                        <Nav className="mb-md-3" navbar>
                            <NavItem>
                                <NavLink className="sildebar-logout" onClick={logoutAdmin}>
                                    <i className="ni ni-user-run text-pink" />
                                    Thoát
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/documentation/colors?ref=adr-admin-sidebar">
                                    <i className="ni ni-palette" />
                                    Foundation
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/documentation/alerts?ref=adr-admin-sidebar">
                                    <i className="ni ni-ui-04" />
                                    Components
                                </NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

Sidebar.defaultProps = {
    routes: [{}]
};

Sidebar.propTypes = {
    // links that will be displayed inside the component
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        // innerLink is for links that will direct the user within the app
        // it will be rendered as <Link to="...">...</Link> tag
        innerLink: PropTypes.string,
        // outterLink is for links that will direct the user outside the app
        // it will be rendered as simple <a href="...">...</a> tag
        outterLink: PropTypes.string,
        // the image src of the logo
        imgSrc: PropTypes.string.isRequired,
        // the alt for the img
        imgAlt: PropTypes.string.isRequired
    })
};

export default Sidebar;
