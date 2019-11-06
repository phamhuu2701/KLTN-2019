import React, { Component } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import "./ProductDetail.css";

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <div className="product-detail-header">
          <Row>
            <Col sm={5}>
              <div className="product-detail-product-images">
                <div className="product-detail-product-images-avatar">
                  <Image src="./images/image1.jpg" />
                </div>
                <div className="product-detail-product-images-more">
                  <div>
                    <Image src="./images/image1.jpg" />
                  </div>
                  <div>
                    <Image src="./images/image1.jpg" />
                  </div>
                  <div>
                    <Image src="./images/image1.jpg" />
                  </div>
                  <div>
                    <Image src="./images/image1.jpg" />
                  </div>
                  <div>
                    <Image src="./images/image1.jpg" />
                  </div>
                </div>
                <div className="product-detail-product-images-more-icons">
                  <div className="product-detail-product-images-more-icons-previous">
                    <Image src="./icons/previous.svg" />
                  </div>
                  <div className="product-detail-product-images-more-icons-next">
                    <Image src="./icons/next.svg" />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={7}>
              <div className="product-detail-product-body">
                <div className="product-detail-product-body-title">
                  <h5>
                    Vỏ chống nước cho GoPro hero 5, GoPro hero 6, GoPro hero 7,
                    GoPro new hero 2018
                  </h5>
                </div>
                <div className="product-detail-product-body-title-sub">
                  <div className="product-detail-product-body-rate">
                    <span className="product-detail-product-body-rate-count">
                      3.5
                    </span>
                    <span className="product-detail-product-body-rate-title">
                      <Image src="./icons/star_liked.svg" />
                      <Image src="./icons/star_liked.svg" />
                      <Image src="./icons/star_liked.svg" />
                      <Image src="./icons/half_star.svg" />
                      <Image src="./icons/star_not_liked.svg" />
                    </span>
                  </div>
                  <div className="product-detail-product-body-comment">
                    <span className="product-detail-product-body-comment-count">
                      2.2k
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
                    GIẢM 20%
                  </span>
                  <span className="product-detail-product-body-price-main">
                    299.000 đ
                  </span>
                  <span className="product-detail-product-body-origin-price">
                    (299.000 đ)
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
                    <Image src="./icons/checked.svg" />
                    <span>Sản phẩm có sẵn tại cửa hàng</span>
                  </div>
                  <div>
                    <Image src="./icons/checked.svg" />
                    <span>Hàng chính hãng 100%</span>
                  </div>
                  <div>
                    <Image src="./icons/checked.svg" />
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
                  <Image src="./images/image1.jpg" />
                </div>
                <div className="product-detail-info-content">
                  <div className="product-detail-info-content-store-name">
                    <h5>CanhToanShop's</h5>
                  </div>
                  <div className="product-detail-info-content-store-address">
                    05 Võ Văn Ngân, Thủ Đức, Hồ Chí Minh
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="product-detail-info-contact">
                <div className="product-detail-info-contact-phone">
                  <Image src="./icons/phone.svg" />
                  <span>Gọi ngay</span>
                </div>
                <a href="/store">
                    <div className="product-detail-info-contact-view-shop">
                    <Image src="./icons/search.svg" />
                    <span>Xem shop</span>
                    </div>
                </a>
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
                Điện Thoại & Phụ Kiện &gt; Pin sạc dự phòng
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
                Pin sạc dự phòng không dây Samsung Wireless Charger EB-U1200
                10.000 mAh giúp cung cấp năng lượng cho các thiết bị công nghệ
                của bạn bất cứ lúc nào Tích hợp sạc không dây tiện dụng Sản phẩm
                phù hợp với hầu hết các loại điện thoại, máy tính bảng, máy ảnh
                có hỗ trợ sạc qua cổng USB và hỗ trợ sạc chuẩn Qi Thiết kế nhỏ
                gọn mang đến sự tiện dụng tối đa cho bạn khi mang theo đi du
                lịch, đi công tác Pin có kiểu dáng nhỏ gọn để bạn có thể dễ dàng
                mang theo đi bất cứ đâu Tích hợp đèn led thể hiện dung lượng pin
                Input Voltage (Max, Normal Charge): 5V Input Voltage (Max, Fast
                Charge): 9V, 12V Input Current (Max, Normal Charge): 2A Input
                Current (Max, Fast Charge): 1.67A (9V), 1.25A (12V) Output
                Voltage (Max, Normal Charge): 5V Output Voltage (Max, Fast
                Charge): 9V, 12V Output Current (Max, Normal Charge): 2A Output
                Current (Max, Fast Charge): 1.67A (9V), 1.25A (12V) Wireless
                Charging Output: FAST CHARGE, Qi, Galaxy Watch, Gear S3/Sport
                Kích thước: 149.93 x 70.8 x 15.09 mm Trọng lượng: 234g Sản phẩm
                thương hiệu Samsung Mã sản phẩm: EB-U1200CSEGWW
              </span>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="product-detail-products-similar">
          <div className="product-detail-products-similar-title">
            <h5>SẢN PHẨM TƯƠNG TỰ</h5>
          </div>
          <Row>
            <Col>
              <div>
                <div className="product-detail-products-similar-item-image">
                  <Image src="./images/image1.jpg" />
                </div>
                <div className="product-detail-products-similar-item-title">
                  <span>
                    Pin Sạc dự phòng MINISO PB100 10000mAh hàng chính hãng
                  </span>
                </div>
                <div className="product-detail-products-similar-item-price">
                  <span>199.000 đ</span>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div className="product-detail-products-similar-item-image">
                  <Image src="./images/image1.jpg" />
                </div>
                <div className="product-detail-products-similar-item-title">
                  <span>
                    Pin Sạc dự phòng MINISO PB100 10000mAh hàng chính hãng
                  </span>
                </div>
                <div className="product-detail-products-similar-item-price">
                  <span>199.000 đ</span>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div className="product-detail-products-similar-item-image">
                  <Image src="./images/image1.jpg" />
                </div>
                <div className="product-detail-products-similar-item-title">
                  <span>
                    Pin Sạc dự phòng MINISO PB100 10000mAh hàng chính hãng
                  </span>
                </div>
                <div className="product-detail-products-similar-item-price">
                  <span>199.000 đ</span>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div className="product-detail-products-similar-item-image">
                  <Image src="./images/image1.jpg" />
                </div>
                <div className="product-detail-products-similar-item-title">
                  <span>
                    Pin Sạc dự phòng MINISO PB100 10000mAh hàng chính hãng
                  </span>
                </div>
                <div className="product-detail-products-similar-item-price">
                  <span>199.000 đ</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
