import React from "react";
import { useSpring, animated } from "react-spring";
import "../../App.css";
const MyNav = ({ style }) => {
  return (
    <animated.div style={style}>
      <nav className="navbar">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Search</a>
      </nav>
    </animated.div>
  );
};

export default MyNav;
