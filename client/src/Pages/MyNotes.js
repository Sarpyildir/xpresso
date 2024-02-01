import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import SearchBar from "../Components/SearchBar.js";
import PostButton from "../Components/PostButton.js";
import MyNoteCard from "../Components/MyNoteCard.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { fetchUser } from "../utils/fetchUser.js";
import { fetchMyNotes } from "../utils/fetchNote.js";
import axios from "axios";

const MyNotes = () => {
  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontSize: "1rem",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: "1rem",
    boxSizing: "border-box",
    color: "#FFF8EA",
    backgroundColor: "#783F0B",
  };

  const contentContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column", // This will layout the children (text and image containers) in a row
    justifyContent: "space-around", // This centers the children in the container
    alignItems: "center", // This aligns the children vertically at the center
    maxWidth: "1200px", // Adjust the max width as needed
    margin: "0 auto", // This centers the container itself within the outer div
    padding: "1rem 1rem 0 1rem",
    boxSizing: "border-box",
    width: "100%",
  };
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    // Fetch the user data
    const userString = sessionStorage.getItem("user");
    const sessionUser = JSON.parse(userString);
    const userEmail = sessionUser.email;
    fetchUser(userEmail)
      .then((userData) => {
        setUser(userData.data);
      })
      .catch((error) => {
        console.error("Failed to fetch user:", error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      fetchMyNotes(user._id)
        .then((noteData) => {
          setNotes(noteData.data);
        })
        .catch((error) => {
          console.error("Failed to fetch notes:", error);
        });
    }
  }, [user]); // This useEffect runs whenever the 'user' state changes
  useEffect(() => {
    if (searchQuery.trim() === "" && user) {
      fetchMyNotes(user._id)
        .then((noteData) => {
          setNotes(noteData.data);
        })
        .catch((error) => {
          console.error("Failed to fetch blogs:", error);
        });
    } else {
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setNotes(filteredNotes);
    }
  }, [searchQuery]); // Dependency on searchQuery

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handlePost = () => {
    if (!noteTitle.trim() || !noteDescription.trim()) {
      alert("Please fill all the fields");
    } else {
      axios
        .post("http://localhost:5000/api/note/postNote", {
          title: noteTitle,
          description: noteDescription,
          postedBy: user._id,
        })
        .then((res) => {
          setOpen(false);
          setNoteTitle("");
          setNoteDescription("");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={containerStyle}>
      <Header title="MY NOTES" />
      <div style={contentStyle}>
        <div style={contentContainerStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "40px",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            <SearchBar onSearchChange={(e) => setSearchQuery(e.target.value)} />
            <PostButton text="post" type="post" onClick={handleClickOpen} />
          </div>
          {notes.map((note, index) => (
            <MyNoteCard
              key={index}
              _id={note._id}
              title={note.title}
              description={note.description}
            />
          ))}
        </div>
      </div>
      <Footer />
      <Dialog
        open={open}
        onClose={handleClickClose}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle>Post Your Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title of Note"
            type="text"
            fullWidth
            variant="standard"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={7}
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handlePost}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyNotes;
