import React, { Component } from 'react'
import Idea from './Idea'


class IdeasList extends Component {

	constructor(props) { 
		super(props)
		this.state = {
			ideas: [
				{id:1, idea:'Tripper API'},
				{id:2, idea:'Cyber Crawler App'}
			]
		}
		this.eachIdea = this.eachIdea.bind(this)
	}

	eachIdea(idea, i) {
		return (
			<Idea key={i} index={i}>
				{idea.idea}
			</Idea>
		)
	}

	render() {
		return (
		 <div class="ideasList">
			{this.state.ideas.map(this.eachIdea)}
		</div>
		)
				
	}
}

export default IdeasList
