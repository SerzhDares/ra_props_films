import React from "react";
import Star from "./Star";
import "../App.css";

const { v1: uuidv1 } = require('uuid');

type Props = {
  count: number;
}

export default function Stars({count = 0}: Props) {

  if (count < 1 || count > 5) {
    return;
  }
  
  return (
    <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map(() => (
          <Star key={uuidv1()}/>
        ))}
    </ul>
  )
}
