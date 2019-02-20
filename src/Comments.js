import React from 'react';
import faker from 'faker';

import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';

const Comments = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h1>Warning!</h1>
				<div>Want to Proceed further??</div>
			</ApprovalCard>
			<ApprovalCard >
				<Comment 
					avatar={faker.image.avatar()}
					author={faker.internet.userName()}
					comment='Awesome!'
				/>
			</ApprovalCard>
			<ApprovalCard >
				<Comment
					avatar={faker.image.avatar()}
					author={faker.internet.userName()}
					comment='Good Job!!!'
				/>
			</ApprovalCard>
			<ApprovalCard >
				<Comment
					avatar={faker.image.avatar()}
					author={faker.internet.userName()}
					comment='Nice Blog Post!!!'
				/>
			</ApprovalCard>
			<ApprovalCard />
		</div>
	)
};

export default Comments;