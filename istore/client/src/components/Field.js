import React, { Component } from "react";
import { Form, Row, Col, Spinner } from "react-bootstrap";

import "./Field.css";
import FieldResultsItem from "./Field_Results_Item";
import Footer from "./Footer";
import { onSearchProduct } from "./Maps";
import { onSortStoreListService } from "../services/store.service";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            query: ""
        };
        this.autocompleteInput = React.createRef();
        this.onEnterProduct = this.onEnterProduct.bind(this);
    }

    onEnterProduct(e) {
        //onChangeSearchAddress(e.target.value);
        if (e.which === 13 || e.which === 10) {
            // Find product
            const search = e.target.value;
            const distance = document.querySelector(
                'select[class="form-control"]'
            ).value;
            onSearchProduct(search, distance, result => {
                this.props.findProductHandler(result);
            });
        } else {
            //this.handleScriptLoad();
            //onPlaceAutocomplete(this.autocompleteInput.current)
        }
    }

    componentDidMount() {
        
        /*setTimeout(()=>{
            onSearchProduct("bóng đèn led", 10000, result => {
                this.props.findProductHandler(result);
            });
        }, 2000);*/

        /*setTimeout(() => {
            onPlaceAutocomplete(this.autocompleteInput.current, (addressObject) => {
                //this.props.onPlaceLoaded(addressObject);
                const address = addressObject.address_components;
                if (address){
                    this.setState({
                        city: address[0].long_name,
                        query: addressObject.formatted_address
                    })
                }
            })
        }, 2000);*/
    }

    render() {
        return (
            <Form.Control
                ref={this.autocompleteInput}
                id="autocomplete"
                onKeyPress={this.onEnterProduct}
                type="text"
                placeholder="Nhập tên sản phẩm..."
                className="field-filter-form-input-search"
                defaultValue={this.state.query}
            />
        );
    }
}

export class ResultArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            message: ""
        };
    }

    findStore() {
        this.setState({
            result: this.props.result,
            message: "Không tìm thấy sản phẩm!"
        });
    }

    render() {
        if (this.state.result.length > 0) {
            return (
                <div className="field-results-list">
                    {this.state.result.map((res, index) => {
                        return (
                            <FieldResultsItem
                                key={index}
                                code={index}
                                info={res}
                                storeName={res.store.name}
                                imageAvatar={res._doc.images[0]}
                                price={res._doc.price}
                                saleoff={res._doc.saleoff}
                                phone={res.store.phone}
                                productName={res._doc.name}
                                distance={res.distance}
                            />
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div className="field-results-list">{this.state.message}</div>
            );
        }
    }
}

export default class Fields extends Component {
    constructor() {
        super();
        this.state = {
            result: []
        };
        this.findProductRef = React.createRef();

        this.onDistanceSelectChange = this.onDistanceSelectChange.bind(this);
        this.onPrioritySelectChange = this.onPrioritySelectChange.bind(this);
        this.findProductHandler = this.findProductHandler.bind(this);
    }

    onDistanceSelectChange(e) {
        const search = document.querySelector("#autocomplete").value;
        const distance = e.target.value;
        onSearchProduct(search, distance, result => {
            this.findProductHandler(result);
        });
    }

    onPrioritySelectChange(e) {
        // Do somthing
        onSortStoreListService(this.state.result, e.target.value, result => {
            document.querySelector('.loading').style.display = 'none';
            this.findProductHandler(result);
        });
    }

    findProductHandler(result) {
        this.setState({
            result: result
        });
        this.findProductRef.current.findStore();
    }

    render() {
        return (
            <div className="field scroll square scrollbar-dusty-grass square thin">
                <div className="field-filter">
                    <Row>
                        <Col>
                            <Form.Group className="field-filter-form-group-search field-filter-form-group-search-custom">
                                <img
                                    alt=""
                                    src="./resources/icons/search.svg"
                                ></img>
                                <div>
                                    <SearchBar
                                        findProductHandler={
                                            this.findProductHandler
                                        }
                                    />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <label className="field-filter-form-label">
                                Bán kính
                            </label>
                        </Col>
                        <Col sm={8}>
                            <Form.Group>
                                <Form.Control
                                    as="select"
                                    onChange={this.onDistanceSelectChange}
                                    defaultValue={10000}
                                >
                                    <option value={1000}>1 km</option>
                                    <option value={2000}>2 km</option>
                                    <option value={5000}>5 km</option>
                                    <option value={10000}>10 km</option>
                                    <option value={15000}>15 km</option>
                                    <option value={20000}>20 km</option>
                                    <option value={40000}>40 km</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <hr className="field-hr" />
                <div className="field-results">
                    <Row>
                        <Col className="field-results-title">
                            <span className="field-results-number">
                                Kết quả
                            </span>
                        </Col>
                        <Col className="field-results-filter">
                            <Form.Group>
                                <Form.Control
                                    as="select"
                                    onChange={this.onPrioritySelectChange}
                                >
                                    <option value={0}>Phổ biến nhất</option>
                                    <option value={1}>Gần nhất</option>
                                    <option value={2}>Giá tăng dần</option>
                                    <option value={3}>Giá giảm dần</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="field-hr" />
                    <div className="loading">
                        <Spinner animation="grow" variant="success" size="sm" />
                        <Spinner animation="grow" variant="success" size="sm" />
                        <Spinner animation="grow" variant="success" size="sm" />
                    </div>
                    <ResultArea
                        ref={this.findProductRef}
                        result={this.state.result}
                    />
                </div>
                <hr className="field-hr" />
                <Footer />
            </div>
        );
    }
}
