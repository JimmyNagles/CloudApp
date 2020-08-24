import React, { useState, useEffect } from "react";
import { Col, Row, TextInput, Textarea, Button } from "react-materialize";
import "../../App.css";
const MyForm = (props) => {
  const [allNotes, setAllNotes] = useState([]);

  const [Notes, SetNotes] = useState({
    Date: "",
    Location: "",
    Music: "",
    Mood: "",
    Text: "",
  });

  const HandleChange = (event) => {
    const { name, value } = event.target;

    SetNotes({
      ...Notes,
      [name]: value,
    });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    const { Location, Music, Mood, Text } = Notes;
  };
  return (
    <div>
      <TextInput
        onChange={HandleChange}
        value={Notes.Date}
        name="Date"
        className="orange-text"
      >
        <h6 className="orange-text"> Date </h6>
      </TextInput>
      <TextInput
        onChange={HandleChange}
        value={Notes.Location}
        name="Location"
        className="orange-text"
      >
        <h6 className="orange-text"> Location</h6>
      </TextInput>

      <TextInput
        onChange={HandleChange}
        value={Notes.Music}
        name="Music"
        className="orange-text"
      >
        <h6 className="orange-text"> Music: Song-Artist </h6>
      </TextInput>
      <TextInput
        onChange={HandleChange}
        value={Notes.Mood}
        name="Mood"
        className="orange-text"
      >
        <h6 className="orange-text">Mood: from 1-10 </h6>
      </TextInput>

      <Textarea
        onChange={HandleChange}
        placeholder={"type here"}
        value={Notes.Text}
        name="Text"
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
        onClick={HandleSubmit}
      >
        submit
      </Button>
    </div>
  );
};

export default MyForm;
