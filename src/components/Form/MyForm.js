import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-materialize";
import "../../App.css";

import RecipeCard from "../Card/RecipeCard";

const MyForm = (props) => {
  return (
    <div className="container ">
      <Row>
        <Col s={9} m={10} l={10}>
          <form>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              placeholder="Search Recipe"
              className="white-text"
              type="text"
            ></input>
            <a onClick={props.handleFormSubmit} className="btn-flat white-text transparent right ">
              Search
            </a>
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
