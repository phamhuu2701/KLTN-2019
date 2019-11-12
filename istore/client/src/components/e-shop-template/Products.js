import React, { Component } from "react";
import { Link } from "react-router-dom";
import { sortDescreaseProductsBySaleoff, sortIncreaseProductsByTimestamp } from "./../../utils/productUtils";

import "./Products.css";
import Product from "./Product";
import ProductSaleOff from "./ProductSaleOff";

class Products extends Component {
    constructor() {
        super();

        this.state = {
            top3ProductsSaleoff: [],
            top12ProductsNew: []
        };
    }

    componentDidMount() {
        let top3ProductsSaleoff = [];
        let products = sortDescreaseProductsBySaleoff(this.props.store.products);
        for(let i=0; i<3; i++){
            if(products[i]){
                top3ProductsSaleoff.push((products[i]))
            }
        }
        this.setState({
            top3ProductsSaleoff: top3ProductsSaleoff
        })

        let productsInscreaseByTimestame = sortIncreaseProductsByTimestamp(this.props.store.products);
        if(productsInscreaseByTimestame.length > 12){
            for(let i=0; i<12; i++){
                if(productsInscreaseByTimestame[i] != null){
                    this.setState({
                        top12ProductsNew: this.state.top12ProductsNew.push(productsInscreaseByTimestame[i])
                    });
                }
            }
        }
        else{
            this.setState({
                top12ProductsNew: productsInscreaseByTimestame
            });
        }   
    }

    render() {
        // console.log(this.props.store.products);
        if (this.props.store) {
            return (
                <div className="StoreProducts">
                    {/* section */}
                    <div className="section">
                        {/* container */}
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                {/* ASIDE */}
                                <div id="aside" className="col-md-3">
                                    {/* aside widget */}
                                    <div className="aside">
                                        <h3 className="aside-title">Bộ lọc:</h3>
                                        <ul className="filter-list">
                                            <li>
                                                <span className="text-uppercase">
                                                    Màu sắc:
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="filter-list">
                                            <li>
                                                <span className="text-uppercase">
                                                    Kích thước:
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="filter-list">
                                            <li>
                                                <span className="text-uppercase">
                                                    Giá bán:
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="filter-list">
                                            <li>
                                                <span className="text-uppercase">
                                                    Thương hiệu:
                                                </span>
                                            </li>
                                        </ul>
                                        <button className="primary-btn">
                                            Đặt lại
                                        </button>
                                    </div>
                                    {/* /aside widget */}
                                    {/* aside widget */}
                                    <div className="aside">
                                        <h3 className="aside-title">
                                            Lọc giá bán
                                        </h3>
                                        <div
                                            id="price-slider"
                                            className="noUi-target noUi-ltr noUi-horizontal"
                                        >
                                            <div className="noUi-base">
                                                <div className="noUi-origin noUi-origin-custom">
                                                    <div
                                                        className="noUi-handle noUi-handle-lower noUi-handle-lower-custom"
                                                        data-handle="0"
                                                        tabIndex="0"
                                                        role="slider"
                                                        aria-orientation="horizontal"
                                                        aria-valuemin="0.0"
                                                        aria-valuemax="71.4"
                                                        aria-valuenow="0.0"
                                                        aria-valuetext="1.00$"
                                                    >
                                                        <div className="noUi-tooltip">
                                                            1.00đ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="noUi-connect noUi-connect-custom"></div>
                                                <div className="noUi-origin noUi-origin-custom-2">
                                                    <div
                                                        className="noUi-handle noUi-handle-upper noUi-handle-upper-custom"
                                                        data-handle="1"
                                                        tabIndex="0"
                                                        role="slider"
                                                        aria-orientation="horizontal"
                                                        aria-valuemin="0.0"
                                                        aria-valuemax="100.0"
                                                        aria-valuenow="71.4"
                                                        aria-valuetext="713.86$"
                                                    >
                                                        <div className="noUi-tooltip">
                                                            713.86đ
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* aside widget */}
                                    {/* aside widget */}
                                    <div className="aside">
                                        <h3 className="aside-title">
                                            Lọc màu sắc
                                        </h3>
                                    </div>
                                    {/* /aside widget */}
                                    {/* aside widget */}
                                    <div className="aside">
                                        <h3 className="aside-title">
                                            Lọc kích thước
                                        </h3>
                                    </div>
                                    {/* /aside widget */}
                                    {/* aside widget */}
                                    <div className="aside">
                                        <h3 className="aside-title">
                                            Lọc thương hiệu
                                        </h3>
                                    </div>
                                    {/* /aside widget */}
                                    {/* aside widget */}
                                    <div className="aside">
                                        <h3 className="aside-title">
                                            Top khuyến mãi
                                        </h3>
                                        {/* widget product */}
                                        {this.state.top3ProductsSaleoff.length > 0 && this.state.top3ProductsSaleoff.map(
                                            (product, i) => (
                                                <ProductSaleOff
                                                    key={i}
                                                    store={this.props.store}
                                                    product={product}
                                                />
                                            )
                                        )}
                                        {/* /widget product */}
                                    </div>
                                    {/* /aside widget */}
                                </div>
                                {/* /ASIDE */}
                                {/* MAIN */}
                                <div id="main" className="col-md-9">
                                    {/* store top filter */}
                                    <div className="store-filter clearfix">
                                        <div className="pull-left">
                                            <div className="row-filter">
                                                <Link to="#">
                                                    <i className="fa fa-th-large" />
                                                </Link>
                                                <Link to="#" className="active">
                                                    <i className="fa fa-bars" />
                                                </Link>
                                            </div>
                                            <div className="sort-filter">
                                                <span className="text-uppercase">
                                                    Sắp xếp:
                                                </span>
                                                <select className="input">
                                                    <option value={0}>
                                                        Tất cả
                                                    </option>
                                                    <option value={1}>
                                                        Mới nhất
                                                    </option>
                                                    <option value={2}>
                                                        Giảm giá nhiều
                                                    </option>
                                                    <option value={3}>
                                                        Giá tăng dần
                                                    </option>
                                                    <option value={4}>
                                                        Giá giảm dần
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <div className="page-filter">
                                                <span className="text-uppercase">
                                                    Hiển thị:
                                                </span>
                                                <select className="input">
                                                    <option value={0}>
                                                        6
                                                    </option>
                                                </select>
                                            </div>
                                            <ul className="store-pages">
                                                <li>
                                                    <span className="text-uppercase">
                                                        Trang:
                                                    </span>
                                                </li>
                                                <li className="active">1</li>
                                                <li>
                                                    <Link to="#">2</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">3</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa fa-caret-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /store top filter */}
                                    {/* STORE */}
                                    <div id="store">
                                        {/* row */}
                                        <div className="row">
                                            {this.state.top12ProductsNew.length > 0 && this.state.top12ProductsNew.map(
                                                (product, i) => (
                                                    <Product
                                                        key={i}
                                                        store={this.props.store}
                                                        product={product}
                                                    />
                                                )
                                            )}
                                        </div>
                                        {/* /row */}
                                    </div>
                                    {/* /STORE */}
                                </div>
                                {/* /MAIN */}
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </div>
                    ;{/* /section */}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Products;
