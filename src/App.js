import React from "react";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import { Route, Switch, Link } from "react-router-dom";
import Jobs from "./Jobs";
import Engineer from "./Engineer";
import Marketer from "./Marketer";
import Designer from "./Designer";
import UI from "./UI";
import UX from "./UX";
import Breadcrumbs from "./Breadcrumbs";

export default function App() {
  return (
    <>
      <div className="BCWrapper">
        <Breadcrumbs />
      </div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
          <ul>
            <li><Link to="/jobs/engineer">Engineer</Link></li>
            <li><Link to="/jobs/marketer">Marketer</Link></li>
            <li>
              <Link to="/jobs/designer">Designer</Link>
              <ul>
                <li><Link to="/jobs/designer/ui">UI</Link></li>
                <li><Link to="/jobs/designer/ux">UX</Link></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/jobs" render={props => <Jobs {...props} />} />
        <Route exact path="/jobs/engineer" render={props => <Engineer {...props} />}/>
        <Route exact path="/jobs/marketer" render={props => <Marketer {...props} />}/>
        <Route exact path="/jobs/designer" render={props => <Designer {...props} />}/>
        <Route exact path="/jobs/designer/ui" render={props => <UI {...props} />}/>
        <Route exact path="/jobs/designer/ux" render={props => <UX {...props} />}/>
      </Switch>
    </>
  );
}
