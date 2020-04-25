import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron>
        <h1>Google Books Search</h1>
        <h4>Search for and save books!</h4>
      </Jumbotron>
      {/* <Books /> */}
      <Saved/>
    </div>
  );
}

export default App;
