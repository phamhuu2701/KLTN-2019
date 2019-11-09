import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// import "https://fonts.googleapis.com/css?family=Montserrat:400,500,700";
// import "./css/bootstrap.min.css";
import "./css/slick.css";
import "./css/slick-theme.css";
import "./css/nouislider.min.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./Store.css";

import StoreContent from './StoreContent';
import StoreProductDetail from "./StoreProductDetail";

class Store extends Component {
    componentDidUpdate() {
        if (this.props.isLoggedIn === false) {
            alert('You had not logged in yet!')
            window.location = 'http://localhost:3000'
        }
    }
    
    render() {
        return (
            <Router>
            <div className="Store">
                
                {/* HEADER */}
                <header>
                    {/* TOP HEADER */}
                    <div id="top-header">
                        <Container>
                            <ul className="header-links pull-left">
                                <li><a href="#"><i className="fa fa-phone" /> +021-95-51-84</a></li>
                                <li><a href="#"><i className="fa fa-envelope-o" /> email@email.com</a></li>
                                <li><a href="#"><i className="fa fa-map-marker" /> 1734 Stonecoal Road</a></li>
                            </ul>
                            <ul className="header-links pull-right">
                                <li><a href="#"><i className="fa fa-dollar" /> VND</a></li>
                                <li><a href="#"><i className="fa fa-user-o" /> Tài khoản của tôi</a></li>
                            </ul>
                        </Container>
                    </div>
                    {/* /TOP HEADER */}
                    {/* MAIN HEADER */}
                    <div id="header">
                        {/* container */}
                        <Container>
                            {/* row */}
                            <Row>
                                {/* LOGO */}
                                <Col md={3}>
                                    <div className="header-logo store-header-logo-format">
                                        <a href="/" className="logo">
                                            <img src="./img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </Col>
                                {/* /LOGO */}
                                {/* SEARCH BAR */}
                                <Col md={6}>
                                    <div className="header-search store-header-search-format">
                                        <form>
                                            <select className="input-select store-input-select-format">
                                                <option value={0}>Tất cả</option>
                                                <option value={1}>Thiết bị chiếu sáng</option>
                                            </select>
                                            <input className="input store-input-format" placeholder="Tìm kiếm.." />
                                            <button className="search-btn">Tìm</button>
                                        </form>
                                    </div>
                                </Col>
                                {/* /SEARCH BAR */}
                                {/* ACCOUNT */}
                                <Col md={3}>
                                    <div className="header-ctn">
                                        {/* Wishlist */}
                                        <div>
                                            <a href="#">
                                                <i className="fa fa-heart-o" />
                                                <span>Ưa thích</span>
                                                <div className="qty">0</div>
                                            </a>
                                        </div>
                                        {/* /Wishlist */}
                                        {/* Cart */}
                                        <div>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart" />
                                                <span>Giỏ hàng</span>
                                                <div className="qty">0</div>
                                            </a>
                                        </div>
                                        {/* /Cart */}
                                        {/* Menu Toogle */}
                                        <div className="menu-toggle">
                                            <a href="#">
                                                <i className="fa fa-bars" />
                                                <span>Menu</span>
                                            </a>
                                        </div>
                                        {/* /Menu Toogle */}
                                    </div>
                                </Col>
                                {/* /ACCOUNT */}
                            </Row>
                            {/* row */}
                        </Container>
                        {/* container */}
                    </div>
                    {/* /MAIN HEADER */}
                </header>
                {/* /HEADER */}

                {/* NAVIGATION */}
                {/* /NAVIGATION */}

                <Switch>                    
                    <Route exact path="/store">
                        <StoreContent />
                    </Route>
                    <Route path="/store/product-detail">
                        <StoreProductDetail />
                    </Route>
                </Switch>

                {/* NEWSLETTER */}
                <div id="newsletter" className="section">
                    {/* container */}
                    <Container>
                        {/* row */}
                        <Row>
                            <Col md={12}>
                                <div className="newsletter">
                                    <p>Đăng ký nhận tin <strong>MỚI NHẤT</strong></p>
                                    <form>
                                        <input className="input" type="email" placeholder="Email của bạn" />
                                        <button className="newsletter-btn"><i className="fa fa-envelope" /> Đăng ký</button>
                                    </form>
                                    <ul className="newsletter-follow">
                                        <li>
                                            <a href="#"><i className="fa fa-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-pinterest" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        {/* /row */}
                    </Container>
                    {/* /container */}
                </div>
                {/* /NEWSLETTER */}
                {/* FOOTER */}
                <footer id="footer">
                    {/* top footer */}
                    <div className="section">
                        {/* container */}
                        <Container>
                            {/* row */}
                            <Row>
                                <Col md={3} xs={6}>
                                    <div className="footer">
                                        <h3 className="footer-title">Về chúng tôi</h3>
                                        <p>Cửa hàng thiết bị dân dụng với giá cả và chất lượng tốt nhất.</p>
                                        <ul className="footer-links">
                                            <li><a href="#"><i className="fa fa-map-marker" />1734 Stonecoal Road</a></li>
                                            <li><a href="#"><i className="fa fa-phone" />+021-95-51-84</a></li>
                                            <li><a href="#"><i className="fa fa-envelope-o" />email@email.com</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={3} xs={6}>
                                    <div className="footer">
                                        <h3 className="footer-title">Chủ đề</h3>
                                        <ul className="footer-links">
                                            <li><a href="#">Ưu đãi giảm giá</a></li>
                                            <li><a href="#">Thiết bị chiếu sáng</a></li>
                                            <li><a href="#">Thiết bị nhiệt</a></li>
                                            <li><a href="#">Thiết bị nhà bếp</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <div className="clearfix visible-xs" />
                                <Col md={3} xs={6}>
                                    <div className="footer">
                                        <h3 className="footer-title">Liên hệ hỗ trợ</h3>
                                        <ul className="footer-links">
                                            <li><a href="#">Về chúng tôi</a></li>
                                            <li><a href="#">Liên hệ ngay</a></li>
                                            <li><a href="#">Chính sách khách hàng</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={3} xs={6}>
                                    <div className="footer">
                                        <h3 className="footer-title">Dịch vụ</h3>
                                        <ul className="footer-links">
                                            <li><a href="#">Tài khoản của bạn</a></li>
                                            <li><a href="#">Xem giỏ hàng</a></li>
                                            <li><a href="#">Ưu thích</a></li>
                                            <li><a href="#">Hỗ trợ</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            {/* /row */}
                        </Container>
                        {/* /container */}
                    </div>
                    {/* /top footer */}
                </footer>
                {/* /FOOTER */}
            </div>
            </Router>
        );
    }
}

export default Store;