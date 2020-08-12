import React from "react";
import { useSpring, animated } from "react-spring";
import "../../App.css";
const MySettings = ({ style }) => {
  return (
    <animated.div style={style}>
      <nav className="navbar">
        <a>Sound</a>
        <a>Brightnes</a>
        <a>Privacy</a>
        <a>Change Password</a>
      </nav>
    </animated.div>
  );
};

export default MySettings;
