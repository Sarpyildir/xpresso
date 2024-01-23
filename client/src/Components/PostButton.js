import * as React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function PostButton(props) {
  if (props.type.toLowerCase() === "post") {
    return (
      <Button
        onClick={props.onClick}
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        sx={{
          borderRadius: "5px",
          height: "40px",
          color: "#783F0B",
          backgroundColor: "#27C101",
          fontWeight: "bolder",
          "&:hover": {
            backgroundColor: "#27C101",
          },
        }}
      >
        {props.text}
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        sx={{
          borderRadius: "5px",
          color: "#FFF8EA",
          backgroundColor: "#9E7676",
          fontWeight: "bolder",
          "&:hover": {
            backgroundColor: "#9E7676",
          },
        }}
      >
        {props.text}
      </Button>
    );
  }
}
