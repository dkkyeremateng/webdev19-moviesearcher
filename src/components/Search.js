import React, { Component } from 'react';

class Search extends Component {
	state = {
		searchTerm: ''
	};

	onButtonClick = () => {
		if (this.state.searchTerm.trim().length > 1) {
			this.props.fetchData(this.state.searchTerm);
		}
	};

	render() {
		return (
			<div className='container'>
				<div className='form-group'>
					<label htmlFor='term'>Search Term</label>
					<input
						type='text'
						className='form-control'
						id='term'
						onChange={event =>
							this.setState({ searchTerm: event.target.value })
						}
					/>
				</div>

				<button
					type='button'
					className='btn btn-primary'
					onClick={this.onButtonClick}
				>
					Search
				</button>
			</div>
		);
	}
}

export default Search;
