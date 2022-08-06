import React from "react";
import Slider from "../react-slider/Slider";
import { Typography } from "@material-ui/core";

const SingleBookGroup = ({ bookGroup }) => {
  return (
    <div>
      <Typography
        variant="h6"
        style={{ marginLeft: "1.5rem", fontFamily: "inherit" }}
      >
        {bookGroup.name}
      </Typography>
      <Slider books={bookGroup.data} />
    </div>
  );
};

export default SingleBookGroup;
