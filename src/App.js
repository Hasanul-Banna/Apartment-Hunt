import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Apartment/:id">
          <Details/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
