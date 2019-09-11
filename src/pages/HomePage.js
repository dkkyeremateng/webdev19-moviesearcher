import React, { Component } from 'react';

import MovieCardList from '../components/MovieCardList';
import Header from '../components/Header';

export default class HomePage extends Component {
	render() {
		if (this.props.movies.length > 0) {
			return (
				<div>
					<Header fetchData={this.fetchData} />
					<div className='container'>
						<MovieCardList movies={this.props.movies} />
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<Header fetchData={this.props.fetchData} />
				</div>
			);
		}
	}
}
