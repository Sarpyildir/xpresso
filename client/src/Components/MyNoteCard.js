import React from "react";
import PostButton from "./PostButton.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function MyNoteCard(props) {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFF8EA",
    borderRadius: "20px",
    padding: "20px",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "row", // Set the direction to row
    alignItems: "center", // Align items vertically
    justifyContent: "space-between", // Space between content and button
    width: "100%",
  };

  const textContentStyle = {
    flex: "1",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    marginRight: "20px",
    color: "black",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "black",
    marginBottom: "15px",
    marginRight: "20px",
  };

  const profilePictureStyle = {
    borderRadius: "50%",
    marginRight: "20px",
    width: "50px",
    height: "50px",
  };
  const navigate = useNavigate();
  var shortDescription = props.description;
  if (props.description.length > 260) {
    shortDescription = props.description.substring(0, 260) + "...";
  }

  const handleEditClick = () => {
    navigate(`/editnote/${props._id}`);
  };
  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/deleteNote?noteId=${props._id}`
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting note:", error);
      throw error;
    }
  };
  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <div style={textContentStyle}>
          <div style={titleStyle}>{props.title}</div>
          <div style={descriptionStyle}>{shortDescription}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <PostButton text="edit" type="edit" onClick={handleEditClick} />
          <PostButton text="delete" type="delete" onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  );
}

export default MyNoteCard;
