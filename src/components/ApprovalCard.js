import React from 'react';

const ApprovalCard = (props) => {
	return (
		<div className="ui card">
			<div className="content"> {props.children ? props.children : 'Are you sure?' } </div>	
			<div className="extra content">
				<div className="ui two buttons">
					<button className="ui basic green button">Aprrove</button>
					<button className="ui basic red button">Reject</button>
				</div>
			</div>
		</div>	


	);
};

export default ApprovalCard;