import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

import "./Field.css";
import FieldResultsItem from "./Field_Results_Item";
import Footer from "./Footer";
import { onSearchProduct } from './Maps'

const distances = [1, 2, 5, 10, 15, 20, 40];

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            query: ''
        }
        this.autocompleteInput = React.createRef();
        this.onEnterProduct = this.onEnterProduct.bind(this);
    }

    onEnterProduct(e) {
        //onChangeSearchAddress(e.target.value);
        if (e.which === 13 || e.which === 10) {
            /*onSearchProduct(e.target.value, formattedAddress => {
                // Set full address in search input
                this.autocompleteInput.current.value = formattedAddress;
            });*/
            // Find product
            const search = e.target.value;
            fetch('/api/products/searchByName?search=' + search, {
                method: 'GET'
            })
            .then(result => {
                if (result.status === 200) {
                    return result.json();
                } else {
                    console.log('Không tìm thấy');
                }
            })
            .then(products => {
                console.log(products[0].name);
            })
            .catch(err => console.log(err))
        } else {
            //this.handleScriptLoad();
            //onPlaceAutocomplete(this.autocompleteInput.current)
        }
    }

    componentDidMount() {
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
        )
    }
}

export default class Fields extends Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            districts: [],
            searchFilter: "",
            cityFilter: {},
            districtFilter: {},
            priceFilter: {},
            spaceFilter: {},
            distanceFilter: 0
        };

        this.onSearchKeyUp = this.onSearchKeyUp.bind(this);
        this.onDistanceSelectChange = this.onDistanceSelectChange.bind(this);
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        
    }

    onSearchKeyUp(e) {
        if (e.keyCode === 13) {
            this.setState({
                searchFilter: e.target.value.trim(),
            });
        }
    }

    onDistanceSelectChange(e) {
        this.setState({
            distanceFilter: distances[e.target.value]
        })
    }

    render() {
        return (
            <div className="field scroll square scrollbar-dusty-grass square thin">
                <div className="field-filter">
                    <Row>
                        <Col>
                            <Form.Group className="field-filter-form-group-search">
                                <img alt="" src="icons/search.svg"></img>
                                <div>
                                    <SearchBar/>
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
                                <Form.Control as="select" onChange={this.onDistanceSelectChange}>
                                    <option value={-1}>Tất cả</option>
                                    <option value={0}>1 km</option>
                                    <option value={1}>2 km</option>
                                    <option value={2}>5 km</option>
                                    <option value={3}>10 km</option>
                                    <option value={4}>15 km</option>
                                    <option value={5}>20 km</option>
                                    <option value={6}>40 km</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <hr className="field-hr" />
                <div className="field-results">
                    <Row>
                        <Col className="field-results-title">
                            <span>Kết quả</span>
                        </Col>
                        <Col className="field-results-filter">
                            <Form.Group>
                                <Form.Control as="select" onChange={this.onDistanceSelectChange}>
                                    <option value={-1}>Mới nhất</option>
                                    <option value={0}>Phổ biến nhất</option>
                                    <option value={1}>Giá tăng dần</option>
                                    <option value={2}>Giá giảm dần</option>
                                    <option value={3}>Bán kính tăng dần</option>
                                    <option value={4}>Bán kính giảm dần</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="field-hr" />
                    <div className="field-results-list">
                        <FieldResultsItem code='0' storeName='Cửa hàng ăn vặt' price='5.500' phone='0909897969' productName='Trà sữa trân châu' date='12/12/2019' />
                        <FieldResultsItem code='1' storeName='Cửa hàng tạp hóa' price='3.000' phone='0739495969' productName='Mì gấu đỏ chua cay' date='21/12/2019' />
                    </div>
                </div>
                <hr className="field-hr" />
                <Footer />
            </div>
        );
    }
}
