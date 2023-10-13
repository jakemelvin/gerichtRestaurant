import React from "react";
import { images } from "../../constants";
const SubHeading = (props) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{props.title}</p>
    <img src={images.spoon} alt="Image of A Spoon" />
  </div>
);

export default SubHeading;
