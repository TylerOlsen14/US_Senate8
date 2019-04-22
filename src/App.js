import React, { Component } from 'react';
import './App.css';

import Routing from "./Routing"
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1>Senator's Information</h1>
        </header> */}
        <Routing/>
        <Container/>                
      </div>
    );
  }
}

export default App;