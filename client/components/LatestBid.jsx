/*
    ./client/components/LatestBid.jsx
*/
import React from 'react';

export default class LatestBid extends React.Component {

	render(props) {

		return (
			<div>
				<span>Rs. {this.props.highestBid}</span>
			</div>
		);
		
	}

}