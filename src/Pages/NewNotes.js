import React from "react";
import { Container } from "react-materialize";
import MyForm from "../components/Form/MyForm";

export const NewNotes = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container>
        <br></br>
        <MyForm></MyForm>
      </Container>
    </div>
  );
};
