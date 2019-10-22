import React, { Component } from "react";
import { Form, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

import "./Field.css";
import Field_Results_Item from "./Field_Results_Item";
import Footer from "./Footer";
import { onSearchProduct } from './Maps'

const prices = [
    { min: 0, max: 2000000 },
    { min: 2000000, max: 3000000 },
    { min: 3000000, max: 4000000 },
    { min: 4000000, max: 6000000 },
    { min: 6000000, max: 1000000 },
    { min: 10000000, max: 999000000 }
];
const spaces = [
    { min: 0, max: 20 },
    { min: 20, max: 30 },
    { min: 30, max: 40 },
    { min: 40, max: 60 },
    { min: 60, max: 100 },
    { min: 100, max: 999 }
];
const distances = [2, 5, 10, 15, 20, 30];


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
            onSearchProduct(e.target.value, formattedAddress => {
                // Set full address in search input
                this.autocompleteInput.current.value = formattedAddress;
            });
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
        this.onCitySelectChange = this.onCitySelectChange.bind(this);
        this.onDistrictSelectChange = this.onDistrictSelectChange.bind(this);
        this.onPriceSelectChange = this.onPriceSelectChange.bind(this);
        this.onSpaceSelectChange = this.onSpaceSelectChange.bind(this);
        this.onDistanceSelectChange = this.onDistanceSelectChange.bind(this);
    }

    componentDidMount() {
        // Get cities
        fetch("/api/cities")
            .then(res => res.json())
            .then(cities => this.setState({ 
                cities: cities 
            }));
    }

    componentDidUpdate() {
        const filterValue = {
            searchFilter: this.state.searchFilter,
            cityFilter: this.state.cityFilter,
            districtFilter: this.state.districtFilter,
            priceFilter: this.state.priceFilter,
            spaceFilter: this.state.spaceFilter,
            distanceFilter: this.state.distanceFilter
        }
        console.log(filterValue);
    }

    onSearchKeyUp(e) {
        if (e.keyCode === 13) {
            this.setState({
                searchFilter: e.target.value.trim(),
            });
        }
    }

    onCitySelectChange(e) {
        if (e.target.value) {

            // Get city by id
            fetch("/api/cities/" + e.target.value)
                .then(res => res.json())
                .then(city => {
                    this.setState({
                        cityFilter: city,
                        districtFilter: {}
                    });

                    // Get districts by city
                    fetch("/api/districts/cities/" + city._id)
                        .then(res => res.json())
                        .then(districts => {
                            this.setState({
                                districts: districts
                            });

                            // Refresh district select
                            document.getElementById(
                                "districts-select"
                            ).selectedIndex = 0;
                        });
                });
        }
    }

    onDistrictSelectChange(e) {
        if (e.target.value) {

            // Get district by id
            fetch("/api/districts/" + e.target.value)
                .then(res => res.json())
                .then(district => {
                    this.setState({
                        districtFilter: district
                    });
                });
        }
    }

    onPriceSelectChange(e) {
        this.setState({
            priceFilter: prices[e.target.value]
        })
    }

    onSpaceSelectChange(e) {
        this.setState({
            spaceFilter: spaces[e.target.value]
        })
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
                                    <option value={0}>2 km</option>
                                    <option value={1}>5 km</option>
                                    <option value={2}>10 km</option>
                                    <option value={3}>15 km</option>
                                    <option value={4}>20 km</option>
                                    <option value={5}>30 km</option>
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
                                    <option value={0}>Giá tăng dần</option>
                                    <option value={1}>Giá giảm dần</option>
                                    <option value={2}>Bán kính tăng dần</option>
                                    <option value={3}>Bán kính giảm dần</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr className="field-hr" />
                    <div className="field-results-list">
                        <Field_Results_Item />
                    </div>
                </div>
                <hr className="field-hr" />
                <Footer />
            </div>
        );
    }
}
