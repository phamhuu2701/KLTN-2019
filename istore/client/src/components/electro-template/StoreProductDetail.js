import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class StoreProductDetail extends Component {
    render() {
        return (
            <div className="StoreProductDetail">
            {/* BREADCRUMB */}
            <div id="breadcrumb" className="section">
                {/* container */}
                <Container>
                    {/* row */}
                    <Row>
                        <Col md={12}>
                            <ul className="breadcrumb-tree">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Thiết bị chiếu sáng</a></li>
                                <li className="active">PRODUCT NAME GOES HERE</li>
                            </ul>
                        </Col>
                    </Row>
                    {/* /row */}
                </Container>
                {/* /container */}
            </div>
            {/* /BREADCRUMB */}
            {/* SECTION */}
            <div className="section">
            {/* container */}
            <Container>
                {/* row */}
                <Row>
                    {/* Product thumb imgs */}
                    <Col md={2}>
                        <div id="product-imgs">
                        <div className="product-preview">
                            <img src="./../img/product01.png" alt="" />
                        </div>
                        <div className="product-preview">
                            <img src="./../img/product03.png" alt="" />
                        </div>
                        <div className="product-preview">
                            <img src="./../img/product06.png" alt="" />
                        </div>
                        <div className="product-preview">
                            <img src="./../img/product08.png" alt="" />
                        </div>
                        </div>
                    </Col>
                    {/* /Product thumb imgs */}
                    {/* Product main img */}
                    <Col md={5}>
                        <div id="product-main-img">
                        <div className="product-preview">
                            <img src="./../img/product01.png" alt="" />
                        </div>
                        </div>
                    </Col>
                    {/* /Product main img */}
                    {/* Product details */}
                    <Col md={5}>
                        <div className="product-details">
                        <h2 className="product-name">product name goes here</h2>
                        <div>
                            <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            </div>
                            <a className="review-link" href="#">10 Lượt đánh giá</a>
                        </div>
                        <div>
                            <h3 className="product-price">89.000 <del className="product-old-price">99.00</del></h3>
                            <span className="product-available">VND</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="add-to-cart">
                            <div className="qty-label">
                            Số lượng
                            <div className="input-number">
                                <input type="number" defaultValue={1} />
                                <span className="qty-up">+</span>
                                <span className="qty-down">-</span>
                            </div>
                            </div>
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Mua ngay</button>
                        </div>
                        <ul className="product-btns">
                            <li><a href="#"><i className="fa fa-heart-o" /> Ưa thích</a></li>
                        </ul>
                        <ul className="product-links">
                            <li>Thể loại:</li>
                            <li><a href="#">Thiết bị chiếu sáng</a></li>
                        </ul>
                        <ul className="product-links">
                            <li>Chia sẻ:</li>
                            <li><a href="#"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                            <li><a href="#"><i className="fa fa-envelope" /></a></li>
                        </ul>
                        </div>
                    </Col>
                    {/* /Product details */}
                    {/* Product tab */}
                    <Col md={12}>
                        <div id="product-tab">
                        {/* product tab nav */}
                        <ul className="tab-nav">
                            <li className="active"><a data-toggle="tab" href="#tab1">Mô tả</a></li>
                        </ul>
                        {/* /product tab nav */}
                        {/* product tab content */}
                        <div className="tab-content">
                            {/* tab1  */}
                            <div id="tab1">
                            <Row>
                                <Col md={12}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </Col>
                            </Row>
                            </div>
                            {/* /tab1  */}
                        </div>
                        {/* /product tab content  */}
                        </div>
                    </Col>
                    {/* /product tab */}
                    {/* Product tab */}
                    <Col md={12}>
                        <div id="product-tab">
                        {/* product tab nav */}
                        <ul className="tab-nav">
                            <li className="active"><a data-toggle="tab" href="#tab1">Đánh giá</a></li>
                        </ul>
                        {/* /product tab nav */}
                        {/* product tab content */}
                        <div className="tab-content">
                            {/* tab3  */}
                            <div id="tab3">
                            <Row>
                                {/* Rating */}
                                <Col md={3}>
                                <div id="rating">
                                    <div className="rating-avg">
                                    <span>4.5</span>
                                    <div className="rating-stars">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    </div>
                                    <ul className="rating">
                                    <li>
                                        <div className="rating-stars">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        </div>
                                        <div className="rating-progress">
                                        <div style={{width: '80%'}} />
                                        </div>
                                        <span className="sum">3</span>
                                    </li>
                                    <li>
                                        <div className="rating-stars">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        </div>
                                        <div className="rating-progress">
                                        <div style={{width: '60%'}} />
                                        </div>
                                        <span className="sum">2</span>
                                    </li>
                                    <li>
                                        <div className="rating-stars">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        </div>
                                        <div className="rating-progress">
                                        <div />
                                        </div>
                                        <span className="sum">0</span>
                                    </li>
                                    <li>
                                        <div className="rating-stars">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        </div>
                                        <div className="rating-progress">
                                        <div />
                                        </div>
                                        <span className="sum">0</span>
                                    </li>
                                    <li>
                                        <div className="rating-stars">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        </div>
                                        <div className="rating-progress">
                                        <div />
                                        </div>
                                        <span className="sum">0</span>
                                    </li>
                                    </ul>
                                </div>
                                </Col>
                                {/* /Rating */}
                                {/* Reviews */}
                                <Col md={6}>
                                <div id="reviews">
                                    <ul className="reviews">
                                    <li>
                                        <div className="review-heading">
                                        <h5 className="name">John</h5>
                                        <p className="date">27 DEC 2018, 8:0 PM</p>
                                        <div className="review-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                        </div>
                                        </div>
                                        <div className="review-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="review-heading">
                                        <h5 className="name">John</h5>
                                        <p className="date">27 DEC 2018, 8:0 PM</p>
                                        <div className="review-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                        </div>
                                        </div>
                                        <div className="review-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="review-heading">
                                        <h5 className="name">John</h5>
                                        <p className="date">27 DEC 2018, 8:0 PM</p>
                                        <div className="review-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                        </div>
                                        </div>
                                        <div className="review-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    </ul>
                                    <ul className="reviews-pagination">
                                    <li className="active">1</li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                                    </ul>
                                </div>
                                </Col>
                                {/* /Reviews */}
                                {/* Review Form */}
                                <Col md={3}>
                                <div id="review-form">
                                    <form className="review-form">
                                    <input className="input" type="text" placeholder="Họ tên" />
                                    <input className="input" type="email" placeholder="Email" />
                                    <textarea className="input" placeholder="Nội dung đánh giá" defaultValue={""} />
                                    <div className="input-rating">
                                        <span>Đánh giá: </span>
                                        <div className="stars">
                                        <input id="star5" name="rating" defaultValue={5} type="radio" /><label htmlFor="star5" />
                                        <input id="star4" name="rating" defaultValue={4} type="radio" /><label htmlFor="star4" />
                                        <input id="star3" name="rating" defaultValue={3} type="radio" /><label htmlFor="star3" />
                                        <input id="star2" name="rating" defaultValue={2} type="radio" /><label htmlFor="star2" />
                                        <input id="star1" name="rating" defaultValue={1} type="radio" /><label htmlFor="star1" />
                                        </div>
                                    </div>
                                    <button className="primary-btn">Gửi</button>
                                    </form>
                                </div>
                                </Col>
                                {/* /Review Form */}
                            </Row>
                            </div>
                            {/* /tab3  */}
                        </div>
                        {/* /product tab content  */}
                        </div>
                    </Col>
                    {/* /product tab */}
                </Row>
                {/* /row */}
            </Container>
            {/* /container */}
            </div>
            {/* /SECTION */}
            {/* Section */}
            <div className="section">
            {/* container */}
            <Container>
                {/* row */}
                <Row>
                    <Col md={12}>
                        <div className="section-title text-center">
                        <h3 className="title">Sản phẩm liên quan</h3>
                        </div>
                    </Col>
                    {/* product */}
                    <Col md={3} xs={6}>
                        <div className="product">
                        <div className="product-img">
                            <img src="./../img/product01.png" alt="" />
                            <div className="product-label">
                            <span className="sale">-30%</span>
                            </div>
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                            </div>
                            <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        </div>
                        </div>
                    </Col>
                    {/* /product */}
                    {/* product */}
                    <Col md={3} xs={6}>
                        <div className="product">
                        <div className="product-img">
                            <img src="./../img/product02.png" alt="" />
                            <div className="product-label">
                            <span className="new">NEW</span>
                            </div>
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            </div>
                            <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        </div>
                        </div>
                    </Col>
                    {/* /product */}
                    <div className="clearfix visible-sm visible-xs" />
                    {/* product */}
                    <Col md={3} xs={6}>
                        <div className="product">
                        <div className="product-img">
                            <img src="./../img/product03.png" alt="" />
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            </div>
                            <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        </div>
                        </div>
                    </Col>
                    {/* /product */}
                    {/* product */}
                    <Col md={3} xs={6}>
                        <div className="product">
                        <div className="product-img">
                            <img src="./../img/product04.png" alt="" />
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                            <div className="product-rating">
                            </div>
                            <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                        </div>
                        </div>
                    </Col>
                    {/* /product */}
                </Row>
                {/* /row */}
            </Container>
            {/* /container */}
            </div>
            {/* /Section */}
        </div>
        );
    }
}

export default StoreProductDetail;