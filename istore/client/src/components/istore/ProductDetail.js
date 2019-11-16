import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./ProductDetail.css";

import priceFormatUtil from "../../utils/priceFormat";
import { getStarsArray, getRatesAvg } from "../../utils/productUtils";

let that;

export function showProductDetail(product) {
  that.setState({
    product: product
  });
}

// export class ImageList extends Component {
//   render() {
//     if (this.props.images.length > 1) {
//       this.props.images.unshift();
//       return this.props.images.map((image, index) => {
//         return (
//           <div key={index}>
//             <Image src={image} />
//           </div>
//         );
//       });
//     } else {
//       return <div></div>;
//     }
//   }
// }

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        _doc: {
          rates: [],
          images: [],
          productCategory: {}
        },
        store: {
          storeCategory: {}
        },
        productCategoryName: "",
        imageAvatar: ""
      }
    };

    this.getProductCategory = this.getProductCategory.bind(this);
    this.changeImageAvatar = this.changeImageAvatar.bind(this);
  }

  UNSAFE_componentWillMount() {
    that = this;
    //showProductDetail = showProductDetail.bind(this);
  }

  getProductCategory(idProductCategory) {
    if (idProductCategory != null) {
      fetch("/api/product-categories/" + idProductCategory)
        .then(res => res.json())
        .then(productCategory => {
          this.setState({
            productCategoryName: (productCategory && productCategory.name)
          });
        });
    }
  }

  changeImageAvatar(image) {
    this.setState({
        imageAvatar: image
      });
  }

  getRateStarsUrl(product){
      let rateStarsUrl = [];
      let starsArray = getStarsArray(product);
      for(let star of starsArray){
        if(star === 1){
            rateStarsUrl.push("./resources/icons/star_liked.svg");
        }
        else if(star === 0.5){
            rateStarsUrl.push("./resources/icons/half_star.svg");
        } else {
            rateStarsUrl.push("./resources/icons/star_not_liked.svg");
        }
    }
    return rateStarsUrl;
  }

  render() {
    // console.log(this.state.product);
    // console.log(this.state.product.store.phone);
    return (
      <div className="ProductDetail">
        <div className="product-detail-header">
          <Row>
            <Col sm={5}>
              <div className="product-detail-product-images">
                <div className="product-detail-product-images-avatar">
                  {/* <Image src={this.state.product._doc.images[0]} /> */}
                  <Image
                    src={
                      this.state.imageAvatar ||
                      this.state.product._doc.images[0]
                    }
                  />
                </div>
                <div className="product-detail-product-images-more">
                  {this.state.product._doc.images.length > 0 &&
                    this.state.product._doc.images.map((image, i) => (
                      <div key={i}>
                        <Image
                          src={image}
                          onMouseEnter={() => this.changeImageAvatar(image)}
                          onClick={() => this.changeImageAvatar(image)}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </Col>
            <Col sm={7}>
              <div className="product-detail-product-body">
                <div className="product-detail-product-body-title">
                  <Link
                    to={
                      "/store/" +
                      this.state.product.store._id +
                      "/products/" +
                      this.state.product._doc._id
                    }
                    target="_blank"
                  >
                    <h3>{this.state.product._doc.name}</h3>
                  </Link>
                </div>
                <div className="product-detail-product-body-title-sub">
                  <div className="product-detail-product-body-rate">
                    <span className="product-detail-product-body-rate-count">
                      <b>{getRatesAvg(this.state.product._doc)}</b>
                    </span>
                    <span className="product-detail-product-body-rate-title">
                        {
                            this.getRateStarsUrl(this.state.product._doc).map((starUrl, i)=>(
                                <Image key={i} src={starUrl} />
                            ))
                        }
                    </span>
                  </div>
                  <div className="product-detail-product-body-comment">
                    <span className="product-detail-product-body-comment-count">
                      <b>{this.state.product._doc.rates.length}</b>
                    </span>
                    <span className="product-detail-product-body-comment-title">
                      Đánh giá
                    </span>
                  </div>
                  <div className="product-detail-product-body-sell">
                    <span className="product-detail-product-body-count">
                      <b>69k</b>
                    </span>
                    <span className="product-detail-product-body-sell-title">
                      Đã bán
                    </span>
                  </div>
                </div>
                <div className="product-detail-product-body-price">
                  <Row>
                    <Col sm="8">
                      <span className="product-detail-product-body-price-main">
                        {priceFormatUtil(
                          (this.state.product._doc.price *
                            (100 - this.state.product._doc.saleoff)) /
                            100
                        )}
                        đ
                      </span>
                      <span className="product-detail-product-body-origin-price">
                        ( {priceFormatUtil(this.state.product._doc.price)}đ)
                      </span>
                    </Col>
                    <Col sm="4">
                      <span className="product-detail-product-body-price-sale">
                        GIẢM {this.state.product._doc.saleoff}%
                      </span>
                    </Col>
                  </Row>
                </div>
                <div className="product-detail-product-body-buy-count">
                  Số lượng
                  <span>
                    <span className="product-detail-product-body-buy-count-reduction">
                      -
                    </span>
                    <span className="product-detail-product-body-buy-count-number">
                      1
                    </span>
                    <span className="product-detail-product-body-buy-count-increase">
                      +
                    </span>
                  </span>
                  trong 999 sản phẩm có sẵn
                </div>
                <div className="product-detail-product-body-button-buy">
                  <a href={"tel:" + this.state.product.store.phone}>
                    <Button variant="success">GỌI NGAY</Button>
                  </a>
                </div>
                <hr />
                <div className="product-detail-product-body-footer">
                  <div>
                    <Image src="./resources/icons/checked.svg" />
                    <span>Sản phẩm có sẵn tại cửa hàng</span>
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
            <Link
                to={"/store/" + this.state.product.store._id}
                target="_blank"
            >
              <div className="product-detail-info-header">
                <div className="product-detail-info-avatar">
                    <Image src={this.state.product.store.logo} />
                </div>
                <div className="product-detail-info-content">
                  <div className="product-detail-info-content-store-name">
                      <h5>{this.state.product.store.name}</h5>
                  </div>
                  <div className="product-detail-info-content-store-address"></div>
                </div>
              </div>
              </Link>
            </Col>
            <Col>
              <div className="product-detail-info-contact">
                <a href={"tel:" + this.state.product.store.phone}>
                    <div className="product-detail-info-contact-phone">
                        <Image src="./resources/icons/phone.svg" />
                        <span>Gọi ngay</span>
                    </div>
                </a>                
                <Link
                  target="_blank"
                  id="view-store-detail"
                  to={"/store/" + this.state.product.store._id}
                >
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
                {this.state.productCategoryName ||
                  this.getProductCategory(
                    this.state.product._doc.productCategory
                  )}
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
              <span className="product-detail-product-description-table-content"></span>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <span className="product-detail-product-description-table-header">
                Thương hiệu
              </span>
            </Col>
            <Col sm={10}>
              <span className="product-detail-product-description-table-content"></span>
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
                {this.state.product._doc.description}
              </span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
