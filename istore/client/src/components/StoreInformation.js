import React, { Component } from 'react';

<<<<<<< HEAD:istore/client/src/components/StoreInfomation.js
import './StoreInfomation.css';
import StoreDetail from "./StoreDetail";
=======
import './StoreInformation.css'
>>>>>>> 4bca75bf8e8107102adf47ab0805bfddeb91fa5c:istore/client/src/components/StoreInformation.js

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
		document.querySelector('.store-info').style.right = '-100%';
	}

	render() {
		return (
			<div className="store-info" ref={this.wrapperStoreRef}>
				<div>
					<a href="javascipt:void(0)" className='closebtn' onClick={this.closeStoreInfo}>
						<img src="./icons/next_color.svg"></img>
					</a>
				</div>
				<StoreDetail />
			</div>
		);
	}
}
