import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        loading: true,
        character: {}
    }
  }

    componentDidMount() {
      this.setState({loading: true})
      fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
    }

  render() {
    return(
        <div>
          {this.state.loading ? "Loading..." : this.state.character.name}
        </div>
    )
  }
  
}


export default App