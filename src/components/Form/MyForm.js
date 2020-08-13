import React, { useState, useEffect } from "react";
import { Col, Row } from "react-materialize";
import "../../App.css";
import API from "../../utils/API.js";

const MyForm = (props) => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  const SearchFood = (query) => {
    API.search(query)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    SearchFood("");
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    SearchFood(search);
    setSearch("");
  };

  return (
    <div className="container ">
      <Row>
        <Col s={9} m={10} l={10}>
          <form>
            <input
              onChange={handleInputChange}
              value={search}
              placeholder="Search Recipe"
              className="white-text"
              type="text"
              onSubmit={handleFormSubmit}
            ></input>
          </form>
        </Col>
        <Col s={3} m={2} l={2}>
          <div className="right"> {props.children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default MyForm;
