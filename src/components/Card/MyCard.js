import React from "react";
import { Card } from "react-materialize";

export const MyCard = (props) => {
  return (
    <div style={{ height: "100vh" , background:"green" }}>
      <Card className="red">{props.children}</Card>
    </div>
  );
};
