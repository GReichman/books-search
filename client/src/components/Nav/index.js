import React from "react";
import {Link} from "react-router-dom";

const navStyle = {
  color: 'white',
  marginLeft: "10px",
  marginRight: "10px"
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/">
      <h1 className="navbar-brand">
        Google Book Search
      </h1>
      </Link>
      <Link to="booksearch">
      <h3 className = "nav-item" style={navStyle}>Search</h3>
      </Link>
      <h1> | </h1>
      <Link to="saved">
      <h3 className = "nav-item" style={navStyle}>Saved</h3>
      </Link>
    </nav>
  );
}

export default Nav;
