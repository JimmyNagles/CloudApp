import React, { useState, useEffect } from "react";
import { Col, Row, TextInput, Textarea, Button } from "react-materialize";
import "../../App.css";
import { API } from "aws-amplify";
import { listNotess } from "../../graphql/queries";
import { createNotes as createNoteMutation } from "../../graphql/mutations";
import { Link } from "react-router-dom";
const MyForm = (props) => {
  const initialFormState = {
    date: "",
    music: "",
    mood: "",
    text: "",
  };

  const [Notes, SetNote] = useState(initialFormState);

  const HandleChange = (event) => {
    const { name, value } = event.target;

    SetNote({
      ...Notes,
      [name]: value,
    });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    const data = { ...Notes };

    API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
  };
  return (
    <div>
      <TextInput
        onChange={HandleChange}
        value={Notes.date}
        name="date"
        className="orange-text"
      >
        <h6 className="orange-text"> date </h6>
      </TextInput>
      {/* <TextInput
        onChange={HandleChange}
        value={Notes.location}
        name="location"
        className="orange-text"
      >
        <h6 className="orange-text"> location</h6>
      </TextInput> */}

      <TextInput
        onChange={HandleChange}
        value={Notes.music}
        name="music"
        className="orange-text"
      >
        <h6 className="orange-text"> music: Song-Artist </h6>
      </TextInput>
      <TextInput
        onChange={HandleChange}
        value={Notes.mood}
        name="mood"
        className="orange-text"
      >
        <h6 className="orange-text">mood: from 1-10 </h6>
      </TextInput>

      <Textarea
        onChange={HandleChange}
        placeholder={"type here"}
        value={Notes.text}
        name="text"
        className="orange-text"
        style={{ height: "200px" }}
        id="Textarea-12"
        l={12}
        m={12}
        s={12}
        xl={12}
      ></Textarea>

      <Button
        className="btn-flat orange-text transparent"
        disabled={!(Notes.text && Notes.mood)}
        onClick={HandleSubmit}
      >
        <Link disabled={!(Notes.text && Notes.mood)} to="/notes">
          <h7 className="orange-text">submit</h7>
        </Link>
      </Button>
    </div>
  );
};

export default MyForm;
