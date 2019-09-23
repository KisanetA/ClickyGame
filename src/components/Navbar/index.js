import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div id="left">
      <nav class="navbar navbar-expand-lg navbar-light bg-lightnavba" id="top">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" >
              <a class="nav-link" id="me" href="/">Clicky Game <span class="sr-only">(current)</span></a>
            </li>

            <span class="navbar-text" id="me">
              Click an Image to Begin!
              </span>

            <span class="navbar-text" id="me">
              <div className="scores">
                Score: {props.score} Top Score: {props.topscore}
              </div>
              </span>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
