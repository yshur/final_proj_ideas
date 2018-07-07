import React from 'react';
import { Route } from 'react-router-dom';
import IdeasList from '../Components/IdeasList';
import MyIdeas from '../Components/MyIdeas';
import Header from '../Components/Header';

const ReactRouter =()=> {
	return (
		<React.Fragment>
			<Header />
			<Route exact path="/" component = {IdeasList} />
			<Route exact path="/MyIdeas" component = {MyIdeas} />
		</React.Fragment>	
	);
}

export default ReactRouter;

