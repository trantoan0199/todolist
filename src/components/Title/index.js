import React from "react";
import { Typography } from "@mui/material";

const Title = () => {
  return (
    <Typography
      component="h3"
      style={{
        fontSize: 30,
        color: "greenyellow",
        display: "flex",
        justifyContent: "center",
      }}
    >
      To Do List
    </Typography>
  );
};

Title.propTypes = {};

export default Title;
