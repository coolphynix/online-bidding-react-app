/*
    ./client/components/Timer.jsx
*/
import React from 'react';

function LatestBidComponent(props){
	
	return <span className="price">Latest Bid: Rs.{props.highestBid}</span>;

}

class Clock extends React.Component {

	constructor(props){

		super(props);

		this.endTimeToBeAdded = 5000;

		this.state = {			
			bidStartTime 	: this.props.bidStartTime,		
			bidEndTime   	: this.props.bidStartTime + this.endTimeToBeAdded,	
			timeRemaining 	: this.endTimeToBeAdded/1000,
			intervalId   	: null
		};	

	}

	componentDidMount(){

		this.state.intervalId = setInterval(()=>{
			this.setState({
				timeRemaining : this.calculateRemainingTime()
			});
		},1000);	

	}

	shutDownThePolling(){
		clearInterval(this.state.intervalId);
	}

	calculateRemainingTime(){

		let timeRemaining 	= this.state.bidEndTime - new Date().getTime();
		timeRemaining 		= timeRemaining/1000;
		return parseInt(timeRemaining);
		
	}

	render(){

		const h5Style={
			marginBottom: "20px"
		};

		if(this.state.timeRemaining >= 0){
			return (
				<h5 style={h5Style}><a href="#">{this.state.timeRemaining} seconds remaining </a></h5>
			);
		}else{

			return (
				<h5 style={h5Style}><a href="#">Bidding closed</a></h5>				
			);
		}

		
	}
}

export default class Timer extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			toBeShown  : this.props.data.isBiddingStarted,
			highestBid : this.props.data.highestBid
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick(){

		this.setState({
			toBeShown  : true,
			highestBid : this.bidNowInput.value
		});

	}

	render() {	

		const bidNowButtonStyle = {
			border: 0,
    		outline: 0,
    		padding: "6px",
    		color: "rgb(255, 255, 255)",
    		background: "rgb(42, 128, 185)"
		};

		const bidNowInputStyle = {
			background: "rgb(255, 255, 255)",
		    border: "1px solid rgb(221, 221, 221)",
		    padding: "5px 20px"
		};

		if(this.state.toBeShown){

			return (
				<div>
					<Clock bidStartTime={(new Date().getTime())} />
					<LatestBidComponent highestBid={this.state.highestBid}/>										
				</div>
			);

		}else{
			
			return (
				<div>
					<input type="text" id="bidNowInput" style={bidNowInputStyle} placeholder="Your Bid Amount" ref={(input) => { this.bidNowInput = input; }}/>
					<button style={bidNowButtonStyle} onClick={this.onClick}> Bid Now </button>
					<LatestBidComponent highestBid={this.state.highestBid}/>
				</div>
			);

		}

	}

}

