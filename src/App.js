import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./components/Home";
//import WorkPage from ""
     //import Resume from "./components/Resume";
//import Footer from "";

function App() {
  return (
    <Router>
        <Nav />
        <br/>
        <Switch>
            <Route exact path="/" component={Home} />

        </Switch>
        <br/>
    </Router>
  );
}

export default App;
