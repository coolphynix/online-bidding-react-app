/*
    ./client/components/Box.jsx
*/
import React from 'react';
import LatestBid from './LatestBid.jsx';
import Timer from './Timer.jsx';

export default class Box extends React.Component {
	
	  render(props) {

	  	const imageStyle = {
			height : "150px",
			width  : "150px"
		};

	    return (
	     <div className="grid-item boxDiv">
	     	<img src={this.props.data.image} style={imageStyle}/>
	     	<Timer data={this.props.data}/>	     	
	      </div>);
	  }
}
