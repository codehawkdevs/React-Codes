import React, {Component} from "react"

class App extends Component {
	constructor(){
		super()
		this.state = {
			loggedIn : false
		}
		this.handleClick = this.handleClick.bind(this)
	}
		handleClick(){
			this.setState( prevState => {
				return{
				loggedIn : !(prevState.loggedIn)
			}
			})
		}
	
	

	render(){
		return(
			<div>
				<p>{this.state.loggedIn ? "Logged In" : "Logged Out"}</p>
				<button onClick={this.handleClick}>{this.state.loggedIn ? "logout" : "login"}</button>
			</div>

			)
	}
}

export default App
