import React, { Component } from 'react'
import Idea from './Idea'
import MdAdd from 'react-icons/lib/md/add'
import data from '../data/data.json'

class IdeasList extends Component {
	numForId = 4;
	constructor(props) { 
		super(props)
		this.state = {
			ideas: [
				// {id:0, idea:'Tripper API',group:"Naama, Dekel, Yossi, Elad"},
				// {id:1, idea:'Cyber Crawler App',group:"Aviad, Yoni, Bat-El, Maayan"},
				// {id:2, idea:'Cyber2 Crawler App',group:"Meir, Yoni, Bat-El, Maayan"}
			]
		}
		this.eachIdea = this.eachIdea.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
		this.add = this.add.bind(this)
		// this.nextID = this.nextID.bind(this)
	}
	// componentWillMount() {
	// 	var self=this
	// 	data.map(function(idea) {
	// 		console.log('idea')
	// 		self.add(idea.idea, idea.group)
	// 	});
	// }
	 componentDidMount() {
		 const url = "http://localhost:3000/final-ideas/getAllIdeas";
		 fetch(url)
		 	.then((res) => {
		 		return res.json();
		 	})
		 	.then((data) => {
		 		var self=this;
		 		data.map((data) => {
		 			console.log('idea')
		 			self.add(data.id, data.idea, data.group);
		 		})
			 })
	 }
	eachIdea(idea, i) {
		console.log(idea.id)
		return (
			<div key={'container '+i} >
			<div className="card-body">
				<Idea key={idea.id} index={idea.id} 
				onChange={this.update}
				onDelete={this.delete}>
					<h5 className="card-title">{idea.idea}</h5>
					<p className="card-text">{idea.group}</p>
				</Idea>
			</div>
			</div>
		)
	}
	update(newIdea, i) {
		console.log('update: '+i+' '+newIdea)
		this.setState(prevState => ({
			ideas: prevState.ideas.map(
				idea => (idea.id !== i) ? idea : {...idea,idea:newIdea}
			)
		}))
	}
	delete(id) {
		console.log('deleted: '+id)
		this.setState(prevState => ({
			ideas: prevState.ideas.filter(idea => idea.id !== id)
		}))
	}
	add(id, txt, grp) {
		console.log(typeof id)
		if ((typeof id) !== 'number') {
			var txt = "some txt";
			var grp = "some grp";
			var id = this.numForId++;
		}

		this.setState(prevState => ({
			ideas: [
				...prevState.ideas,
				{
					id:id,
					idea: txt,
					group: grp
				}]
		}))
		
	}	

	render() {
		return (
		 <div className="card ideasList" style={{width: 18+'rem', marginBottom: 7+'px'}}>
		 	{this.state.ideas.map(this.eachIdea)}
			<br/><button onClick={this.add}
			id="add" className="btn btn-primary" style={{marginRight: 7+'px'}}>
			Add <MdAdd/></button>
		</div>
		)
				
	}
}

export default IdeasList
