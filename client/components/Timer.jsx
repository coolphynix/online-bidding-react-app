/*
    ./client/components/Timer.jsx
*/
import React from 'react';

function LatestBidComponent(props){

	return <div><span>Rs. {props.highestBid}</span></div>;

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

		if(this.state.timeRemaining >= 0){
			return (
				<span className="biddingSpan"> {this.state.timeRemaining} seconds remaining </span>
			);
		}else{

			return (
				<span className="biddingSpan"> Bidding closed </span>
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
					<input type="text" id="bidNowInput" ref={(input) => { this.bidNowInput = input; }}/>
					<button onClick={this.onClick}> Bid Now </button>
					<LatestBidComponent highestBid={this.state.highestBid}/>
				</div>
			);

		}

	}

}

