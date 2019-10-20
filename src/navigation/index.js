import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../screens/Search';
import Result from '../screens/SearchResult';

export default function Navigation() {
  return (
    <Router>
     
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      
    </Router>
  );
}
