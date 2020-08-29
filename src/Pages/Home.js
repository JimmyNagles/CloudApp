import React from "react";
import { Container } from "react-materialize";

import Typical from "react-typical";
export const Home = () => {
  return (
    <div
      style={{

        height:"80vh",
        display: "flex",

        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="card-panel orange white-text">
        <h1>
          {" "}
          <Typical
            steps={[
              "Welcome Journal!",
              2000,
              "A place to...",
              1000,
              "Leave your thoughts.",
              2000,
              "Clear your mind.",
              3000,
              "A place to find...",
              3000,
              "Inner Peace.",
              4000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
      </Container>
    </div>
  );
};
