import React, { Component } from 'react';

import { FacebookProvider, LoginButton, CustomChat } from 'react-facebook';

import './Information.css'

export default class Information extends Component {
	/*constructor(props) {
		super(props);
	}*/

	componentDidUpdate() {
		/*if (this.props.isLoggedIn === false) {
			alert('You had not logged in yet!')
			window.location = 'http://localhost:3000'
		}*/
	}

	handleResponse(data) {
	    console.log(data);
	}
	 
	handleError(error) {
	    this.setState({ error });
	}

	render() {
		return (
			<div className='information'>
		        <FacebookProvider appId="984029191952495" chatSupport>
			        <CustomChat pageId="326054444409287" minimized={false}/>
			    </FacebookProvider>
            </div>	
		)	
	}
}