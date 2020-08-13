import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";
import MyNav from "./components/Nav/MyNav";
import { Button } from "react-materialize";
import MySettings from "./components/Nav/MySettings";
import MyForm from "./components/Form/MyForm";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const [isFriends, setFriends] = useState(false);

  const navAni = useSpring({
    transform: isNavOpen
      ? "translate3d(0,0,0) scale(1)"
      : "translate3d(100%,0,0) scale(0.3)",
  });

  console.log(
    "process.env.REACT_APP_SPOON_KEY",
    process.env.REACT_APP_SPOON_KEY
  );

  return (
    <animated.div className="backg">
      <MyForm>
        <Button
          large
          className="btn-flat transparent white-text"
          onClick={() => {
            setNavOpen(!isNavOpen);
          }}
        >
          Menu
        </Button>
      </MyForm>

      <MyNav style={navAni} />
    </animated.div>
  );
}

export default App;
