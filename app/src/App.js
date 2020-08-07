import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Nav from "./components/Nav";

import dancingChar from "./images/dancing_char.gif";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      </Router>
    <div className="dancing-char">
      <img src={dancingChar}/>
    </div>
    </div>
  );
}

export default App;
