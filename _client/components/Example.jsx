import React, { Component } from "react";
import ReduxExample from "./ReduxExample";
import { Route, NavLink } from "react-router-dom";
import "../css/Example.css";

//      REDUX CONNECTION
import { connect } from "react-redux";
import { exampleAction } from "../redux/actions/example";
@connect(
	store => store.example,
	{ onClick: exampleAction }
)
//      EXAMPLE REACT COMPONENT
class Example extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className={"title"}>Development Environmnet</h1>
				<span>
					This development environment represents a basic boilerplate for a MERN
					application.
				</span>
				<br />
				<br />
				<span>Supported Features:</span>
				<ul>
					<li>ES6</li>
					<li>JSX</li>
					<li>Babel Proposal Decorators</li>
					<li>CSS Modules</li>
					<li>CSS Text Extractor</li>
					<li>Webpack Bundle for Scripts/CSS</li>
					<li>Scripts/CSS injection with HTML-webpack-plugin</li>
				</ul>
				<span>Basic Scaffolding</span>
				<ul>
					<li>Recommended Folder Structure</li>
					<li>React App with example components</li>
					<li>React Router with example</li>
					<li>Preconfigured REDUX Store with Middleware</li>
					<li>
						Example Actions, Reducers, Types, Connected Components for
						react-redux
					</li>
					<li>
						Express server with example routes and static asset configuration
					</li>
					<li>Express session with mongo-connect storage for user sessions</li>
					<li>Mongoose with a simple Schema/Model example</li>
				</ul>
				<span>Extra:</span>
				<ul>
					<li>
						Recommended video tutorial resources links (youtube playlists)
					</li>
					<li>Mocha testing example for Mongoose</li>
					<li>Open Sans Google Font</li>
				</ul>
				<a style={{ color: "#ccc9c2", fontSize: "14px" }}>Redux Example:</a>
				<NavLink to={"/redux"} exact>
					Visible
				</NavLink>
				<a> | </a>
				<NavLink to={"/"} exact>
					Hidden
				</NavLink>
				<br />
				<Route path="/redux" exact component={ReduxExample} />
			</React.Fragment>
		);
	}
}

export default Example;
