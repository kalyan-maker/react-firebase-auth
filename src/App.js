import React from "react";
import "./App.css";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Edit from "./Components/pages/Edit";
import View from "./Components/pages/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Components/pages/Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <View />
        <Switch>
          <Route path="/" exact component={Edit} />
          <Route path="/signout" exact component={About} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
