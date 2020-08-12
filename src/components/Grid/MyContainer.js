import React from "react";
import { Container } from "react-materialize";

const MyContainer = (props) => {
  return (
    <div>
      <Container className={props.clase}>{props.children}</Container>
    </div>
  );
};

export default MyContainer;
