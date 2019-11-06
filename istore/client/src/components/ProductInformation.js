import React, { Component } from "react";

<<<<<<< HEAD:istore/client/src/components/StoreInformation.js
import "./StoreInformation.css";
import ProductDetail from "./ProductDetail";
=======
import "./ProductInformation.css";
import StoreDetail from "./StoreDetail";
>>>>>>> b7f7a7e8a48496a870df6f8d4e8c79931b1a806f:istore/client/src/components/ProductInformation.js

export default class StoreInformation extends Component {
  constructor() {
    super();
    this.closeStoreInfo = this.closeStoreInfo.bind(this);
    this.wrapperStoreRef = React.createRef();
  }

  componentDidMount() {
    //document.addEventListener('click', this.closeStoreInfo)
  }

  componentWilUnmount() {
    //document.addEventListener('click', this.closeStoreInfo)
  }

  closeStoreInfo(event) {
    document.querySelector(".store-info").style.right = "-100%";
  }

  render() {
    return (
      <div className="store-info" ref={this.wrapperStoreRef}>
        <div>
          <a href="javascipt:void(0)"
            className="closebtn"
            onClick={this.closeStoreInfo}>
            <img src="./icons/next_color.svg"></img>
          </a>
        </div>
        <ProductDetail />
      </div>
    );
  }
}
