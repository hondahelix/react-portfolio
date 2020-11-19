import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
// import Home from "./components/Home";
//import WorkPage from ""
     //import Resume from "./components/Resume";
//import Footer from "";

function App() {
  return (
    <Nav/>
  );
}

export default App;

{/* <Router>
<div>
  <Nav />
  <br/>
  <Switch>

    <Route exact path="/" component={Home} />
    <Route exact path="/resume" src= {process.env.PUBLIC_URL + '/Honda-Resume.pdf'}/>
  </Switch>
  <br/>
</div>
</Router> */}