import React, { Component } from 'react';
class Indexmain extends Component {
    state = {}
    render() {
        return (<div>
            <div id="main" className="main">
                <a href="#">
                    <div className="submain">
                        <h3>Web Development</h3>
                        <img alt="" src={require("./images/web dev learn.jpg")} className="imagefront" />
                        <img alt="" src={require("./images/webd learn 2.jpg")} className="imagefront" />
                        <img alt="" src={require("./images/webd 3.jpg")} className="imagefront" />
                    </div>
                </a>
                <br />
                <a href="#">
                    <div className="submain">
                        <h3>Competetive Programming</h3>
                        <img alt="" src={require("./images/c++_cp.png")} className="imagefront" />
                        <img alt="" src={require("./images/cp.jpg")} className="imagefront" />
                        <img alt="" src={require("./images/python cp.png")} className="imagefront" />
                    </div>
                </a>
                <br />
                <a href="#">
                    <div className="submain">
                        <h3>Machine Learning</h3>
                        <img alt="" src={require("./images/robot ml.jpg")} className="imagefront" />
                        <img alt="" src={require("./images/ml.png")} className="imagefront" />
                        <img alt="" src={require("./images/learned robot ml.jpg")} className="imagefront" />
                    </div>
                </a>
                <br />
                <a href="#">
                    <div className="submain">
                        <h3>App Development</h3>
                        <img alt="" src={require("./images/second appd.jpg")} className="imagefront" />
                        <img alt="" src={require("./images/first appd.png")} className="imagefront" />
                        <img alt="" src={require("./images/third appd.png")} className="imagefront" />
                    </div>
                </a>
            </div>

        </div>);
    }
}

export default Indexmain;