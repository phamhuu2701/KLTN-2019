import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

import "./PhoneActivate.css";

class AlertConfirm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.show
        }

        this.handleClose = this.handleClose.bind(this);
        this.onBuyStoresMoreClick = this.onBuyStoresMoreClick.bind(this);
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.setState({
                show: true
            })
        }
    }

    onBuyStoresMoreClick() {
        window.location = "more-stores";
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose} className="phone-activate">
                    <Modal.Header closeButton>
                        <Modal.Title>THÔNG BÁO!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Bạn chỉ có thể tạo miễn phí 1 cửa hàng.</p>
                    </Modal.Body>
                    <Modal.Footer className={"phone-activate-footer show"}>
                        <Button variant="" onClick={this.handleClose}>
                            ĐÓNG
                        </Button>
                        <Button variant="warning" onClick={this.onBuyStoresMoreClick}>
                            MUA GÓI CỬA HÀNG
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default AlertConfirm;