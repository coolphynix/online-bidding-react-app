/*
    ./client/components/Container.jsx
*/
import React from 'react';
import Box from './Box.jsx';
import Masonry from 'masonry-layout';

export default class Container extends React.Component {
	
  render(props) {

  	const style = {
  		width:"80%",
  		margin : "auto"
  	}

	var namesList = this.props.data.map(function(elem){
		return <Box key={elem.id} data={elem}/>;
	})


    return (
	     <div className="grid" style={style} data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 250 }'>     	
     	{namesList}
     </div>);

  }
}
