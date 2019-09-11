import React, { Component } from 'react';
import axios from 'axios';

const key = '52a93b907ac18230b628d3ef873f49d7';
const baseUrlWithKey = `https://api.themoviedb.org/3/movie/`;

export default class MoviePage extends Component {
	state = {
		movie: null
	};

	fetchMovie = movieID => {
		axios
			.get(`${baseUrlWithKey}${movieID}?api_key=${key}`)
			.then(data => this.setState({ movie: data.data }));
	};

	componentDidMount() {
		const { movieID } = this.props.match.params;
		this.fetchMovie(movieID);
	}

	renderMovie = () => {};

	render() {
		if (this.state.movie !== null) {
			return (
				<div className='container'>
					<h1>Movie Title: {this.state.movie.title}</h1>
				</div>
			);
		} else {
			return (
				<div className='container'>
					<div class='spinner-border' role='status'>
						<span class='sr-only'>Loading...</span>
					</div>
				</div>
			);
		}
	}
}
