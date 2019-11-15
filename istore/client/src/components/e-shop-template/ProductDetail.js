import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatPrice, getStarsArrayClassName } from "./../../utils/productUtils";

import "./ProductDetail.css";

class ProductDetail extends Component {
    constructor() {
        super();

        this.state = {
            idProduct: null,
            desciptionTabClicked: true,
            detailsTabClicked: false,
            reviewsTabClicked: false,
            product: {
                productCategory: {},
                name: "",
                description: "",
                price: 0,
                saleoff: 0,
                images: [""],
                videos: [""],
                timestamp: null
            },
            starsClassNames: [],
            productRates: []
        };

        this.onDescriptionTabClick = this.onDescriptionTabClick.bind(this);
        this.onDetailsTabClick = this.onDetailsTabClick.bind(this);
        this.onReviewsTabClick = this.onReviewsTabClick.bind(this);
    }

    onDescriptionTabClick() {
        this.setState({
            desciptionTabClicked: true,
            detailsTabClicked: false,
            reviewsTabClicked: false
        });
    }

    onDetailsTabClick() {
        this.setState({
            desciptionTabClicked: false,
            detailsTabClicked: true,
            reviewsTabClicked: false
        });
    }

    onReviewsTabClick() {
        this.setState({
            desciptionTabClicked: false,
            detailsTabClicked: false,
            reviewsTabClicked: true
        });
    }

    UNSAFE_componentWillMount() {
        const locationPathnameArray = window.location.pathname.split("/");
        const idProduct =
            locationPathnameArray[locationPathnameArray.length - 1] === ""
                ? locationPathnameArray[locationPathnameArray.length - 2]
                : locationPathnameArray[locationPathnameArray.length - 1];
        // console.log(idProduct);

        this.setState({
            idProduct: idProduct
        });

        fetch("/api/products/" + idProduct)
            .then(res => res.json())
            .then(product => {
                this.setState({
                    product: product
                });
            });
    }

    componentDidMount() {
        fetch("/api/products/" + this.state.idProduct)
            .then(res => res.json())
            .then(product => {
                // update rates
                this.setState({
                    starsClassNames: getStarsArrayClassName(product)
                });

                // update review
                // console.log(this.state.product.rates);
                let productRatesNew = [];
                for (let rate of product.rates) {
                    rate.rateStarClassName = [];
                    for (let i = 0; i < rate.stars; i++) {
                        rate.rateStarClassName.push("fa fa-star");
                    }
                    for (let i = 0; i < 5 - rate.stars; i++) {
                        rate.rateStarClassName.push("fa fa-star-o empty");
                    }
                    productRatesNew.push(rate);
                }
                this.setState({
                    productRates: productRatesNew
                });
            });
    }

