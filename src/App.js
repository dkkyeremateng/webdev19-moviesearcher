import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

const key = '52a93b907ac18230b628d3ef873f49d7';
const baseUrlWithKey = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;

class App extends Component {
	state = {
		movies: []
	};

	fetchData = searchTerm => {
		axios
			.get(`${baseUrlWithKey}&query=${searchTerm}`)
			.then(data => this.setState({ movies: data.data.results }));
	};

	render() {
		return (
			<BrowserRouter>
				<Route
					path='/'
					exact
					render={() => (
						<HomePage movies={this.state.movies} fetchData={this.fetchData} />
					)}
				/>
				<Route path='/:movieID' component={MoviePage} />
			</BrowserRouter>
		);
	}
}

export default App;
