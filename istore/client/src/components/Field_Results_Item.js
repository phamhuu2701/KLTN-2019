import React, { Component } from "react";

import "./Field_Results_Item.css";

import { showHideStoreInfo } from '../services/store.service'

export default class Fields_Result_Item extends Component {
    render() {
        return (
            <div className="field-results-item" onClick={() => {showHideStoreInfo(this.props.code, this.props.info, this.props.map)}}>
                <div className="field-results-item-img">
                    <img src={this.props.imageAvatar} alt="" />
                </div>
                <div className="field-results-item-desc">
                    <div className="field-results-item-desc-title">
                        {this.props.storeName}
                    </div>
                    <div>
                        <span className="field-results-item-desc-price">
                            Giá: {this.props.price}đ
                        </span>
                        <span className="field-results-item-desc-time-up">
                            {this.props.date}
                        </span>
                    </div>
                    <div className="field-results-item-desc-sub-desc">
                        {this.props.productName}
                    </div>
                    <div>
                        <span className="field-results-item-desc-rate">
                            <img alt="" src="icons/star_liked.svg"></img>
                            <img alt="" src="icons/star_liked.svg"></img>
                            <img alt="" src="icons/star_liked.svg"></img>
                            <img alt="" src="icons/star_liked.svg"></img>
                            <img alt="" src="icons/star_not_liked.svg"></img>
                        </span>
                        <span className="field-results-item-desc-contact">
                            <img alt="" src="icons/phone.svg"></img>
                            <span>{this.props.phone}</span>
                        </span>
                    </div>
                </div>
                <hr className="field-results-item-hr" />
            </div>
        );
    }
}
