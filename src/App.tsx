import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Main from "./components/Main";
import About from "./components/About";
import Post from "./components/post/Post";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-container">
          <Switch>
            <Route path="/posts/:slug">
              <Post />
            </Route>
            <Route path="/notes/:slug">
              <Post />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
