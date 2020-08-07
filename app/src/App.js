import React from 'react';

import Nav from "./components/Nav";

import dancingChar from "./images/dancing_char.gif";

function App() {
  return (
    <div className="App">
      <Nav/>
    <dv className="dancing-char">
      <img src={dancingChar}/>
    </dv>
    </div>
  );
}

export default App;
