import * as React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function PostButton() {
  return (
    <Button
      variant="contained"
      endIcon={<AddCircleOutlineIcon />}
      sx={{
        borderRadius: "5px",
        color: "#783F0B",
        backgroundColor: "#27C101",
        fontWeight: "bold",
      }}
    >
      Post
    </Button>
  );
}
