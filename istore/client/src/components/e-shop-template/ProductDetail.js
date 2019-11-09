import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./ProductDetail.css";

class ProductDetail extends Component {
    constructor(){
        super();

        this.state = {
            desciptionTabClicked: true,
            detailsTabClicked: false,
            reviewsTabClicked: false
        }

        this.onDescriptionTabClick = this.onDescriptionTabClick.bind(this);
        this.onDetailsTabClick = this.onDetailsTabClick.bind(this);
        this.onReviewsTabClick = this.onReviewsTabClick.bind(this);
    }

    onDescriptionTabClick(){
        this.setState({
            desciptionTabClicked: true,
            detailsTabClicked: false,
            reviewsTabClicked: false
        })
    }

    onDetailsTabClick(){
        this.setState({
            desciptionTabClicked: false,
            detailsTabClicked: true,
            reviewsTabClicked: false
        })
    }

    onReviewsTabClick(){
        this.setState({
            desciptionTabClicked: false,
            detailsTabClicked: false,
            reviewsTabClicked: true
        })
    }

    render() {

        let descriptionHeaderTabClassname = this.state.desciptionTabClicked ? "active" : "";
        let detailsHeaderTabClassname = this.state.detailsTabClicked ? "active" : "";
        let reviewsHeaderTabClassname = this.state.reviewsTabClicked ? "active" : "";
        let descriptionTabClassName = this.state.desciptionTabClicked ? "tab-pane in active" : "tab-pane fade in";
        let detailsTabClassName = this.state.detailsTabClicked ? "tab-pane in active" : "tab-pane fade in";
        let reviewsTabClassName = this.state.reviewsTabClicked ? "tab-pane in active" : "tab-pane fade in";

        return (
            <div className="StoreProductDetail">

                {/* section */}
                <div className="section">
                    {/* container */}
                    <Container>
                    {/* row */}
                    <Row>
                        {/*  Product Details */}
                        <Col md="6">
                        <div className="product product-details clearfix">
                            <div id="product-main-view">
                                <div className="product-view">
                                    <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col md="6">
                        <div className="product product-details clearfix">
                            <div className="product-body">
                            <div className="product-label">
                                <span>Mới</span>
                                <span className="sale">-20%</span>
                            </div>
                            <h2 className="product-name">Product Name Goes Here</h2>
                            <h3 className="product-price">
                                32.000 đ <del className="product-old-price">45.000 đ</del>
                            </h3>
                            <div>
                                <div className="product-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                                </div>
                                <a href="/#">3 Đánh giá / Thêm đánh giá</a>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="product-options">
                                <ul className="size-option">
                                <li>
                                    <span className="text-uppercase">Kích thước:</span>
                                </li>
                                </ul>
                                <ul className="color-option">
                                <li>
                                    <span className="text-uppercase">Màu sắc:</span>
                                </li>
                                </ul>
                                <ul className="brand-option">
                                <li>
                                    <span className="text-uppercase">Thương hiệu:</span>
                                </li>
                                </ul>
                            </div>
                            <div className="product-btns">
                                <div className="qty-input">
                                <span className="text-uppercase">Số lượng: </span>
                                <input className="input" type="number" defaultValue="1"/>
                                </div>
                                <button className="primary-btn add-to-cart">
                                <i className="fa fa-shopping-cart" /> Mua ngay
                                </button>
                                <div className="pull-right">
                                <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                </button>
                                <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                </button>
                                <button className="main-btn icon-btn">
                                    <i className="fa fa-share-alt" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Col>
                        {/* /Product Details */}
                    </Row>
                    <Row>
                        <div className="col-md-12 store-product-detail-list-images">
                            <div className="product-tab">
                            <ul className="tab-nav">
                                <li className="active">
                                <a href="/#">
                                    Hình ảnh
                                </a>
                                </li>
                            </ul>
                            </div>                         
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-view">
                                        <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                    </div>
                                </div>                           
                                <div className="col-md-3">                          
                                    <div className="product-view">
                                        <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                    </div>
                                </div>                         
                                <div className="col-md-3">
                                    <div className="product-view">
                                        <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                    </div>
                                </div>                         
                                <div className="col-md-3">
                                    <div className="product-view">
                                        <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="product-tab">
                            <ul className="tab-nav">
                                <li className={descriptionHeaderTabClassname}>
                                <a data-toggle="tab" href="#tab1" onClick={this.onDescriptionTabClick}>
                                    Mô tả
                                </a>
                                </li>
                                <li className={detailsHeaderTabClassname}>
                                <a data-toggle="tab" href="#tab3" onClick={this.onDetailsTabClick}>
                                    Chi tiết
                                </a>
                                </li>
                                <li className={reviewsHeaderTabClassname}>
                                <a data-toggle="tab" href="#tab2" onClick={this.onReviewsTabClick}>
                                    Đánh giá
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab1" className={descriptionTabClassName}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                </div><div id="tab3" className={detailsTabClassName}>
                                <p>
                                    Chi tiết sản phẩm
                                </p>
                                </div>
                                <div id="tab2" className={reviewsTabClassName}>
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="product-reviews">
                                        <div className="single-review">
                                        <div className="review-heading">
                                            <div>
                                            <a href="/#">
                                                <i className="fa fa-user-o" /> John
                                            </a>
                                            </div>
                                            <div>
                                            <a href="/#">
                                                <i className="fa fa-clock-o" /> 27 DEC 2017 /
                                                8:0 PM
                                            </a>
                                            </div>
                                            <div className="review-rating pull-right">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.Duis aute
                                            irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                        </div>
                                        </div>
                                        <div className="single-review">
                                        <div className="review-heading">
                                            <div>
                                            <a href="/#">
                                                <i className="fa fa-user-o" /> John
                                            </a>
                                            </div>
                                            <div>
                                            <a href="/#">
                                                <i className="fa fa-clock-o" /> 27 DEC 2017 /
                                                8:0 PM
                                            </a>
                                            </div>
                                            <div className="review-rating pull-right">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.Duis aute
                                            irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                        </div>
                                        </div>
                                        <div className="single-review">
                                        <div className="review-heading">
                                            <div>
                                            <a href="/#">
                                                <i className="fa fa-user-o" /> John
                                            </a>
                                            </div>
                                            <div>
                                            <a href="/#">
                                                <i className="fa fa-clock-o" /> 27 DEC 2017 /
                                                8:0 PM
                                            </a>
                                            </div>
                                            <div className="review-rating pull-right">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o empty" />
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat.Duis aute
                                            irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                        </div>
                                        </div>
                                        <ul className="reviews-pages">
                                        <li className="active">1</li>
                                        <li>
                                            <a href="/#">2</a>
                                        </li>
                                        <li>
                                            <a href="/#">3</a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                            <i className="fa fa-caret-right" />
                                            </a>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <h4 className="text-uppercase">Viết đánh giá của bạn</h4>
                                    <p>Địa chỉ email của bạn sẽ không được công bố.</p>
                                    <form className="review-form">
                                        <div className="form-group">
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Họ tên"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <input
                                            className="input"
                                            type="email"
                                            placeholder="Email"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <textarea
                                            className="input"
                                            placeholder="Nội dung đáng giá"
                                            defaultValue={""}
                                        />
                                        </div>
                                        <div className="form-group">
                                        <div className="input-rating">
                                            <strong className="text-uppercase">
                                            Đánh giá:{" "}
                                            </strong>
                                            <div className="stars">
                                            <input
                                                type="radio"
                                                id="star5"
                                                name="rating"
                                                defaultValue={5}
                                            />
                                            <label htmlFor="star5" />
                                            <input
                                                type="radio"
                                                id="star4"
                                                name="rating"
                                                defaultValue={4}
                                            />
                                            <label htmlFor="star4" />
                                            <input
                                                type="radio"
                                                id="star3"
                                                name="rating"
                                                defaultValue={3}
                                            />
                                            <label htmlFor="star3" />
                                            <input
                                                type="radio"
                                                id="star2"
                                                name="rating"
                                                defaultValue={2}
                                            />
                                            <label htmlFor="star2" />
                                            <input
                                                type="radio"
                                                id="star1"
                                                name="rating"
                                                defaultValue={1}
                                            />
                                            <label htmlFor="star1" />
                                            </div>
                                        </div>
                                        </div>
                                        <button className="primary-btn">Xác nhận</button>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Row>
                    {/* /row */}
                    </Container>
                    {/* /container */}
                </div>
                {/* /section */}
                </div>
        );
    }
}

export default ProductDetail;