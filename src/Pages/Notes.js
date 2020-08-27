import React, { useState, useEffect } from "react";
import { Container } from "react-materialize";
import { API } from "aws-amplify";
import { listNotess } from "../graphql/queries";
import NotesCard from "../components/Card/NotesCard";

export const Notes = () => {
  const [allNotes, setAllNotes] = useState([]);

  const [x, setx] = useState("hello world");

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotess });
    setAllNotes(apiData.data.listNotess.items);
  }

  // [1, 2, 3, 4, 5].map(a => {
  // if (a % 2) {
  //   return a + 2
  // }
  // else return
  //
  // });

  // [1, 2, 3, 4, 5].map(a => a + 2);

  return (
    <div>
      <Container className="red-text">
        {allNotes.map(({ id, date, mood, text }) => {
          return (
            <NotesCard key={id} id={id} text={text} mood={mood} date={date} />
            // <ul>

            //   <li>{id}</li>
            //   <li>{date}</li>
            //   <li>{mood}</li>
            //   <li>{text}</li>
            // </ul>
          );
          console.log("x", x.id);
          console.log("x", x.date);
          console.log("x", x.mood);
          console.log("x", x.text);
          {
            /* <h2 key={x.id}></h2> */
          }
        })}
      </Container>
    </div>
  );
};
