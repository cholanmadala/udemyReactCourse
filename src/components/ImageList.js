import React, {Component} from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

class ImageList extends Component {
	
	renderContent = () => {
		const data = this.props.data;
		const content =  data.map((image, index) => <ImageCard
			image={image}
			key={index} 
		/> );
		return content;
	}

	render() {
		return (
			<div className="ui segment">
				<div className="field">
				<h4>Found {this.props.data.length} images</h4>
					<div className="imageList">
						{this.renderContent()}
					</div>
				</div>
			</div>
		)
	}
}

export default ImageList;