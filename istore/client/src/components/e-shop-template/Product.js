import React, { Component } from "react";

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            product: {}
        }
    }

    componentWillMount(){
        this.setState({
            product: this.props.product
        });
    }

    render() {
        console.log(this.state.product);
        return (
            <div>
                {/* Product Single */}
                <div className="col-md-4 col-sm-6 col-xs-6">
                    <div className="product product-single">
                        <div className="product-thumb">
                            <button className="main-btn quick-view">
                                <i className="fa fa-search-plus" /> Xem chi tiết
                            </button>
                            <img
                                src={this.state.product.images[0]}
                                alt=""
                            />
                        </div>
                        <div className="product-body">
                            <h3 className="product-price">
                                {this.state.product.price / 100 * (100 - this.state.product.saleoff)} đ
                                <del className="product-old-price">{this.state.product.price} đ</del>
                            </h3>
                            <div className="product-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o empty" />
                            </div>
                            <h2 className="product-name">
                                <a href="/#">{this.state.product.name}</a>
                            </h2>
                            <div className="product-btns">
                                <button className="main-btn icon-btn">
                                    <i className="fa fa-heart" />
                                </button>
                                <button className="main-btn icon-btn">
                                    <i className="fa fa-exchange" />
                                </button>
                                <button className="primary-btn add-to-cart">
                                    <i className="fa fa-shopping-cart" /> Mua
                                    ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Product Single */}
                <div className="clearfix visible-sm visible-xs" />
            </div>
        );
    }
}

export default Product;
