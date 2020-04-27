import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron>
          <h1>Google Books Search</h1>
          <h4>Search for and save books!</h4>
        </Jumbotron>
      <Switch>
      <Route path="/booksearch" component={Books}/>
      <Route path="/saved" component={Saved}/>
      <Route path="/" component={Home}/>
        {/* <Books /> */}
        <Saved />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
