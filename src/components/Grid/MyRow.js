import React from "react";
import { Row } from "react-materialize";

const MyRow = (props) => {
  return (
    <div>
      <Row className={props.clase}> {props.children} </Row>
    </div>
  );
};

export default MyRow;
