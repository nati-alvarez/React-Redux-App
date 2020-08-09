import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Show from "./components/Show";

import dancingChar from "./images/dancing_char.gif";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path='/anime/:id'>
              <Show/>
            </Route>
          </Switch>
        </main>
      </Router>
    <div className="dancing-char">
      <img src={dancingChar}/>
    </div>
    </div>
  );
}

export default App;
