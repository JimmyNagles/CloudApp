import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";
import MyNav from "./components/Nav/MyNav";
import { Button } from "react-materialize";
import MySettings from "./components/Nav/MySettings";
import MyForm from "./components/Form/MyForm";
import { MyCard } from "./components/Card/MyCard";
import API from "./utils/API";
function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const [isFriends, setFriends] = useState(false);

  const navAni = useSpring({
    transform: isNavOpen
      ? "translate3d(0,0,0) scale(1)"
      : "translate3d(100%,0,0) scale(0.3)",
  });

  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  const SearchFood = (query) => {
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_SPOON);

    SearchFood(search);
    console.log("result", result);
    setSearch("");
  };

  return (
    <animated.div className="backg">
      <MyForm
        value={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      >
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
