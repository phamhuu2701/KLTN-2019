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
import { Line } from "react-chartjs-2";
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
    getChart1Data
} from "components/argon-dashboard-react-master/variables/charts.jsx";

import "./Index.css";
import Header from "components/argon-dashboard-react-master/components/Headers/Header.jsx";
import { getStoresByIdUser2, getProductsAllStoresByUser } from "../../../services/user.service";
import { getStoreViewsCount2, getAvgRatesStore } from "../../../services/store.service";
import { sortDescreaseProductsByViewsCount } from "../../../utils/productUtils";
import getAvgRatesProduct, { getViewsCountByTime } from "../../../services/product.service";

class Index extends React.Component {
    state = {
        activeNav: 1,
        chartExample1Data: "data1",
        top10ProductsViewsCout: [],
        top10Stores: []
    };
    toggleNavs = (e, index) => {
        try {
            e.preventDefault();
        } catch (error) {
            // console.log(error);
        }
        this.setState({
            activeNav: index,
            chartExample1Data: "data" + index
            // this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
        let wow = () => {
            // console.log(this.state);
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
    componentDidMount() {
        getProductsAllStoresByUser(this.props.user._id, products => {
            // console.log(products);

            // sắp xếp giảm dần lượt xem
            sortDescreaseProductsByViewsCount(products);

            // chọn top 10
            if (products.length > 10) {
                let top10ProductsViewsCout = [];
                for (let i = 0; i < 10; i++) {
                    top10ProductsViewsCout.push(products[i]);
                }

                this.setState({
                    top10ProductsViewsCout: top10ProductsViewsCout
                })
            }
        })

        getStoresByIdUser2(this.props.user._id, stores => {
            let top10Stores = [];
            if (stores.length > 0) {
                for (let i = 0; i < 10; i++) {
                    top10Stores.push(stores[i]);
                }
            }
            this.setState({
                top10Stores: top10Stores
            })
        })

        getProductsAllStoresByUser(this.props.user._id, products => {
            let data1 = [];
            let data2 = [];
            let data3 = [];

            let currentDate = new Date();
            // console.log(currentDate);

            for(let i=1; i<=12; i++){
                let viewsCountByMonth = getViewsCountByTime(products, currentDate.getFullYear(), i, 0, currentDate.getFullYear(), i, 31);
                console.log(viewsCountByMonth);
                data1.push(viewsCountByMonth);
            }
            for(let i=1; i<=12; i+=3){
                let viewsCountByQuater = getViewsCountByTime(products, currentDate.getFullYear(), i, 0, currentDate.getFullYear(), i+2, 31);
                data2.push(viewsCountByQuater);
            }
            for(let i=currentDate.getFullYear() - 3; i<=currentDate.getFullYear(); i++){
                let viewsCountByYear = getViewsCountByTime(products, i, 1, 0, i, 12, 31);
                data3.push(viewsCountByYear);
            }


            getChart1Data(
                {
                    data1: data1,
                    data2: data2,
                    data3: data3
                }
            );

            this.toggleNavs(this, 1);
        })
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
                    {/* <Row className="mt-5">
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
                                    <div className="chart">
                                        <Bar
                                            data={chartExample2.data}
                                            options={chartExample2.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row> */}
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
                                            <th>#</th>
                                            <th style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>Hình ảnh</th>
                                            <th style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>Tên sản phẩm</th>
                                            <th style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>Lượt xem</th>
                                            <th style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>Đánh giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.top10ProductsViewsCout.length > 0 &&
                                            this.state.top10ProductsViewsCout.map((product, key) => (
                                                <tr key={key}>
                                                    <td style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>{key + 1}</td>
                                                    <td style={{ "padding": "0", "textAlign": "center" }}><img style={{ "height": "30px", "width": "auto" }} alt="" src={product.images[0]}></img></td>
                                                    <th>{product.name.substring(0, 30)}..</th>
                                                    <td>{product.viewsCount.length}</td>
                                                    <td>{getAvgRatesProduct(product)}</td>
                                                </tr>
                                            ))
                                        }
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
                                            <th style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>Lượt xem</th>
                                            <th style={{ "paddingLeft": "0", "paddingRight": "0", "textAlign": "center" }}>Đánh giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.top10Stores.length > 0 &&
                                            this.state.top10Stores.map((store, key) => (
                                                <tr key={key}>
                                                    <th scope="row">{store.name.substring(0, 25)}</th>
                                                    <td style={{ "textAlign": "center" }}>{getStoreViewsCount2(store)}</td>
                                                    <td style={{ "textAlign": "center" }}>
                                                        {Math.round(getAvgRatesStore(store) * 100) / 100}
                                                    </td>
                                                </tr>
                                            ))
                                        }
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
