import React, {Component} from 'react';

class SearchBar extends Component {
	state = {term: ''}

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
			<form onSubmit={this.onSubmitForm} >
				<div>
					<input type="text" value={this.state.term} onChange={this.onInputChange}/>
				</div>
			</form>
		);
	}
}

export default SearchBar;