/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import {data} from './data.js';

ReactDOM.render(
	<Container data={data}/>, 
	document.getElementById('root')
);