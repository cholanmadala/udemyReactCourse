import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSongs, selectASong} from '../actionCreators';

class Songs extends Component {

	componentDidMount () {
		this.props.getSongs();
	}

	render() {
		console.log(this.props.songs)
		return (
			<div className="ui segment">
				Songs
				<div>
					<h3>Songs List</h3>

				</div>
				<div >
					<h3>Selected Song</h3>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs
	}
}

export default connect(mapStateToProps, {
	getSongs,
	selectASong
})(Songs);