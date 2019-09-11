import React, { Component } from 'react';

import '../css/Header.css';
import Search from './Search';

class Header extends Component {
	render() {
		return (
			<div className='header-container'>
				<Search fetchData={this.props.fetchData} />
			</div>
		);
	}
}

export default Header;
