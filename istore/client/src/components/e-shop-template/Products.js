import React, { Component } from 'react';

import "./Products.css";

class Products extends Component {
    render() {
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
                            <span className="text-uppercase">Màu sắc:</span>
                            </li>
                        </ul>
                        <ul className="filter-list">
                            <li>
                            <span className="text-uppercase">Kích thước:</span>
                            </li>
                        </ul>
                        <ul className="filter-list">
                            <li>
                            <span className="text-uppercase">Giá bán:</span>
                            </li>
                        </ul>
                        <ul className="filter-list">
                            <li>
                            <span className="text-uppercase">Thương hiệu:</span>
                            </li>
                        </ul>
                        <button className="primary-btn">Đặt lại</button>
                        </div>
                        {/* /aside widget */}
                        {/* aside widget */}
                        <div className="aside">
                        <h3 className="aside-title">Lọc giá bán</h3>
                        <div id="price-slider" />
                        <div id="price-slider" className="noUi-target noUi-ltr noUi-horizontal">
                            <div className="noUi-base">
                                <div className="noUi-origin" style={{ left: "0%" }}>
                                <div
                                    className="noUi-handle noUi-handle-lower"
                                    data-handle={0}
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin={0.0}
                                    aria-valuemax="90.5"
                                    aria-valuenow={0.0}
                                    aria-valuetext="1.00$"
                                    style={{ zIndex: 5 }}
                                >
                                    <div className="noUi-tooltip">1 vnd</div>
                                </div>
                                </div>
                                <div className="noUi-connect" style={{ left: "0%", right: "9.52381%" }} />
                                <div className="noUi-origin" style={{ left: "90.4762%" }}>
                                <div
                                    className="noUi-handle noUi-handle-upper"
                                    data-handle={1}
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin={0.0}
                                    aria-valuemax={100.0}
                                    aria-valuenow="90.5"
                                    aria-valuetext="903.95$"
                                    style={{ zIndex: 4 }}
                                >
                                    <div className="noUi-tooltip">999.00 tr</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* aside widget */}
                        {/* aside widget */}
                        <div className="aside">
                        <h3 className="aside-title">Lọc màu sắc</h3>
                        </div>
                        {/* /aside widget */}
                        {/* aside widget */}
                        <div className="aside">
                        <h3 className="aside-title">Lọc kích thước</h3>
                        </div>
                        {/* /aside widget */}
                        {/* aside widget */}
                        <div className="aside">
                        <h3 className="aside-title">Lọc thương hiệu</h3>
                        </div>
                        {/* /aside widget */}
                        {/* aside widget */}
                        <div className="aside">
                        <h3 className="aside-title">Top khuyến mãi</h3>
                        {/* widget product */}
                        <div className="product product-widget">
                            <div className="product-thumb">
                            <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                            </div>
                            <div className="product-body">
                            <h2 className="product-name">
                                <a href="/#">Product Name Goes Here</a>
                            </h2>
                            <h3 className="product-price">
                                32.500 đ <del className="product-old-price">45.000 đ</del>
                            </h3>
                            <div className="product-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                            </div>
                            </div>
                        </div>
                        {/* /widget product */}
                        {/* widget product */}
                        <div className="product product-widget">
                            <div className="product-thumb">
                            <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                            </div>
                            <div className="product-body">
                            <h2 className="product-name">
                                <a href="/#">Product Name Goes Here</a>
                            </h2>
                            <h3 className="product-price">32.500 đ</h3>
                            <div className="product-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                            </div>
                            </div>
                        </div>
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
                            <a href="/#">
                                <i className="fa fa-th-large" />
                            </a>
                            <a href="/#" className="active">
                                <i className="fa fa-bars" />
                            </a>
                            </div>
                            <div className="sort-filter">
                            <span className="text-uppercase">Sắp xếp:</span>
                            <select className="input">
                                <option value={0}>Tất cả</option>
                                <option value={1}>Đánh giá cao</option>
                                <option value={2}>Giá tăng dần</option>
                                <option value={3}>Giá giảm dần</option>
                            </select>
                            <a href="/#" className="main-btn icon-btn">
                                <i className="fa fa-arrow-down" />
                            </a>
                            </div>
                        </div>
                        <div className="pull-right">
                            <div className="page-filter">
                            <span className="text-uppercase">Hiển thị:</span>
                            <select className="input">
                                <option value={0}>10</option>
                                <option value={1}>20</option>
                                <option value={2}>30</option>
                            </select>
                            </div>
                            <ul className="store-pages">
                            <li>
                                <span className="text-uppercase">Trang:</span>
                            </li>
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
                        {/* /store top filter */}
                        {/* STORE */}
                        <div id="store">
                        {/* row */}
                        <div className="row">
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span>Mới</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">
                                    32.500 đ <del className="product-old-price">45.000 đ</del>
                                </h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">32.500 đ</h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            <div className="clearfix visible-sm visible-xs" />
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span>Mới</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">
                                    32.500 đ <del className="product-old-price">45.000 đ</del>
                                </h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            <div className="clearfix visible-md visible-lg" />
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span>Mới</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">32.500 đ</h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            <div className="clearfix visible-sm visible-xs" />
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span>Mới</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">32.500 đ</h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span>Mới</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">
                                    32.500 đ <del className="product-old-price">45.000 đ</del>
                                </h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            <div className="clearfix visible-md visible-lg visible-sm visible-xs" />
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span>Mới</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">
                                    32.500 đ <del className="product-old-price">45.000 đ</del>
                                </h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">32.500 đ</h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                            <div className="clearfix visible-sm visible-xs" />
                            {/* Product Single */}
                            <div className="col-md-4 col-sm-6 col-xs-6">
                            <div className="product product-single">
                                <div className="product-thumb">
                                <div className="product-label">
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view">
                                    <i className="fa fa-search-plus" /> Xem chi tiết
                                </button>
                                <img src="https://finalranger.com/wp-content/uploads/2018/11/adidas-Originals-Yung-1-1024x683.jpg" alt="" />
                                </div>
                                <div className="product-body">
                                <h3 className="product-price">
                                    32.500 đ <del className="product-old-price">45.000 đ</del>
                                </h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name">
                                    <a href="/#">Product Name Goes Here</a>
                                </h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                    </button>
                                    <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                    </button>
                                    <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua ngay
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* /Product Single */}
                        </div>
                        {/* /row */}
                        </div>
                        {/* /STORE */}
                        {/* store bottom filter */}
                        <div className="store-filter clearfix">
                        <div className="pull-left">
                            <div className="row-filter">
                            <a href="/#">
                                <i className="fa fa-th-large" />
                            </a>
                            <a href="/#" className="active">
                                <i className="fa fa-bars" />
                            </a>
                            </div>
                            <div className="sort-filter">
                            <span className="text-uppercase">Sắp xếp:</span>
                            <select className="input">
                                <option value={0}>Tất cả</option>
                                <option value={1}>Đánh giá cao</option>
                                <option value={2}>Giá tăng dần</option>
                                <option value={3}>Giá giảm dần</option>
                            </select>
                            <a href="/#" className="main-btn icon-btn">
                                <i className="fa fa-arrow-down" />
                            </a>
                            </div>
                        </div>
                        <div className="pull-right">
                            <div className="page-filter">
                            <span className="text-uppercase">Hiển thị:</span>
                            <select className="input">
                                <option value={0}>10</option>
                                <option value={1}>20</option>
                                <option value={2}>30</option>
                            </select>
                            </div>
                            <ul className="store-pages">
                            <li>
                                <span className="text-uppercase">Trang:</span>
                            </li>
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
                        {/* /store bottom filter */}
                    </div>
                    {/* /MAIN */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
                </div>;
                {/* /section */}

            </div>
        );
    }
}

export default Products;