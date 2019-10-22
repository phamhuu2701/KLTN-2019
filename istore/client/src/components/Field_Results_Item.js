import React, { Component } from "react";

import "./Field_Results_Item.css";

export default class Fields_Result_Item extends Component {
    render() {
        return (
            <div className="field-results-item">
                <div className="field-results-item-img">
                    <img src="images/nancy.jpg" alt="" />
                </div>
                <div className="field-results-item-desc">
                    <div className="field-results-item-desc-title">
                        Cửa hàng tạp hóa Ăn Tạp
                    </div>
                    <div>
                        <span className="field-results-item-desc-price">
                            Giá: 5.500đ
                        </span>
                        <span className="field-results-item-desc-time-up">
                            16/09/2019
                        </span>
                    </div>
                    <div className="field-results-item-desc-sub-desc">
                        Mì chua cay Gấu đỏ
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
                            <span>01696696969</span>
                        </span>
                    </div>
                </div>
                <hr className="field-results-item-hr" />
            </div>
        );
    }
}
