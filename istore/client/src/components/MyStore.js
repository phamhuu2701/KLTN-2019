import React, { Component } from 'react';

export default class MyStore extends Component {
	/*constructor(props) {
		super(props);
	}*/

	componentDidUpdate() {
		if (this.props.isLoggedIn === false) {
			window.location = 'http://localhost:3000'
		}
	}

	render() {
		return (
			<div className='app'>
                My store
            </div>	
		)	
	}
}