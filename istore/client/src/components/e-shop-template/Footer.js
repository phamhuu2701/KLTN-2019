import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    FormControl
} from "react-bootstrap";

import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            store: this.props.store
        };
    }

    render() {
        return (
            <div className="StoreFooter">
                {/* FOOTER */}
                <div className="store-footer">
                    <div id="footer" className="section section-grey">
                        {/* container */}
                        <Container>
                            {/* row */}
                            <Row>
                                {/* footer widget */}
                                <Col md="3">
                                    <div className="footer">
                                        {/* footer logo */}
                                        <div className="footer-logo">
                                            <a className="logo" href="/#">
                                                <img
                                                    src={this.state.store.logo}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        {/* /footer logo */}
                                        <div className="footer-store-info">
                                            <p>
                                                <i className="fa fa-phone"></i>
                                                <span>{this.state.store.phone}</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-envelope"></i>
                                                <span>{this.state.store.email}</span>
                                            </p>
                                            <p>
                                                <i className="fa fa-map-marker"></i>
                                                <span>{this.state.store.houseNumber}, {this.state.store.street.name}, 
                                                {this.state.store.district.name}, {this.state.store.city.name}</span>
                                            </p>
                                        </div>
                                        {/* footer social */}
                                        <ul className="footer-social">
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fa fa-pinterest" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* /footer social */}
                                    </div>
                                </Col>
                                {/* /footer widget */}
                                {/* footer widget */}
                                <Col md="3">
                                    <div className="footer">
                                        <h3 className="footer-header">
                                            Tài khoản
                                        </h3>
                                        <ul className="list-links">
                                            <li>
                                                <a href="/#">Tài khoản</a>
                                            </li>
                                            <li>
                                                <a href="/#">Ưa thích</a>
                                            </li>
                                            <li>
                                                <a href="/#">So sánh</a>
                                            </li>
                                            <li>
                                                <a href="/#">Thanh toán</a>
                                            </li>
                                            <li>
                                                <a href="/#">Đăng nhập</a>
                                            </li>
                                            <li>
                                                <a href="/#">Đăng ký</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                {/* /footer widget */}
                                <div className="clearfix visible-sm visible-xs" />
                                {/* footer widget */}
                                <Col md="3">
                                    <div className="footer">
                                        <h3 className="footer-header">
                                            Dịch vụ khách hàng
                                        </h3>
                                        <ul className="list-links">
                                            <li>
                                                <a href="/#">Giới thiệu</a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    Mua &amp; Đổi hàng
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">Giao hàng</a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    Chính sách khách hàng
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                {/* /footer widget */}
                                {/* footer subscribe */}
                                <Col md="3">
                                    <div className="footer">
                                        <h3 className="footer-header">
                                            Đăng ký bản tin
                                        </h3>
                                        <p>
                                            Đăng ký nhận bản tin mới nhất về các
                                            chương trình khuyến mãi và sản phẩm
                                            mới.
                                        </p>
                                        <Form>
                                            <FormGroup>
                                                <FormControl
                                                    type="text"
                                                    placeholder="Email"
                                                />
                                            </FormGroup>
                                            <button className="primary-btn">
                                                Đăng ký
                                            </button>
                                        </Form>
                                    </div>
                                </Col>
                                {/* /footer subscribe */}
                            </Row>
                            {/* /row */}
                        </Container>
                        {/* /container */}
                    </div>
                </div>
                {/* /FOOTER */}
            </div>
        );
    }
}

export default Footer;