import React, { Component } from 'react';
import './App.css';

// import Routing from "./Routing"
// import Container from './components/Container';

class App extends Component {
  state = {
    senators: []
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
    .then(response =>  {
      return response.json();
    })
    .then(data => {
      console.log('data:', data)
      this.setState({senators: data})
    });
  }
  render() {
    console.log(this.state.senators)
    return (
      <div className="App">
        {this.state.senators.map((senator)=> (
        <div className="senator">
          <div className="senatorLeft">
            <h1>Name: {senator.name}</h1>
            <img src={senator.photo_url} alt="{senator.name}, {state_name}"/>
          </div>
          <div className="senatorRight">
            <h2>State: {senator.state_name}</h2>
            <h3>gender: {senator.gender}</h3>
          </div>
        </div>
        ))}
        {/* <Routing/> */}
        {/* <Container/> */}
      </div>
    );
  }
}

export default App;