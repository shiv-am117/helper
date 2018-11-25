import React, { Component } from 'react';
import Indexbase from "./Components/indexbase";
import Indexmain from "./Components/indexmain";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Indexbase></Indexbase>
        <Indexmain></Indexmain>


      </div>

    );
  }
}

export default App;
