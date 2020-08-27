import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNav from "./components/Nav/MyNav";
import { Home } from "./Pages/Home";
import { Notes } from "./Pages/Notes";
import { NewNotes } from "./Pages/NewNotes";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

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
