import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import "./App.css";
import GetStarted from "./GetStarted";
import ApiComponent from "./Api";
import Icons from "./Icons";
import Assess from "./Assess";
import Dashboard from "./Dashboard";
import Help from "./Help";
import Submit from "./Submit";

class Main extends Component {
  constructor(props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      activeIndex: -1
    }
  }
  toggleClass(index, e) {
    console.log(index, e);
    this.setState({ activeIndex: index });
  };
  render() {
    return (
      <HashRouter>
        <div className="table">
          <div className="row">
            <div className="cell cell1">
              <ul className="menu header">
                <li><NavLink exact to="/"><Icons type="home"></Icons>Welcome</NavLink></li>
                <li><NavLink to="/get-started"><Icons type="getStarted"></Icons>Get Started</NavLink></li>
                <li><NavLink to="/api"><Icons type="api"></Icons>API Documentation</NavLink></li>
                <li><NavLink to="/assessing"><Icons type="assessing"></Icons>How We Access</NavLink></li>
                <li className="menu-heading">Runnable Example</li>
                <li><NavLink to="/dashboard"><Icons type="dashboard"></Icons>Dashboard Visualization</NavLink></li>
                <li><NavLink to="/help"><Icons type="help"></Icons>Help!</NavLink></li>
                <li><NavLink to="/submit"><Icons type="submit"></Icons>Submit</NavLink></li>
              </ul>

            </div>
            <div className="content cell cell2">
              <Route exact path="/" component={Home} />
              <Route path="/get-started" component={GetStarted} />
              <Route path="/api" component={ApiComponent} />
              <Route path="/assessing" component={Assess} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/help" component={Help} />
              <Route path="/submit" component={Submit} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;