import React, { Children } from "react";
import { useSpring, animated } from "react-spring";
import "../../App.css";
const MyNav = ({ style }) => {
  return (
    <animated.div style={style}>
      <nav className="orange">
        <div className="row">
          <a className="col s4 m4 l4 center" href="/">
            Home
          </a>
          <a className="col s4 m4 l4 center" href="/notes">
            Notes
          </a>
          <a className="col s4 m4 l4 center" href="/newnotes">
            Create
          </a>
        </div>
      </nav>
    </animated.div>
  );
};

export default MyNav;
