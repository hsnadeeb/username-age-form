// src/components/Card.js
import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
