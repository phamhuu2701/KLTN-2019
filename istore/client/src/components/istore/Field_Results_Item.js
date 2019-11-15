import React, { Component } from "react";

import { showHideStoreInfo } from './Maps';
import "./Field_Results_Item.css";
import { getStarsArray } from "../../utils/productUtils";

export default class Fields_Result_Item extends Component {
    constructor(){
        super();

        this.state = {
            rateStarsUrl: []
        }
    }

    componentDidMount(){

        // lấy mảng sao đánh giá
        let starsArray = getStarsArray(this.props.info._doc);
        let rateStarsUrl = [];
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
        this.setState({
            rateStarsUrl: rateStarsUrl
        })
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.info._doc.rates);
        return (
            <div className="field-results-item" onClick={() => {showHideStoreInfo(this.props.code, this.props.info)}}>
                <div className="field-results-item-content">
                    <div className="field-results-item-img">
                        <img src={this.props.imageAvatar} alt="" />
                    </div>
                    <div className="field-results-item-desc">
                        <div className="field-results-item-desc-title">
                            <b>{this.props.storeName.substring(0, 15)}</b>
                        </div>
                        <div>
                            <span className="field-results-item-desc-price">
                                Giá: {(((this.props.price)*((100-this.props.saleoff)/100))/1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&.')}đ
                            </span>
                            <span className="field-results-item-desc-time-up">
                                {this.props.distance} đường đi.
                            </span>
                        </div>
                        <div className="field-results-item-desc-sub-desc">
                            {this.props.productName.substring(0, 60)}..
                        </div>
                        <div className="field-results-item-desc-rate-contact">
                            <span className="field-results-item-desc-rate">
                                {
                                    this.state.rateStarsUrl.map((starUrl, i) => (
                                        <img alt="" key={i} src={starUrl}></img>
                                    ))
                                }
                            </span>
                            <span className="field-results-item-desc-contact">                                
                                <a href={"tel:"+this.props.phone}>
                                    <img alt="" src="./resources/icons/phone.svg"></img>
                                    <span>{this.props.phone}</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="field-results-item-hr" />
            </div>
        );
    }
}
