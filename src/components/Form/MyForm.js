import React, { useState } from "react";
import { Col, Row } from "react-materialize";
import "../../App.css";
const MyForm = (props) => {
  const [food, setfood] = useState("");

  return (
    <div className="container ">
      <Row>
        <Col s={9} m={10} l={10}>
          <form>
            <input placeholder="Search Recipe" className="white-text"></input>
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
