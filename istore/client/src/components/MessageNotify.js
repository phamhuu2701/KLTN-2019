import React, { Component } from 'react';
import { Alert } from "react-bootstrap";

import './MessageNotify.css';

export default class MessageNotify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: '',
			message: ''
		}
	}

	UNSAFE_componentWillMount() {
		if (this.state.message) {
			this.setState({
				show: 'show',
				message: this.props.message
			})
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.message) {
			this.setState({
				show: 'show',
				message: nextProps.message + ' Vui lòng kiểm tra <a href="https://mail.google.com/" target="_blank">mail</a> để xác thực!'
			})

			setTimeout(()=> {
				this.setState({
					show: ''
				})
			}, 4000);
		}
	}

	render() {
		return (
			<div className={'success-feedback ' + this.state.show}>
				<Alert variant='success'><span dangerouslySetInnerHTML={{__html: this.state.message}}></span></Alert>
			</div>
		);
	}
}