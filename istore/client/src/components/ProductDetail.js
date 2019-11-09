import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ProductDetail.css";

import priceFormatUtil from '../utils/priceFormat'

export function showProductDetail(product) {
    this.setState({
        product: product
    })
}

export class ImageList extends Component {
    render() {
        if (this.props.images.length > 1) {
            this.props.images.unshift();
            return (
                this.props.images.map((image, index) => {
                    return <div key={index}><Image src={image} /></div>
                })
            )
        } else {
            return (
                <div></div>
            );  
        }
    }
}


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                _doc: {
                    rates: [],
                    images: []
                },
                store: {
                    storeCategory: {}
                }
            }
        }
    }

    componentWillMount() {
        showProductDetail = showProductDetail.bind(this);
    }

    render() {
        return (
            <div className="ProductDetail">
                <div className="product-detail-header">
                    <Row>
                        <Col sm={5}>
                            <div className="product-detail-product-images">
                                <div className="product-detail-product-images-avatar">
                                    <Image src={this.state.product._doc.images[0]} />
                                </div>
                                <div className="product-detail-product-images-more">
                                    <ImageList images={this.state.product._doc.images}/>
                                </div>
                                <div className="product-detail-product-images-more-icons">
                                    <div className="product-detail-product-images-more-icons-previous">
                                        <Image src="./resources/icons/previous.svg" />
                                    </div>
                                    <div className="product-detail-product-images-more-icons-next">
                                        <Image src="./resources/icons/next.svg" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <div className="product-detail-product-body">
                                <div className="product-detail-product-body-title">
                                    <h5>
                                        {this.state.product._doc.name}
                                    </h5>
                                </div>
                                <div className="product-detail-product-body-title-sub">
                                    <div className="product-detail-product-body-rate">
                                        <span className="product-detail-product-body-rate-count">
                                            {this.state.product._doc.rateAvg}
                                        </span>
                                        <span className="product-detail-product-body-rate-title">
                                            <Image src="./resources/icons/star_liked.svg" />
                                            <Image src="./resources/icons/star_liked.svg" />
                                            <Image src="./resources/icons/star_liked.svg" />
                                            <Image src="./resources/icons/half_star.svg" />
                                            <Image src="./resources/icons/star_not_liked.svg" />
                                        </span>
                                    </div>
                                    <div className="product-detail-product-body-comment">
                                        <span className="product-detail-product-body-comment-count">
                                            {this.state.product._doc.rates.length}
                                        </span>
                                        <span className="product-detail-product-body-comment-title">
                                            Đánh giá
                                        </span>
                                    </div>
                                    <div className="product-detail-product-body-sell">
                                        <span className="product-detail-product-body-count">
                                            5.7k
                                        </span>
                                        <span className="product-detail-product-body-sell-title">
                                            Đã bán
                                        </span>
                                    </div>
                                </div>
                                <div className="product-detail-product-body-price">
                                    <span className="product-detail-product-body-price-sale">
                                        GIẢM  {this.state.product._doc.saleoff}%
                                    </span>
                                    <span className="product-detail-product-body-price-main">
                                         {priceFormatUtil(this.state.product._doc.price*(100-this.state.product._doc.saleoff)/100)}đ
                                    </span>
                                    <span className="product-detail-product-body-origin-price">
                                        ( {priceFormatUtil(this.state.product._doc.price)}đ)
                                    </span>
                                </div>
                                <div className="product-detail-product-body-buy-count">
                                    <div className="product-detail-product-body-buy-count-header">
                                        Số lượng
                                    </div>
                                    <div className="product-detail-product-body-buy-count-body">
                                        <div className="product-detail-product-body-buy-count-reduction">
                                            {" "}
                                            -{" "}
                                        </div>
                                        <div className="product-detail-product-body-buy-count-number">
                                            {" "}
                                            1{" "}
                                        </div>
                                        <div className="product-detail-product-body-buy-count-increase">
                                            {" "}
                                            +{" "}
                                        </div>
                                    </div>
                                    <div className="product-detail-product-body-buy-count-footer">
                                        trong 10 sản phẩm có sẵn
                                    </div>
                                </div>
                                <div className="product-detail-product-body-button-buy">
                                    <Button variant="success">GỌI NGAY</Button>
                                </div>
                                <hr />
                                <div className="product-detail-product-body-footer">
                                    <div>
                                        <Image src="./resources/icons/checked.svg" />
                                        <span>
                                            Sản phẩm có sẵn tại cửa hàng
                                        </span>
                                    </div>
                                    <div>
                                        <Image src="./resources/icons/checked.svg" />
                                        <span>Hàng chính hãng 100%</span>
                                    </div>
                                    <div>
                                        <Image src="./resources/icons/checked.svg" />
                                        <span>7 ngày miễn phí đổi hàng</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div className="product-detail-info">
                    <Row>
                        <Col>
                            <div className="product-detail-info-header">
                                <div className="product-detail-info-avatar">
                                    <Image src={this.state.product.store.logo} />
                                </div>
                                <div className="product-detail-info-content">
                                    <div className="product-detail-info-content-store-name">
                                        <h5>{this.state.product.store.name}</h5>
                                    </div>
                                    <div className="product-detail-info-content-store-address">
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="product-detail-info-contact">
                                <div className="product-detail-info-contact-phone">
                                    <Image src="./resources/icons/phone.svg" />
                                    <span>Gọi ngay</span>
                                </div>
                                <Link id="view-store-detail" to={'/store/' + this.state.product.store._id}>
                                    <div className="product-detail-info-contact-view-shop">
                                        <Image src="./resources/icons/search.svg" />
                                        <span>Xem shop</span>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr />
                <div className="product-detail-product-description">
                    <div className="product-detail-product-description-title">
                        <h5>CHI TIẾT SẢN PHẨM</h5>
                    </div>
                    <Row>
                        <Col sm={2}>
                            <span className="product-detail-product-description-table-header">
                                Danh mục
                            </span>
                        </Col>
                        <Col sm={10}>
                            <span className="product-detail-product-description-table-content">
                                {this.state.product.store.storeCategory.name}
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <span className="product-detail-product-description-table-header">
                                Mã sản phẩm
                            </span>
                        </Col>
                        <Col sm={10}>
                            <span className="product-detail-product-description-table-content">
                                HAS2131
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <span className="product-detail-product-description-table-header">
                                Thương hiệu
                            </span>
                        </Col>
                        <Col sm={10}>
                            <span className="product-detail-product-description-table-content">
                                Samsung
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <span className="product-detail-product-description-table-header">
                                Mô tả
                            </span>
                        </Col>
                        <Col sm={10}>
                            <span className="product-detail-product-description-table-content">
                                {this.state.product.store.description}
                            </span>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ProductDetail;
