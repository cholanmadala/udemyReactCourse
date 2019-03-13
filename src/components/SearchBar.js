import React, {Component} from 'react';

class SearchBar extends Component {
	state = {term: this.props.term}

	onInputChange = (ev) => {
		this.setState({
			term: ev.target.value
		})
	}

	onSubmitForm = (ev) => {
		ev.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render () {
		return (
			<div className="ui segment" >
			<form onSubmit={this.onSubmitForm} className="ui form" >
				<div className="field">
					<label>Image Search</label>
					<input 
						type="text" 
						value={this.state.term} 
						onChange={this.onInputChange}
					/>
				</div>
			</form>
			</div>
		);
	}
}

export default SearchBar;