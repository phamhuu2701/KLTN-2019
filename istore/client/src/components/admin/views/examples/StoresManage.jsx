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
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Container,
    Row,
    Card,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import Header from "components/admin/components/Headers/Header.jsx";
import formatDate from "../../../../utils/dateUtils";
import { getStores } from "../../../../services/store.service";

class StoresManage extends React.Component {
    constructor() {
        super();

        this.state = {
            stores: []
        }
    }

    componentDidMount() {
        getStores(stores => {
            if(stores.length > 10){
                this.setState({
                    stores: stores.slice(0, 10)
                })
            }
            else{
                this.setState({
                    stores: stores
                })
            }
        })
    }

    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container style={{ "marginTop": "2rem" }} fluid={true}>
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
                                            <th scope="col">#</th>
                                            <th scope="col">Tên cửa hàng</th>
                                            <th scope="col">Lĩnh vực</th>
                                            <th scope="col">User</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col" style={{"textAlign": "center"}}><i className="fas fa-ellipsis-v" /></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">
                                        {
                                            this.state.stores.length > 0 &&
                                            this.state.stores.map((store, key) => (
                                                <tr key={key}>
                                                    <td>{key + 1}</td>
                                                    <th style={{ "textTransform": "uppercase" }}>
                                                        <a href={store.website.hasWebsite ? store.website.url : ("/store/" + store.template + "/" + store._id)} 
                                                            target="_blank" rel="noopener noreferrer">
                                                            {store.name}
                                                        </a>
                                                    </th>
                                                    <td>{store.storeCategory.name}</td>
                                                    <td>{store.user.fullname.firstname + " " + store.user.fullname.lastname}</td>
                                                    <td>{formatDate(store.timestamp)}</td>
                                                    <td>{store.products.length}</td>
                                                    <td style={{"textAlign": "center"}}>
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
                                                                <DropdownItem onClick={e => e.preventDefault()}>
                                                                    Chi tiết
                                                                </DropdownItem>
                                                                <DropdownItem onClick={e => e.preventDefault()}>
                                                                    Cập nhập thông tin
                                                                </DropdownItem>
                                                                <DropdownItem onClick={e => e.preventDefault()}>
                                                                    Xóa
                                                                </DropdownItem>>
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
                </Container>
            </>
        );
    }
}

export default StoresManage;
