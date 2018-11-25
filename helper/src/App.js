import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="container" className="container">
          <div id="header" className="header">
            <h1 className="title">HELPER</h1>
            <br />
            <h4 className="moto">For everyone</h4>
          </div>
          <nav className="navcust navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">HP</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="https://www.google.com">Web Dev</a></li>
                <li><a href="#">CP</a></li>
                <li><a href="#">ML</a></li>
                <li><a href="#">App Dev</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </nav>
          <aside id="aside" className="aside">
            <br />
            <h4><a href="#">Web Development</a></h4>
            <h5><a href="#">HTML</a></h5>
            <h5><a href="#">CSS</a></h5>
            <h5><a href="#">JS</a></h5>
            <h5><a href="#">ReactJS</a></h5>
            <h5><a href="#">NodeJS</a></h5>
            <h5><a href="#">BOOTSTRAP</a></h5>
            <h5><a href="#">PHP</a></h5>
            <h5><a href="#">SQL</a></h5>

            <br />
            <h4><a href="#">CP</a></h4>
            <h5><a href="#">Basics</a></h5>
            <h5><a href="#">Implementation</a></h5>
            <h5><a href="#">Recursion</a></h5>
            <h5><a href="#">Dynamic Programming</a></h5>
            <h5><a href="#">Game Theory</a></h5>
            <h5><a href="#">Data Structures</a></h5>
            <br />
            <h4><a href="#">ML</a></h4>
            <h5><a href="#">Basics</a></h5>
            <h5><a href="#">Implementation</a></h5>
            <h5><a href="#">Recursion</a></h5>
            <h5><a href="#">Dynamic Programming</a></h5>
            <h5><a href="#">Game Theory</a></h5>
            <h5><a href="#">Data Structures</a></h5>
            <br />
            <h4><a href="#">App Dev</a></h4>
            <h5><a href="#">Basics</a></h5>
            <h5><a href="#">Implementation</a></h5>
            <h5><a href="#">Recursion</a></h5>
            <h5><a href="#">Dynamic Programming</a></h5>
            <h5><a href="#">Game Theory</a></h5>
            <h5><a href="#">Data Structures</a></h5>
          </aside>
          <div id="main" className="main">
            <a href="#">
              <div className="submain">
                <h3>Web Development</h3>
                <img src="./images/web dev learn.jpg" className="imagefront" />
                <img src="./images/webd learn 2.jpg" className="imagefront" />
                <img src="./images/webd 3.jpg" className="imagefront" />
              </div>
            </a>
            <br />
            <a href="#">
              <div className="submain">
                <h3>Competetive Programming</h3>
                <img src="./images/c++ cp.png" className="imagefront" />
                <img src="./images/cp.jpg" className="imagefront" />
                <img src="./images/python cp.png" className="imagefront" />
              </div>
            </a>
            <br />
            <a href="#">
              <div className="submain">
                <h3>Machine Learning</h3>
                <img src="./images/robot ml.jpg" className="imagefront" />
                <img src="./images/ml.png" className="imagefront" />
                <img src="./images/learned robot ml.jpg" className="imagefront" />
              </div>
            </a>
            <br />
            <a href="#">
              <div className="submain">
                <h3>App Development</h3>
                <img src="./images/second appd.jpg" className="imagefront" />
                <img src="./images/first appd.png" className="imagefront" />
                <img src="./images/third appd.png" className="imagefront" />
              </div>
            </a>
          </div>

          <div id="contact">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
