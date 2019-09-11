import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
	render() {
		const movieLink = `/${this.props.movie.id}`;

		return (
			<div className='col col-md-3' style={{ width: 400 }}>
				<Link to={movieLink}>
					<img className='card-img-top' src={this.props.imageUrl} alt='Card' />
				</Link>
				<div className='card-body'>
					<h4 className='card-title'>{this.props.movie.title}</h4>
					<p className='card-text'>
						{this.props.movie.overview.substring(0, 10)}
					</p>
				</div>
			</div>
		);
	}
}

export default MovieCard;
