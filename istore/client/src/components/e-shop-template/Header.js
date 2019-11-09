import React, { Component } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryHeaderClicked: false,
            menuHeaderClicked: false,
            navToggleButtonClicked: false,
            responsiveNavClicked: false
        };

        this.categoryHeaderOnClick = this.categoryHeaderOnClick.bind(this);
        this.menuHeaderOnClick = this.menuHeaderOnClick.bind(this);
        this.navToggleButtonOnClick = this.navToggleButtonOnClick.bind(this);
        this.responsiveNavOnClick = this.responsiveNavOnClick.bind(this);
    }

    categoryHeaderOnClick() {
        this.setState({
            categoryHeaderClicked: this.state.categoryHeaderClicked
                ? false
                : true,
            menuHeaderClicked:
                this.state.categoryHeaderClicked === true ? false : false
        });
    }

    menuHeaderOnClick() {
        this.setState({
            menuHeaderClicked: this.state.menuHeaderClicked ? false : true,
            categoryHeaderClicked:
                this.state.menuHeaderClicked === true ? false : false
        });
    }

    navToggleButtonOnClick() {
        this.setState({
            navToggleButtonClicked: true,
            responsiveNavClicked: true
        });
    }

    responsiveNavOnClick(event) {
        if (event.target.getAttribute("id") === "navigation") {
            this.setState({
                navToggleButtonClicked: false,
                responsiveNavClicked: false
            });
        }
    }

    render() {
        let categoryListClassName = this.state.categoryHeaderClicked
            ? "category-list open"
            : "category-list";
        let menuListClassName = this.state.menuHeaderClicked
            ? "menu-list open"
            : "menu-list";
        let navigationClassName = this.state.navToggleButtonClicked
            ? "navigation shadow"
            : "navigation";
        let responsiveNavClassName = this.state.responsiveNavClicked
            ? "open"
            : "";

        return (
            <div className="StoreHeader">
                {/* HEADER */}
                <div className="store-header">
                    {/* top Header */}
                    <div id="top-header" className="store-header-top">
                        <Container>
                            <Row>
                                <Col md="6">
                                    <div className="pull-left">
                                        <span>Welcome to {this.props.store.name}</span>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="pull-right">
                                        <ul className="header-top-links">
                                            <li>
                                                <a href="/#">Cửa hàng</a>
                                            </li>
                                            <li>
                                                <a href="/#">Bản tin</a>
                                            </li>
                                            <li className="dropdown default-dropdown">
                                                <a
                                                    href="/#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    aria-expanded="true"
                                                >
                                                    VN
                                                </a>
                                                <ul className="custom-menu">
                                                    <li>
                                                        <a href="/#">
                                                            Vietname (VN)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            English (ENG)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            Russian (Ru)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            French (FR)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            Spanish (Es)
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown default-dropdown">
                                                <a
                                                    href="/#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    aria-expanded="true"
                                                >
                                                    VND
                                                </a>
                                                <ul className="custom-menu">
                                                    <li>
                                                        <a href="/#">VND</a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">USD ($)</a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">EUR (€)</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* /top Header */}
                    {/* header */}
                    <div id="header" className="store-header-main">
                        <Container>
                            <Row>
                                <Col md="2">
                                    <div className="pull-left">
                                        {/* Logo */}
                                        <div className="header-logo store-header-logo">
                                            <a className="logo" href="/#">
                                                <img
                                                    src="https://musicplanetradio.com/wp-content/uploads/2015/07/2BKKR-Shop-Local-Logo1.png"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        {/* /Logo */}
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="pull-left">
                                        {/* Search */}
                                        <div className="header-search">
                                            <Form>
                                                <FormControl
                                                    className="input search-input"
                                                    type="text"
                                                    placeholder="Tìm kiếm"
                                                />
                                                <select className="input search-categories">
                                                    <option value={0}>
                                                        Danh mục
                                                    </option>
                                                    <option value={1}>
                                                        Category 01
                                                    </option>
                                                    <option value={1}>
                                                        Category 02
                                                    </option>
                                                </select>
                                                <button className="search-btn">
                                                    <i className="fa fa-search" />
                                                </button>
                                            </Form>
                                        </div>
                                        {/* /Search */}
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="pull-right">
                                        <ul className="header-btns header-btns-custom">
                                            {/* Account */}
                                            <li className="header-account dropdown default-dropdown">
                                                <div
                                                    className="dropdown-toggle"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-expanded="true"
                                                >
                                                    <div className="header-btns-icon">
                                                        <i className="fa fa-user-o" />
                                                    </div>
                                                    <strong className="text-uppercase">
                                                        Tài khoản
                                                    </strong>
                                                </div>
                                                <a
                                                    href="/#"
                                                    className="text-uppercase"
                                                >
                                                    Nancy
                                                </a>
                                                <ul className="custom-menu">
                                                    <li>
                                                        <a href="/#">
                                                            <i className="fa fa-user-o" />{" "}
                                                            Tài khoản
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <i className="fa fa-heart-o" />{" "}
                                                            Ưu thích
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <i className="fa fa-exchange" />{" "}
                                                            So sánh
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <i className="fa fa-check" />{" "}
                                                            Thanh toán
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <i className="fa fa-unlock-alt" />{" "}
                                                            Đăng nhập
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <i className="fa fa-user-plus" />{" "}
                                                            Đăng ký
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* /Account */}
                                            {/* Cart */}
                                            <li className="header-cart dropdown default-dropdown">
                                                <div
                                                    className="dropdown-toggle"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-expanded="true"
                                                >
                                                    <div className="header-btns-icon">
                                                        <i className="fa fa-shopping-cart" />
                                                        <span className="qty">
                                                            0
                                                        </span>
                                                    </div>
                                                    <strong className="text-uppercase">
                                                        Giỏ hàng
                                                    </strong>
                                                </div>
                                                <a
                                                    href="/#"
                                                    className="text-uppercase"
                                                >
                                                    0 VND
                                                </a>
                                                <div className="custom-menu">
                                                    <div id="shopping-cart">
                                                        <div className="shopping-cart-list">
                                                            {/* <div className="product product-widget">
                                                                <div className="product-thumb">
                                                                    <img
                                                                        src="./resources/e-shop/img/thumb-product01.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="product-body">
                                                                    <h3 className="product-price">
                                                                        $32.50{" "}
                                                                        <span className="qty">
                                                                            x3
                                                                        </span>
                                                                    </h3>
                                                                    <h2 className="product-name">
                                                                        <a href="/#">
                                                                            Product Name
                                                                            Goes Here
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                                <button className="cancel-btn">
                                                                    <i className="fa fa-trash" />
                                                                </button>
                                                            </div>
                                                            <div className="product product-widget">
                                                                <div className="product-thumb">
                                                                    <img
                                                                        src="./resources/e-shop/img/thumb-product01.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="product-body">
                                                                    <h3 className="product-price">
                                                                        $32.50{" "}
                                                                        <span className="qty">
                                                                            x3
                                                                        </span>
                                                                    </h3>
                                                                    <h2 className="product-name">
                                                                        <a href="/#">
                                                                            Product Name
                                                                            Goes Here
                                                                        </a>
                                                                    </h2>
                                                                </div>
                                                                <button className="cancel-btn">
                                                                    <i className="fa fa-trash" />
                                                                </button>
                                                            </div> */}
                                                        </div>
                                                        <div className="shopping-cart-btns">
                                                            <button className="main-btn">
                                                                Xem giỏ hàng
                                                            </button>
                                                            <button className="primary-btn">
                                                                Thanh toán{" "}
                                                                <i className="fa fa-arrow-circle-right" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* /Cart */}
                                            {/* Mobile nav toggle*/}
                                            <li className="nav-toggle">
                                                <button
                                                    className="nav-toggle-btn main-btn icon-btn"
                                                    onClick={
                                                        this
                                                            .navToggleButtonOnClick
                                                    }
                                                >
                                                    <i className="fa fa-bars" />
                                                </button>
                                            </li>
                                            {/* / Mobile nav toggle */}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        {/* header */}
                    </div>
                    {/* container */}
                </div>
                {/* /HEADER */}
                {/* NAVIGATION */}
                <div>
                    <div
                        id="navigation"
                        className={navigationClassName}
                        onClick={this.responsiveNavOnClick}
                    >
                        {/* container */}
                        <div className="container">
                            <div
                                id="responsive-nav"
                                className={responsiveNavClassName}
                            >
                                {/* category nav */}
                                <div className="category-nav show-on-click">
                                    <span
                                        className="category-header"
                                        onClick={this.categoryHeaderOnClick}
                                    >
                                        Danh mục <i className="fa fa-list" />
                                    </span>
                                    <ul className={categoryListClassName}>
                                        <li className="dropdown side-dropdown">
                                            <a
                                                href="/#"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Women’s Clothing{" "}
                                                <span className="dropdown-fa-angle-right">
                                                    <i className="fa fa-angle-right" />
                                                </span>
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row hidden-sm hidden-xs">
                                                    <div className="col-md-12">
                                                        <hr />
                                                        <a
                                                            className="banner banner-1"
                                                            href="/#"
                                                        >
                                                            <img
                                                                src="http://mcvideo.imgvip.keeng.net:8088/phimonbox/images/20180427/1217058.jpg"
                                                                alt=""
                                                            />
                                                            <div className="banner-caption text-center">
                                                                <h2 className="white-color">
                                                                    NEW
                                                                    COLLECTION
                                                                </h2>
                                                                <h3 className="white-color font-weak">
                                                                    HOT DEAL
                                                                </h3>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/#">Men’s Clothing</a>
                                        </li>
                                        <li className="dropdown side-dropdown">
                                            <a
                                                href="/#"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Phones &amp; Accessories{" "}
                                                <span className="dropdown-fa-angle-right">
                                                    <i className="fa fa-angle-right" />
                                                </span>
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4 hidden-sm hidden-xs">
                                                        <a
                                                            className="banner banner-2"
                                                            href="/#"
                                                        >
                                                            <img
                                                                src="https://static.yeah1.com/uploads/editors/12/2019/09/05/sXXKHLuWItodaqbaVIBVIcikwgFFSpl2b8jnQbnC.jpeg"
                                                                alt=""
                                                            />
                                                            <div className="banner-caption">
                                                                <h3 className="white-color">
                                                                    NEW
                                                                    <br />
                                                                    COLLECTION
                                                                </h3>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                Computer &amp; Office
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                Consumer Electronics
                                            </a>
                                        </li>
                                        <li className="dropdown side-dropdown">
                                            <a
                                                href="/#"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Jewelry &amp; Watches{" "}
                                                <span className="dropdown-fa-angle-right">
                                                    <i className="fa fa-angle-right" />
                                                </span>
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/#">Bags &amp; Shoes</a>
                                        </li>
                                        <li>
                                            <a href="/#">View All</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /category nav */}
                                {/* menu nav */}
                                <div className="menu-nav">
                                    <span
                                        className="menu-header"
                                        onClick={this.menuHeaderOnClick}
                                    >
                                        Menu <i className="fa fa-bars" />
                                    </span>
                                    <ul className={menuListClassName}>
                                        <li>
                                            <a href="/#">Trang chủ</a>
                                        </li>
                                        <li>
                                            <a href="/#">Sản phẩm</a>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                href="/#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Hot
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row hidden-sm hidden-xs">
                                                    <div className="col-md-12">
                                                        <hr />
                                                        <a
                                                            className="banner banner-1"
                                                            href="/#"
                                                        >
                                                            <img
                                                                src="https://static2.yan.vn/YanNews/2167221/201903/nancy-la-idol-kpop-co-luong-fan-nam-dong-nhat-viet-nam-dd0c78cb.jpg"
                                                                alt=""
                                                            />
                                                            <div className="banner-caption text-center">
                                                                <h2 className="white-color">
                                                                    NEW
                                                                    COLLECTION
                                                                </h2>
                                                                <h3 className="white-color font-weak">
                                                                    HOT DEAL
                                                                </h3>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown full-width">
                                            <a
                                                href="/#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Mới
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a
                                                                className="banner banner-1"
                                                                href="/#"
                                                            >
                                                                <img
                                                                    src="http://globalcastingresources.com/wp-content/uploads/2019/09/nc2-678x381.jpg"
                                                                    alt=""
                                                                />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">
                                                                        Women’s
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                            <hr />
                                                        </div>
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a
                                                                className="banner banner-1"
                                                                href="/#"
                                                            >
                                                                <img
                                                                    src="http://acrossmag.com/wp-content/uploads/2019/09/nc2-800x445.jpg"
                                                                    alt=""
                                                                />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">
                                                                        Men’s
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a
                                                                className="banner banner-1"
                                                                href="/#"
                                                            >
                                                                <img
                                                                    src="http://mcvideo.imgvip.keeng.net:8088/phimonbox/images/20180427/1217058.jpg"
                                                                    alt=""
                                                                />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">
                                                                        Accessories
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a
                                                                className="banner banner-1"
                                                                href="/#"
                                                            >
                                                                <img
                                                                    src="https://i.ytimg.com/vi/4Hfvkxsg_2o/maxresdefault.jpg"
                                                                    alt=""
                                                                />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">
                                                                        Bags
                                                                    </h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">
                                                                    Categories
                                                                </h3>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Women’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Men’s
                                                                    Clothing
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Phones &amp;
                                                                    Accessories
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Jewelry
                                                                    &amp;
                                                                    Watches
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/#">
                                                                    Bags &amp;
                                                                    Shoes
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/#">Khuyến mãi</a>
                                        </li>
                                        <li className="dropdown default-dropdown">
                                            <a
                                                href="/#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Giới thiệu
                                            </a>
                                            <ul className="custom-menu">
                                                <li>
                                                    <a href="index.html">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="products.html">
                                                        Products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="product-page.html">
                                                        Product Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">
                                                        Checkout
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* menu nav */}
                            </div>
                        </div>
                        {/* /container */}
                    </div>
                </div>
                {/* /NAVIGATION */}
                {/* BREADCRUMB */}
                <div id="breadcrumb">
                    <div className="container">
                        <a href="/#">Trang chủ</a>
                        <span className="breadcrumb-header">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            <a href="/#">Danh sách sản phẩm</a>
                        </span>
                    </div>
                </div>
                {/* /BREADCRUMB */}
            </div>
        );
    }
}

export default Header;
