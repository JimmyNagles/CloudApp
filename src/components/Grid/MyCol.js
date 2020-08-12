import React from "react";
import { Col } from "react-materialize";
const MyCol = (props) => {
  return (
    <div>
      <Col className={props.clase}>{props.children}</Col>
    </div>
  );
};

export default MyCol;
