import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './mystyle.css';
import App from './App';

class Login extends Component {
	state = {
		login: "False",
		roll:""
	}
	render() {
		return (
		<Router>
		<form>
			<div>
				<paraHead>Login to Continue</paraHead>
				<p>Roll Number: (CB.EN.U4XYZ17ABC format)</p><br/>
				<input type="text" onChange ={this.handleChange} />
				<br/><br/><br/><button onClick = {() => this.submitAction()}>Click to login</button><br/><br/><br/><br/>
			</div>
			</form>
		</Router>
	)};
}

export default Login;