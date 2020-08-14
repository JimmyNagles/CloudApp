import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import MyNav from "./components/Nav/MyNav";
import { Button, Container, Row } from "react-materialize";
import MyForm from "./components/Form/MyForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Home } from "./Pages/Home";
import { Notes } from "./Pages/Notes";
import { NewNotes } from "./Pages/NewNotes";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <animated.div className="backg">
      <Router>
        <MyNav></MyNav>
        <AmplifySignOut />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/newnotes" component={NewNotes} />
        </Switch>
      </Router>
    </animated.div>
  );
}

export default withAuthenticator(App);
