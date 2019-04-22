import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./components/Home"
import Container from "./components/Container"

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Container" component={Container} />
    </Switch>
  </Router>
);

// export class Routing extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

export default Routing
