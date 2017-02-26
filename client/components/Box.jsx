/*
    ./client/components/Box.jsx
*/
import React from 'react';
import LatestBid from './LatestBid.jsx';
import Timer from './Timer.jsx';

export default class Box extends React.Component {
	
	  render(props) {

	  	const imageStyle = {
			height : "250px",
			width  : "250px"
		};

	    return (
			<div className="col-md-3 col-sm-6">
				<div className="product-item">
					<div className="product-thumb">
						<img src={this.props.data.image} alt="" style={imageStyle}/>
					</div> 
					<div className="product-content">						
						<Timer data={this.props.data}/>	
					</div> 
				</div> 
			</div> 
			);
	    
	  }
}
