import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import MyNav from "./components/Nav/MyNav";
import { Button, Container, Row } from "react-materialize";
import MyForm from "./components/Form/MyForm";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const navAni = useSpring({
    transform: isNavOpen
      ? "translate3d(0,0,0) scale(1)"
      : "translate3d(100%,0,0) scale(0.3)",
  });

  return (
    <animated.div className="backg">
      <AmplifySignOut />
      <MyForm>
        <Button
          large
          className="btn-flat transparent white-text"
          onClick={() => {
            setNavOpen(!isNavOpen);
          }}
        >
          {" "}
          Menu
        </Button>
      </MyForm>

      <MyNav style={navAni} />
    </animated.div>
  );
}

export default withAuthenticator(App);
