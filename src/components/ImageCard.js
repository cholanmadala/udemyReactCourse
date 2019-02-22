import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spans: 0
		}
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		console.log();
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10); //10 is grid-auto-rows value which was given

		this.setState({
			spans
		});
		
	}

	render() {
	const {description, urls} = this.props.image;
			return (
			<div style={{gridRowEnd : `span ${this.state.spans}`}}>
				<img
					ref={this.imageRef}
					src={urls.regular}
					alt={description}
				/>
			</div>
		);
	}
}

export default ImageCard;