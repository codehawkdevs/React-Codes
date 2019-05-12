import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
        isVegan: false,
        isRunner: false,
        isStudent: false

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
        this.setState({
            [name]: checked
        })
        :
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <main>
      <h1>React Forms</h1>
      <br />
        <form>
          <input 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
            placeholder="First Name" 
          />

          <br />

          <input 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
            placeholder="Last Name" 
          />

          <br />

          <input 
            name="age" 
            value={this.state.age} 
            onChange={this.handleChange} 
            placeholder="Age" 
          />

          <br />

          <label>
            <input 
                type= "radio"
                name= "gender"
                value= "male"
                checked = {this.state.gender === "male"}
                onChange={this.handleChange}
            /> Male
          </label>

          <br />

          <label>
            <input 
                type= "radio"
                name= "gender"
                value= "female"
                checked = {this.state.gender === "female"}
                onChange={this.handleChange}
            /> Female
          </label>

          <br />

          <select
            value = {this.state.destination}
            name = "destination"
            onChange = {this.handleChange}>

            <option value="">-- Please Choose a destinantion --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
        </select>

        <br />

        <label>
            <input
                type="checkbox"
                name="isVegan"
                onChange={this.handleChange}
                checked={this.state.isVegan}/> Vegan?
        </label>
        <br />
        <label>
            <input
                type="checkbox"
                name="isRunner"
                onChange={this.handleChange}
                checked={this.state.isRunner}/> Runner?
        </label>
        <br />
        <label>
            <input
                type="checkbox"
                name="isStudent"
                onChange={this.handleChange}
                checked={this.state.isStudent}/> Student?
        </label>

        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your Gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary Restrictions:  
            {this.state.isVegan ? "Vegan" : "Non - vegan"},
            {this.state.isRunner ? "Runner" : "Non - Runner"},
            {this.state.isStudent ? "Student" : "Non - Student"}
            </p>
      </main>
    )
  }
}


export default App
