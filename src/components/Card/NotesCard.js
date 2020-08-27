import React from "react";

function NotesCard(props) {
  return (
    <div className="col s6 m3 l4 ">
      <div className="card small transparent  ">
        <div className=" card-image grey darken-4">
          <span className="card-title red-text darken-4">{props.id}</span>
        </div>

        <div className="card-content">
          <p className="orange-text">{props.mood}</p>
          <p className="orange-text">{props.text}</p>
        </div>

        <div className="card-action">
          <a className="">
          {props.date}
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
