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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "components/argon-dashboard-react-master/variables/charts.jsx";

import "./Index.css";
import Header from "components/argon-dashboard-react-master/components/Headers/Header.jsx";

class Index extends React.Component {
    state = {
        activeNav: 1,
        chartExample1Data: "data1"
    };
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data: "data" + index
                // this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
        let wow = () => {
            console.log(this.state);
        };
        wow.bind(this);
        setTimeout(() => wow(), 1000);
        // this.chartReference.update();
    };
    componentWillMount() {
        if (window.Chart) {
            parseOptions(Chart, chartOptions());
        }
    }
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7 mt--7-custom" fluid>
                    <Row>
                        {/* <Col className="mb-5 mb-xl-0" xl="8"> */}
                        <Col>
                            <Card className="bg-gradient-default shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h6 className="text-uppercase text-light ls-1 mb-1">
                                                Thống kê
                                            </h6>
                                            <h2 className="text-white mb-0">Lượt xem cửa hàng</h2>
                                        </div>
                                        <div className="col">
                                            <Nav className="justify-content-end" pills>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames("py-2 px-3", {
                                                            active: this.state.activeNav === 1
                                                        })}
                                                        href="#pablo"
                                                        onClick={e => this.toggleNavs(e, 1)}
                                                    >
                                                        <span className="d-none d-md-block">Tháng</span>
                                                        <span className="d-md-none">M</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames("py-2 px-3", {
                                                            active: this.state.activeNav === 2
                                                        })}
                                                        data-toggle="tab"
                                                        href="#pablo"
                                                        onClick={e => this.toggleNavs(e, 2)}
                                                    >
                                                        <span className="d-none d-md-block">Quý</span>
                                                        <span className="d-md-none">Q</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames("py-2 px-3", {
                                                            active: this.state.activeNav === 3
                                                        })}
                                                        data-toggle="tab"
                                                        href="#pablo"
                                                        onClick={e => this.toggleNavs(e, 3)}
                                                    >
                                                        <span className="d-none d-md-block">Năm</span>
                                                        <span className="d-md-none">Y</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    {/* Chart */}
                                    <div className="chart">
                                        <Line
                                            data={chartExample1[this.state.chartExample1Data]}
                                            options={chartExample1.options}
                                            getDatasetAtEvent={e => console.log(e)}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {/* <Col xl="4"> */}
                        <Col>
                            <Card className="shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h6 className="text-uppercase text-muted ls-1 mb-1">
                                                Thống kê
                                            </h6>
                                            <h2 className="mb-0">Total orders</h2>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    {/* Chart */}
                                    <div className="chart">
                                        <Bar
                                            data={chartExample2.data}
                                            options={chartExample2.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="mb-5 mb-xl-0" xl="7">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h3 className="mb-0">Top sản phẩm</h3>
                                        </div>
                                        <div className="col text-right">
                                            <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                Xem tất cả
                                            </Button>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Tên sản phẩm</th>
                                            <th scope="col">Lượt xem</th>
                                            <th scope="col">Lượt đặt hàng</th>
                                            <th scope="col">Đánh giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Bóng đén led DN6218</th>
                                            <td>4,569</td>
                                            <td>340</td>
                                            <td>3.8</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                        <Col xl="5">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h3 className="mb-0">Top cửa hàng</h3>
                                        </div>
                                        <div className="col text-right">
                                            <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                Xem tất cả
                                            </Button>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Tên cửa hàng</th>
                                            <th scope="col">Lượt xem</th>
                                            <th scope="col">Đánh giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Tanasa</th>
                                            <td>1,480</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">3.5</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Index;
