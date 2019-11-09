import React, { Component } from 'react';

export default class Information extends Component {
	/*constructor(props) {
		super(props);
	}*/

	componentDidUpdate() {
		console.log(this.props.isLoggedIn);
		if (this.props.isLoggedIn === false) {
			alert('You had not logged in yet!')
			window.location = 'http://localhost:3000'
		}
	}

	render() {
		return (
			<div className='app'>
                My information
            </div>	
		)	
	}
}