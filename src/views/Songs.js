import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSongs, selectASong} from '../actionCreators';

class Songs extends Component {

	componentDidMount () {
		this.props.getSongs();
	}

	// onButtonClick = (song) => () => {
	// 	this.props.selectASong(song);
	// }

	getSongs = () => {
		return this.props.songs.map((song, index) => {
			return <div key={index} className="item">
				<div className="right floated content">
					<button className="ui button primary" onClick={() => this.props.selectASong(song)} >
						Select
					</button>
				</div>
				<div className="content">{song.name}</div>
			</div>
		});
	}

	render() {
		return (
			<div className="ui container grid">
				<div className="ui row" >
					<div className="column eight wide">
						<h3>Songs</h3>
						<div className="ui divided list">
							{this.getSongs()}
						</div>
					</div>
					<div >
						<h3>Selected Song</h3>
						{this.props.selectedSong ? <div className="right floated content">
							<div>
								<h3>Artist: {this.props.selectedSong.name}</h3>
							</div>
							<div>
								<h3>Duration: {this.props.selectedSong.duration}</h3>
							</div>
						</div>: null}
						
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({songs}) => {
	return {
		songs: songs.songs,
		selectedSong: songs.selectedSong
	}
}

export default connect(mapStateToProps, {
	getSongs,
	selectASong
})(Songs);