import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	active = {
		fontWeight: "bold",
		color: "red"
	};
	header = {
		display: "flex",
		justifyContent: "space-evenly",
		listStyle: "none"
	};

	render() {
		return(
			<div style={this.header}>
				<NavLink exact to="/" activeStyle={this.style} >
				Home
				</NavLink>
				<NavLink exact to="/MyIdeas" activeStyle={this.active} >
				My Ideas
				</NavLink>
			</div>
		);
	}
}

export default Header
