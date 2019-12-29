/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    Card,
    CardHeader,
    CardImg
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import Header from "components/user/components/Headers/Header.jsx";
import "./BuyStoresMore.css";

class BuyStoresMore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="buy-stores-more" fluid={true}>
                    <Row className="mt-5">
                        <Col>
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row>
                                        <Col>
                                            <h3 id="user-info" className="mb-0">MUA GÓI CỬA HÀNG</h3>
                                        </Col>
                                    </Row>
                                    <hr className="my-4" />
                                    <Row>
                                        <Col lg="6">
                                            <Form>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="stores-count"
                                                            >
                                                                Số lượng
                                                                </label>
                                                            <Input type="select" name="stores-count" id="stores-count"
                                                                onChange={this.onStoreCategoryChange}>
                                                                <option value={null}>Số lượng</option>
                                                                <option value={0}>1</option>
                                                                <option value={1}>2</option>
                                                                <option value={2}>3</option>
                                                                <option value={3}>5</option>
                                                                <option value={4}>10</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="time-limited"
                                                            >
                                                                Thời gian
                                                                </label>
                                                            <Input type="select" name="time-limited" id="time-limited"
                                                                onChange={this.onStoreCategoryChange}>
                                                                <option value={null}>Thời gian</option>
                                                                <option value={0}>6 tháng</option>
                                                                <option value={1}>1 năm</option>
                                                                <option value={2}>2 năm</option>
                                                                <option value={3}>5 năm</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="money"
                                                            >
                                                                Thành tiền
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="money"
                                                                placeholder="Thành tiền"
                                                                type="text"
                                                                required={true}
                                                                readOnly={true}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                        <Col lg="6">
                                            <Card style={{ "width": "100%", "border": "1px solid #cccccc"}}>
                                                <CardImg variant="top" src="http://www.gomeetpete.com/wp-content/uploads/2019/04/top-10-cong-thanh-toan-online-cho-website.jpg" />
                                                <CardHeader>
                                                    <h3>THÔNG TIN DỊCH VỤ</h3>
                                                    <table>
                                                        <tr>
                                                            <td>Số lượng</td>
                                                            <th>5</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Thời gian</td>
                                                            <th>1 năm</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Thanh toán</td>
                                                            <th>345.000 VND</th>
                                                        </tr>
                                                    </table>
                                                </CardHeader>
                                                <Button type="button" color="warning" 
                                                    onClick={this.onSubmitButtonClick} 
                                                    style={{ "width": "96%", "margin": "2%" }}>THANH TOÁN NGAY</Button>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        </Col>
                                    </Row>
                                </CardHeader>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {/* Page content */}
            </>
        );
    }
}

export default BuyStoresMore;
