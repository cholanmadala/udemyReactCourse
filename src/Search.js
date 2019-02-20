import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class Search extends Component {
	state = {data: []};
	
	onSearchSubmit = async (term) => {

		const response = await axios.get('https://api.unsplash.com/search/photos', {
			
			headers: {
				Authorization: 'Client-ID 5edcc90dbe91ad23abf0cf59223b59301a3767365586e47cfa3df4e2acad8347'
			},
			params: {
				query: term
			}
		});

		this.setState({data: response.data.results});
	}

	render () {
		return (
			<div>
				<SearchBar 
					onSubmit={this.onSearchSubmit} 
				/>
				<ImageList data={this.state.data} />
			</div>
		);
	}

};

export default Search;