    render() {
        let descriptionHeaderTabClassname = this.state.desciptionTabClicked
            ? "active"
            : "";
        let detailsHeaderTabClassname = this.state.detailsTabClicked
            ? "active"
            : "";
        let reviewsHeaderTabClassname = this.state.reviewsTabClicked
            ? "active"
            : "";
        let descriptionTabClassName = this.state.desciptionTabClicked
            ? "active"
            : "fade";
        let detailsTabClassName = this.state.detailsTabClicked
            ? "active"
            : "fade";
        let reviewsTabClassName = this.state.reviewsTabClicked
            ? "active"
            : "fade";

        // console.log(this.props);
        // console.log(window.location.pathname.split("/"));
        // console.log(this.state.product);

        return (
            <div className="ProductDetail">
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
                                            <img
                                                src={
                                                    this.state.product.images[0]
                                                }
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="product product-details clearfix">
                                    <div className="product-body">
                                        <div className="product-label">
                                            <span>Mới</span>
                                            <span className="sale">
                                                giảm{" "}
                                                {this.state.product.saleoff}%
                                            </span>
                                        </div>
                                        <h2 className="product-name">
                                            {this.state.product.name}
                                        </h2>
                                        <h3 className="product-price">
                                            {formatPrice(
                                                (this.state.product.price /
                                                    100) *
                                                    (100 -
                                                        this.state.product
                                                            .saleoff)
                                            )}
                                            đ
                                            <del className="product-old-price">
                                                {formatPrice(
                                                    this.state.product.price
                                                )}
                                                đ
                                            </del>
                                        </h3>
                                        <div>
                                            <div className="product-rating">
                                                {this.state.starsClassNames.map(
                                                    (starsClassName, i) => (
                                                        <i
                                                            key={i}
                                                            className={
                                                                starsClassName
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <Link to="#">
                                                {this.state.productRates.length}{" "}
                                                Đánh giá / Thêm đánh giá
                                            </Link>
                                        </div>
                                        <p>
                                            {this.state.product.description.substring(
                                                0,
                                                250
                                            )}
                                            ...
                                        </p>
                                        <div className="product-options">
                                            <ul className="size-option">
                                                <li>
                                                    <span className="text-uppercase">
                                                        Kích thước:
                                                    </span>
                                                </li>
                                            </ul>
                                            <ul className="color-option">
                                                <li>
                                                    <span className="text-uppercase">
                                                        Màu sắc:
                                                    </span>
                                                </li>
                                            </ul>
                                            <ul className="brand-option">
                                                <li>
                                                    <span className="text-uppercase">
                                                        Thương hiệu:
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-btns">
                                            <div className="qty-input">
                                                <span className="text-uppercase">
                                                    Số lượng:{" "}
                                                </span>
                                                <input
                                                    className="input"
                                                    type="number"
                                                    defaultValue="1"
                                                />
                                            </div>
                                            <button className="primary-btn add-to-cart">
                                                <i className="fa fa-shopping-cart" />{" "}
                                                Mua ngay
                                            </button>
                                            <div className="pull-right">
                                                <button className="main-btn icon-btn">
                                                    <i className="fa fa-heart" />
                                                </button>
                                                <button className="main-btn icon-btn">
                                                    <i className="fa fa-compass" />
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
                                            <span>Hình ảnh</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    {this.state.product.images.map(
                                        (image, i) => (
                                            <div key={i} className="col-md-3">
                                                <div className="product-view product-view-custom">
                                                    <img
                                                        key={i}
                                                        src={image}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="product-tab">
                                    <ul className="tab-nav">
                                        <li
                                            className={
                                                descriptionHeaderTabClassname
                                            }
                                        >
                                            <span
                                                onClick={
                                                    this.onDescriptionTabClick
                                                }
                                            >
                                                Mô tả
                                            </span>
                                        </li>
                                        <li
                                            className={
                                                detailsHeaderTabClassname
                                            }
                                        >
                                            <span
                                                onClick={this.onDetailsTabClick}
                                            >
                                                Chi tiết
                                            </span>
                                        </li>
                                        <li
                                            className={
                                                reviewsHeaderTabClassname
                                            }
                                        >
                                            <span
                                                onClick={this.onReviewsTabClick}
                                            >
                                                Đánh giá
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div
                                            className={
                                                "tab-pane in " +
                                                descriptionTabClassName
                                            }
                                        >
                                            <p>
                                                {this.state.product.description}
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                "tab-pane in " +
                                                detailsTabClassName
                                            }
                                        >
                                            <p>
                                                {this.state.product.description}
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                "tab-pane in " +
                                                reviewsTabClassName
                                            }
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="product-reviews">
                                                        {this.state.productRates
                                                            .length > 0 &&
                                                            this.state.productRates.map(
                                                                (rate, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className="single-review"
                                                                    >
                                                                        <div className="review-heading">
                                                                            <div>
                                                                                <Link to="#">
                                                                                    <i className="fa fa-user" />{" "}
                                                                                    {
                                                                                        rate.fullname
                                                                                    }
                                                                                </Link>
                                                                            </div>
                                                                            <div>
                                                                                <Link to="#">
                                                                                    <i className="fa fa-clock" />{" "}
                                                                                    {
                                                                                        rate.timestamp
                                                                                    }
                                                                                </Link>
                                                                            </div>
                                                                            <div className="review-rating pull-right">
                                                                                {rate.rateStarClassName.map(
                                                                                    (
                                                                                        starsClassName,
                                                                                        i
                                                                                    ) => (
                                                                                        <i
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className={
                                                                                                starsClassName
                                                                                            }
                                                                                        />
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-body">
                                                                            <p>
                                                                                {
                                                                                    rate.content
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}

                                                        <ul className="reviews-pages">
                                                            <li className="active">
                                                                1
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    2
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    3
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="#">
                                                                    <i className="fa fa-caret-right" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className="text-uppercase">
                                                        Viết đánh giá của bạn
                                                    </h4>
                                                    <p>
                                                        Địa chỉ email của bạn sẽ
                                                        không được công bố.
                                                    </p>
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
                                                                defaultValue={
                                                                    ""
                                                                }
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
                                                                        defaultValue={
                                                                            5
                                                                        }
                                                                    />
                                                                    <label htmlFor="star5" />
                                                                    <input
                                                                        type="radio"
                                                                        id="star4"
                                                                        name="rating"
                                                                        defaultValue={
                                                                            4
                                                                        }
                                                                    />
                                                                    <label htmlFor="star4" />
                                                                    <input
                                                                        type="radio"
                                                                        id="star3"
                                                                        name="rating"
                                                                        defaultValue={
                                                                            3
                                                                        }
                                                                    />
                                                                    <label htmlFor="star3" />
                                                                    <input
                                                                        type="radio"
                                                                        id="star2"
                                                                        name="rating"
                                                                        defaultValue={
                                                                            2
                                                                        }
                                                                    />
                                                                    <label htmlFor="star2" />
                                                                    <input
                                                                        type="radio"
                                                                        id="star1"
                                                                        name="rating"
                                                                        defaultValue={
                                                                            1
                                                                        }
                                                                    />
                                                                    <label htmlFor="star1" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="primary-btn">
                                                            Xác nhận
                                                        </button>
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
