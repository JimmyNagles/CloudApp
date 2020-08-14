import React, { useState, useEffect } from "react";
import { Col, Row, TextInput, Textarea, Button } from "react-materialize";
import "../../App.css";
const MyForm = (props) => {
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
        Date
      </TextInput>
      <TextInput
        onChange={HandleChange}
        value={Notes.Location}
        name="Location"
        className="orange-text"
      >
        Location
      </TextInput>

      <TextInput
        onChange={HandleChange}
        value={Notes.Music}
        name="Music"
        className="orange-text"
      >
        Music: Song-Artist
      </TextInput>
      <TextInput
        onChange={HandleChange}
        value={Notes.Mood}
        name="Mood"
        className="orange-text"
      >
        Mood: from 1-10
      </TextInput>

      <Textarea
        onChange={HandleChange}
        value={Notes.Text}
        name="Text"
        className="orange-text"
        style={{ height: "200px" }}
        id="Textarea-12"
        l={12}
        m={12}
        s={12}
        xl={12}
      />

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
