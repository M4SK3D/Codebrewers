import React from 'react';
import axios from 'axios';
import './mystyle.css';

class App extends React.Component {
	state = {
		prefs: [],
		login:0,
		roll:'',
		loginError:"",
		name:"",
		admin:0
	};
	
	getUsers = async() => {
		if(this.state.admin === 1) {
			let res = await axios.get("http://7e3f2425.ap.ngrok.io/adminfetch");
			console.log("Fetched");
			let { data } = res;
			this.setState({ prefs: data });
		}
		else {
			let res = await axios.post("http://7e3f2425.ap.ngrok.io/fetch",{roll:this.state.roll});
			console.log("Fetched");
			let { data } = res;
			this.setState({ prefs: data });
		}
	};

	renderTableData() {
		return this.state.prefs.map((e,i) => {
			if(this.state.admin === 1) {
					return (
						<tr key={e.cid}>
							<td>{e.sname}</td>
							<td>{e.cid}</td>
							<td>{e.cname}</td>
							<td>{e.prefno}</td>
						</tr>
						);
			}
			else {
				return (
					<tr key={e.cid}>
						<td>{e.cid}</td>
						<td>{e.cname}</td>
						<td>{e.prefno}</td>
					</tr>
					);
			}

	});
	}
	
	renderHeader() {
      let header = Object.keys(this.state.prefs[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   
    logoutFunction() {
		this.setState({login:0, prefs: [], roll: "", loginError: "", name:"", admin:0});
	}
	
	handleChange = (event) => {
		event.preventDefault();
		this.setState({roll:event.target.value});
		console.log(this.state.roll);
	}
	
	submitAction = async() => {
		if(this.state.roll.length === 16 || this.state.roll.length === 5) {
			let bools = await axios.post("http://7e3f2425.ap.ngrok.io/verify",{roll:this.state.roll});
			console.log(bools);
			if(bools.data.name.length !== 0)
			{
				this.setState({login:1});
				this.setState({name:bools.data.name});
				if(this.state.name === 'Administrator')
				{
					this.setState({admin:1});
				}
			}
			else {
				this.setState({loginError:"Enter a valid Roll Number!"});
			}
		}
		else{
			this.setState({loginError:"Enter a valid Roll Number!"});
		}
	}		
	
	render() {
		if (this.state.login === 0)
		{
			return (
				<container>
					<parahead>Login to Continue</parahead>
					<p style={{paddingLeft:"25px"}}>Roll Number: (CB.EN.U4XYZ17ABC format)</p>
					<p style={{paddingLeft:"25px"}}>Try: 17001 to 17005 and admin</p>
					<p style={{color:'Red'}}>{this.state.loginError}</p>
					<br/>
					<input type="text" onChange ={this.handleChange} />
					<br/><br/>&emsp;&emsp;&emsp;<button onClick = {() => this.submitAction()}>Login</button><br/><br/><br/><br/>
				</container>
			);
		}
		else{
		return (
			<div>
			{this.state.prefs.length === 0 ? (
			<div>
			<topspace>
				<p>ELECTIVES MANAGEMENT SYSTEM</p>
			</topspace>
			<w3sidebar>
			<img src="http://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png" />
			<p style={{fontSize:"30px", paddingLeft:"50px" , color:"white"}}>Hello,</p><nametag>{this.state.name}</nametag>
				<navbar>
			    <logout onClick = {() => this.logoutFunction()}>Logout</logout>
				</navbar>
			</w3sidebar>
			<button style={{marginLeft:"20%" ,width:"20%" ,display:"block"}} onClick={() => this.getUsers()}>Click to load!</button>
			</div>
			)
			: (
			<div>
			<topspace>
				<p>ELECTIVES MANAGEMENT SYSTEM</p>
			</topspace>
			<w3sidebar>
			<img src="http://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png" />
			<p style={{fontSize:"30px", paddingLeft:"50px" , color:"white"}}>Hello,</p><nametag>{this.state.name}</nametag>
				<navbar>
			    <logout onClick = {() => this.logoutFunction()}>Logout</logout>
				</navbar>
			</w3sidebar>
			<table id='students' style={{marginLeft:"20%"}}>
			<tbody>
			<div style={{fontSize:"20px"}}>Your Preferences List:</div>
			<br/>
			<tr>{this.renderHeader()}</tr>
				{this.renderTableData()}
			</tbody>
			</table>
			<button style={{marginLeft:"20%" ,width:"10%" ,display:"block"}} onClick={() => this.getUsers()}>Reload</button>
			</div>
			)}
			</div>
		);}
	}
}

export default App;
