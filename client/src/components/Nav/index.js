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
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      </Link>
      <Link to="booksearch">
      <h1 className = "nav-item" style={navStyle}>Search</h1>
      </Link>
      <h1> | </h1>
      <Link to="saved">
      <h1 className = "nav-item" style={navStyle}>Saved</h1>
      </Link>
    </nav>
  );
}

export default Nav;
