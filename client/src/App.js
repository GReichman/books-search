import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Nav />
      {/* <Books /> */}
      <Saved></Saved>
    </div>
  );
}

export default App;
