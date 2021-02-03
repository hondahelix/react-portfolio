import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import WorkPage from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Nav />
        <br/>
        <Switch>
            <Route exact path= {(process.env.PUBLIC_URL || "/")+"/"} component={Home} />
            <Route exact path= {(process.env.PUBLIC_URL || "/")+"/work"} component={WorkPage} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
