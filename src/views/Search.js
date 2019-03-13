import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import {connect} from 'react-redux';
import {searchATerm} from '../actionCreators';

class Search extends Component {

	onSearchSubmit = (term) => {
		//invoke action creator
		this.props.searchATerm(term);
	}

	render () {
		return (
			<div>
				<SearchBar
					onSubmit={this.onSearchSubmit}
					term={this.props.term}
				/>
				<ImageList data={this.props.data} />
			</div>
		);
	}

};

const mapStateToProps = ({search}) => {
	return {
		data: search.images,
		term: search.term
	};
}

export default connect(mapStateToProps, {
	searchATerm
})(Search);