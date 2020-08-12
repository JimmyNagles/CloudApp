import React, { useState } from "react";
import { Col, Row } from "react-materialize";

const MyForm = (props) => {
  const [food, setfood] = useState("");

  return (
    <div className="container ">
      <Row>
        <Col s={6} m={6} l={6}>
          <form>
            <input></input>
          </form>
        </Col>
        <Col s={6} m={6} l={6}>
          <div className="right"> {props.children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default MyForm;
