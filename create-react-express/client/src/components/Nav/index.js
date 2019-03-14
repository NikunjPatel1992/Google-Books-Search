import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" >
      <a className="navbar-brand" href="/">
        Google Search
      </a>
      <a className="nav-item" href="/search">Search</a>
      <a className="nav-item" href="/savedBooks">Saved</a>
      

    </nav>
  );
}

export default Nav;
