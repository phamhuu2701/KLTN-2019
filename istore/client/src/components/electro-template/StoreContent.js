import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class StoreContent extends Component {
    render() {
        return (
            <div className="StoreContent">
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
                                    <li className="active">Đèn led (227,490 Kết quả)</li>
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
                            {/* ASIDE */}
                            <Col md={3}>
                                {/* aside Widget */}
                                <div className="aside">
                                    <h3 className="aside-title">Phân loại</h3>
                                    <div className="checkbox-filter">
                                        <div className="input-checkbox">
                                            <input type="checkbox" id="category-1" />
                                            <label htmlFor="category-1">
                                                <span />
                                                Laptops
                                                <small>(120)</small>
                                            </label>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="checkbox" id="category-2" />
                                            <label htmlFor="category-2">
                                                <span />
                                                Smartphones
                                                <small>(740)</small>
                                            </label>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="checkbox" id="category-3" />
                                            <label htmlFor="category-3">
                                                <span />
                                                Cameras
                                                <small>(1450)</small>
                                            </label>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="checkbox" id="category-4" />
                                            <label htmlFor="category-4">
                                                <span />
                                                Accessories
                                                <small>(578)</small>
                                            </label>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="checkbox" id="category-5" />
                                            <label htmlFor="category-5">
                                                <span />
                                                Laptops
                                                <small>(120)</small>
                                            </label>
                                        </div>
                                        <div className="input-checkbox">
                                            <input type="checkbox" id="category-6" />
                                            <label htmlFor="category-6">
                                                <span />
                                                Smartphones
                                                <small>(740)</small>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* /aside Widget */}
                                {/* aside Widget */}
                                <div className="aside">
                                    <h3 className="aside-title">Top bán chạy</h3>
                                    <div className="product-widget">
                                        <div className="product-img">
                                            <img src="./img/product01.png" alt="" />
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div className="product-widget">
                                        <div className="product-img">
                                            <img src="./img/product02.png" alt="" />
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                    <div className="product-widget">
                                        <div className="product-img">
                                            <img src="./img/product03.png" alt="" />
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Category</p>
                                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* /aside Widget */}
                            </Col>
                            {/* /ASIDE */}
                            {/* STORE */}
                            <Col md={9}>
                                {/* store top filter */}
                                <div className="store-filter clearfix">
                                    <div className="store-sort">
                                        <label>
                                            Sắp xếp:
                                            <select className="input-select">
                                                <option value={0}>Phổ biến</option>
                                                <option value={1}>Giá tăng dần</option>
                                                <option value={2}>Giá giảm dần</option>
                                            </select>
                                        </label>
                                        <label>
                                            Hiển thị:
                                            <select className="input-select">
                                                <option value={0}>10</option>
                                                <option value={1}>50</option>
                                            </select>
                                        </label>
                                    </div>
                                    <ul className="store-grid">
                                        <li className="active"><i className="fa fa-th" /></li>
                                        <li><a href="#"><i className="fa fa-th-list" /></a></li>
                                    </ul>
                                </div>
                                {/* /store top filter */}
                                {/* store products */}
                                <Row>
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <Link to="store/product-detail">
                                            <div className="product">
                                                <div className="product-img">
                                                    <img src="./img/product01.png" alt="" />
                                                    <div className="product-label">
                                                        <span className="sale">-30%</span>
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
                                        </Link>
                                    </div>
                                    {/* /product */}
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product02.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    <div className="clearfix visible-sm visible-xs" />
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product03.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    <div className="clearfix visible-lg visible-md" />
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product04.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    <div className="clearfix visible-sm visible-xs" />
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product05.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product06.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    <div className="clearfix visible-lg visible-md visible-sm visible-xs" />
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product07.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product08.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                    <div className="clearfix visible-sm visible-xs" />
                                    {/* product */}
                                    <div className="col-md-4 col-xs-6">
                                        <div className="product">
                                            <div className="product-img">
                                                <img src="./img/product09.png" alt="" />
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
                                    </div>
                                    {/* /product */}
                                </Row>
                                {/* /store products */}
                                {/* store bottom filter */}
                                <div className="store-filter clearfix">
                                    <span className="store-qty">Showing 20-100 products</span>
                                    <ul className="store-pagination">
                                        <li className="active">1</li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                                    </ul>
                                </div>
                                {/* /store bottom filter */}
                            </Col>
                            {/* /STORE */}
                        </Row>
                        {/* /row */}
                    </Container>
                    {/* /container */}
                </div>
                {/* /SECTION */}
            </div>
        );
    }
}

export default StoreContent;