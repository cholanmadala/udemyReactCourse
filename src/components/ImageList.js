import React, {Component} from 'react';

class ImageList extends Component {
	
	renderContent = () => {
		const data = this.props.data;
		const content =  data.map((item, index) => <img alt="img" style={{width: "300px", height: "300px"}} src={item.urls.regular} key={index} /> );
		return content;
	}

	render() {
		return (
			<div>
			<h4>Found {this.props.data.length} images</h4>
				{this.renderContent()}
			</div>
		)
	}
}

export default ImageList;