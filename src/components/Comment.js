import React from 'react';

const Comment = ({avatar, author, comment, ...rest}) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={avatar}/>
			</a>
			<div className="content">
				<a href="/" className="author">{author}</a>
				<div className="metadata" ><span className="date">Today at 7:00 AM</span></div>
				<div className="text">{comment}</div>
			</div>
		</div>
	);
};


export default Comment;