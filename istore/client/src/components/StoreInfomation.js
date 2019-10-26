import React, { Component } from 'react';

import './StoreInfomation.css'

export default class StoreInfomation extends Component {
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
		document.querySelector('.store-info').style.right = '-100%';
	}

	render() {
		return (
			<div className="store-info" ref={this.wrapperStoreRef}>
				<a href="javascipt:void(0)" className='closebtn' onClick={this.closeStoreInfo}>></a>
			</div>
		);
	}
}
