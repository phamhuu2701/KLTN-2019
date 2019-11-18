/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Badge,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    Col,
    Button,
    Card,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import Header from "components/argon-dashboard-react-master/components/Headers/Header.jsx";
import { getStoresBySizeByIdUser } from "../../../../services/user.service";
import "./Tables.css";
import PhoneActivate from "./PhoneActivate";

import { getFullAddress } from "../../../../utils/storeUtils";
import getStoreCategories from "../../../../services/storeCategory.service";
import getCities from "../../../../services/city.service";


class Tables extends React.Component {
    constructor() {
        super();

        this.state = {
            stores: [],
            showPhoneActivateModal: false,
            isTemplateItem1Clicked: false,
            isTemplateItem2Clicked: false,
            templateNumber: null,
            isShowTemplateSelect: false,
            isShowStoreInfoInput: false,
            isHasWebsite: false,
            storeCategories: [],
            cities: []
        }

        this.onAddStoreClick = this.onAddStoreClick.bind(this);
        this.onTemplatesItemClick = this.onTemplatesItemClick.bind(this);
        this.onCheckboxHasWebsiteClick = this.onCheckboxHasWebsiteClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            stores: getStoresBySizeByIdUser(this, this.props.user._id, 0, 10)
        })

        getStoreCategories(this);
        getCities(this);     
    }

    onAddStoreClick() {
        if(!this.props.user.isPhoneActivated){
            this.setState({
                showPhoneActivateModal: true,
                isShowTemplateSelect: true
            })
        }
        else{
            this.setState({
                isShowTemplateSelect: true
            })
        }
    }

    onTemplatesItemClick(e) {
        // console.log(e.target.id);

        if (e.target.id === "item-1") {
            this.setState({
                isTemplateItem1Clicked: true,
                isTemplateItem2Clicked: false,
                templateNumber: 1,
                showPhoneActivateModal: false,
                isShowStoreInfoInput: true
            })
        }
        else if (e.target.id === "item-2") {
            this.setState({
                isTemplateItem1Clicked: false,
                isTemplateItem2Clicked: true,
                templateNumber: 2,
                showPhoneActivateModal: false,
                isShowStoreInfoInput: true
            })
        }

    }

    onCheckboxHasWebsiteClick() {
        this.setState({
            isHasWebsite: !this.state.isHasWebsite,
            isShowTemplateSelect: true,
            isShowStoreInfoInput: this.state.isHasWebsite ? false : true,
            showPhoneActivateModal: false,
            templateNumber: null
        })
    }

    render() {
        console.log(this.props);
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7 mt--7-custom stores-manage" fluid>
                    {/* Button Add Store */}
                    <Row>
                        <Container className="container-button-add-store">
                            <Button onClick={this.onAddStoreClick} className="btn btn-success">Thêm cửa hàng</Button>
                        </Container>
                    </Row>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Danh sách cửa hàng</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush table-flush-custom" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Cửa hàng</th>
                                            <th scope="col">Phân loại</th>
                                            <th scope="col">Địa chỉ</th>
                                            <th scope="col">Trạng thái</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.stores &&
                                            this.state.stores.map((store, key) => (
                                                <tr key={key}>
                                                    <th scope="row">
                                                        <Link to={"/store/" + store._id} target="_blank">
                                                            <Media className="align-items-center">
                                                                <span
                                                                    className="avatar rounded-circle mr-3"
                                                                // onClick={e => e.preventDefault()}
                                                                >
                                                                    <img
                                                                        alt="..."
                                                                        // src={require("components/argon-dashboard-react-master/assets/img/theme/bootstrap.jpg")}
                                                                        src={store.logo}
                                                                    />
                                                                </span>
                                                                <Media>
                                                                    <span className="mb-0 text-sm">
                                                                        {store.name}
                                                                    </span>
                                                                </Media>
                                                            </Media>
                                                        </Link>
                                                    </th>
                                                    <td>{store.storeCategory.name}</td>
                                                    <td>{getFullAddress(store)}</td>
                                                    <td>
                                                        <Badge color="" className="badge-dot mr-4">
                                                            {store.isActive ?
                                                                (<span className="is-active-true"><i className="bg-success" />Đang hoạt động</span>) :
                                                                (<span className="is-active-false"><i className="bg-warning" />Ngừng hoạt động</span>)}
                                                        </Badge>
                                                    </td>
                                                    <td className="text-right">
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle
                                                                className="btn-icon-only text-light"
                                                                href="#pablo"
                                                                role="button"
                                                                size="sm"
                                                                color=""
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                <i className="fas fa-ellipsis-v" />
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-menu-arrow" right>
                                                                <Link to={"/store/" + store._id} target="_blank">
                                                                    <DropdownItem
                                                                    // href="#pablo"
                                                                    // onClick={e => e.preventDefault()}
                                                                    >
                                                                        Chi tiết
                                                                    </DropdownItem>
                                                                </Link>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Chỉnh sửa
                                                                </DropdownItem>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Xóa
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0"
                                        >
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                    tabIndex="-1"
                                                >
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                    <PhoneActivate show={this.state.showPhoneActivateModal} />
                    <hr />
                    {/* Add store */}
                    <div className={"store-template-select " + (this.state.isShowTemplateSelect ? "show" : "hide")}>
                        <h3>CHỌN MẪU GIAO DIỆN CỬA HÀNG</h3>
                        <div>
                            <Label check className="checkbox-has-website">
                                <Input type="checkbox" id="checkbox" onClick={this.onCheckboxHasWebsiteClick} />{' '}
                                Tôi đã có website riêng
                            </Label>
                        </div>
                        <hr />
                        <div className={this.state.isHasWebsite ? "hide" : "show"}>
                            <Row>
                                <Col xs="6" sm="3">
                                    <div className={"store-template-select-item " + (this.state.isTemplateItem1Clicked ? "item-selected" : "")}>
                                        <img alt="" src="https://www.joomla-monster.com/media/djcatalog2/images/item/1/jm-computers-electronics-store_l.jpg" />
                                        <span className="title-bg-success">Thương mại bán lẻ</span>
                                        <span id="item-1" className="item-over" onClick={this.onTemplatesItemClick}></span>
                                    </div>
                                </Col>
                                <Col xs="6" sm="3">
                                    <div className={"store-template-select-item " + (this.state.isTemplateItem2Clicked ? "item-selected" : "")}>
                                        <img alt="" src="https://cdn.freshdesignweb.com/wp-content/uploads/site/la-resto-cafe-responsive-website-template.jpg" />
                                        <span className="title-bg-primary">Dịch vụ ăn uống</span>
                                        <span id="item-2" className="item-over" onClick={this.onTemplatesItemClick}></span>
                                    </div>
                                </Col>
                                <Col xs="6" sm="3">
                                    <div className="store-template-select-item">
                                        <img alt="" src="https://cdn.freshdesignweb.com/wp-content/uploads/site/tasfiu-business-html-template.jpg" />
                                        <span className="title-bg-warning">Doanh nghiệp</span>
                                    </div>
                                </Col>
                                <Col xs="6" sm="3">
                                    <div className="store-template-select-item">
                                        <img alt="" src="https://s.tmimgcdn.com/scr/54700/electromo-electronics-store-ecommerce-clean-opencart-template_54714-original.jpg" />
                                        <span className="title-bg-info">Xem thêm..</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={"store-info-input " + (this.state.isShowStoreInfoInput ? "show" : "hide")}>
                        <h3>THÔNG TIN CỬA HÀNG</h3>
                        <hr />
                        <Form>
                            <FormGroup row>
                                <Label for="template" sm={2}>Mẫu giao diện website</Label>
                                <Col sm={10}>
                                    <Input type="text" name="template" id="template" defaultValue={this.state.templateNumber} readOnly={true} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="storeCategory" sm={2}>Nhóm cửa hàng</Label>
                                <Col sm={10}>
                                    <Input type="select" name="storeCategory" id="storeCategory">
                                    {
                                        this.state.storeCategories && 
                                        this.state.storeCategories.map((storeCategory, key) => (
                                        <option key={key} value={storeCategory._id}>{storeCategory.name}</option>
                                        ))
                                    }
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="name" sm={2}>Tên cửa hàng</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" id="name" placeholder="Tên cửa hàng" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="description" sm={2}>Giới thiệu</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="description" placeholder="Hãy giới thiệu về cửa hàng bạn.." />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="" sm={2}>Địa chỉ</Label>
                                <Col sm={10}>
                                    <Row form>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="houseNumber">Số nhà</Label>
                                                <Input type="text" name="houseNumber" id="houseNumber" placeholder="Số nhà" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="city">Thành phố</Label>
                                                <Input type="select" name="city" id="city">
                                                {
                                                    this.state.cities && 
                                                    this.state.cities.map((city, key) => (
                                                    <option key={key} value={city._id}>{city.name}</option>
                                                    ))
                                                }
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="district">Quận</Label>
                                                <Input type="select" name="district" id="district" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label for="street">Tên đường</Label>
                                                <Input type="select" name="street" id="street" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" placeholder="Email" defaultValue={this.props.user.email}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" sm={2}>Số điện thoại</Label>
                                <Col sm={10}>
                                    <Input type="phone" name="phone" id="phone" placeholder="Số điện thoại" defaultValue={this.props.user.phone}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row  className={this.state.isHasWebsite ? "" : "hide"}>
                                <Label for="website" sm={2}>Website</Label>
                                <Col sm={10}>
                                    <Input type="text" name="website" id="website" placeholder="Website" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="facebook" sm={2}>Facebook</Label>
                                <Col sm={10}>
                                    <Input type="text" name="facebook" id="facebook" placeholder="Facebook" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="youtube" sm={2}>Youtube</Label>
                                <Col sm={10}>
                                    <Input type="text" name="youtube" id="youtube" placeholder="Youtube" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="twitter" sm={2}>Twitter</Label>
                                <Col sm={10}>
                                    <Input type="text" name="twitter" id="twitter" placeholder="Twitter" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="instagram" sm={2}>Instagram</Label>
                                <Col sm={10}>
                                    <Input type="text" name="instagram" id="instagram" placeholder="Instagram" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="googlePlus" sm={2}>Google Plus</Label>
                                <Col sm={10}>
                                    <Input type="text" name="googlePlus" id="googlePlus" placeholder="Google Plus" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="pinterest" sm={2}>Pinterest</Label>
                                <Col sm={10}>
                                    <Input type="text" name="pinterest" id="pinterest" placeholder="Pinterest" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="logo" sm={2}>Logo</Label>
                                <Col sm={10}>
                                    <Input type="file" name="file" id="logo" />
                                    <FormText color="muted">

                                    </FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }} style={{ textAlign: "center" }}>
                                    <Button type="button" color="success">Thêm cửa hàng</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </Container>
            </>
        );
    }
}

export default Tables;
