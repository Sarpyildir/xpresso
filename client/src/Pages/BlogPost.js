import React from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../utils/fetchBlog.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import PostButton from "../Components/PostButton.js";

const BlogPost = (props) => {
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
    display: "grid",
    gridTemplateRows: "auto auto auto 1fr auto",
    maxWidth: "1200px",
    padding: "1rem 1rem 0 1rem",
    boxSizing: "border-box",
    backgroundColor: "#FFF8EA",
    borderRadius: "20px",
    color: "#594545",
    padding: "2rem 4rem 2rem 2rem",
    margin: "auto auto",
  };

  const backButtonContainerStyle = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    display: "flex",
    justifyContent: "flex-end",
  };
  const profilePictureStyle = {
    borderRadius: "50%",
    marginRight: "20px",
    width: "50px",
    height: "50px",
    gridColumnStart: "1",
    gridColumnEnd: "2",
  };
  const { blogId } = useParams();
  const blogData = fetchBlogById(blogId);
  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <div style={contentContainerStyle}>
          <p
            style={{
              textAlign: "right",
              fontSize: "1rem",
              gridColumnStart: "2",
              gridColumnEnd: "3",
            }}
          >
            Date of Publish: _ _ / _ _ / _ _
          </p>
          <p
            style={{
              fontSize: "2rem",
              margin: "0",
              gridColumnStart: "2",
              gridColumnEnd: "3",
            }}
          >
            Title
          </p>

          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Profile"
            style={profilePictureStyle}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                margin: "0",
                gridColumnStart: "2",
                gridColumnEnd: "3",
              }}
            >
              Username:
            </p>
            <p
              style={{
                fontSize: "1rem",
                margin: "0",
                gridColumnStart: "2",
                gridColumnEnd: "3",
              }}
            >
              Email:
            </p>
          </div>
          <p
            style={{
              fontSize: "1rem",
              gridColumnStart: "2",
              gridColumnEnd: "3",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            convallis consequat ex, sit amet ornare leo volutpat non. Phasellus
            fringilla tempus fringilla. Quisque maximus libero vitae malesuada
            vehicula. Proin justo risus, tincidunt non sollicitudin vitae,
            consectetur elementum metus. Vestibulum euismod porttitor quam, id
            molestie odio egestas a. Curabitur luctus dignissim nulla, nec
            consectetur enim venenatis vel. Sed condimentum mi felis, nec
            tristique nisl dictum et. Nullam auctor facilisis lectus, a lacinia
            felis tristique tristique. Proin nunc nibh, placerat quis nisl id,
            euismod elementum nisl. Sed at erat vel erat placerat imperdiet in
            non quam. Sed aliquam rutrum mauris ac finibus. Quisque suscipit
            velit in ante aliquam vulputate. Donec congue lacus et purus
            ultrices, vitae maximus mauris dapibus. Aliquam erat volutpat. Duis
            facilisis sapien eget auctor ullamcorper. Nulla porttitor ultrices
            elit, sed ullamcorper metus pretium quis. Integer vulputate nisl non
            tristique iaculis. Etiam id tincidunt tortor. Nullam in commodo
            felis. Cras tempor neque quis sapien pulvinar tristique. Nulla eu
            diam gravida ex efficitur scelerisque at sit amet nunc. Curabitur
            non est ut ipsum sodales mollis. Etiam quis feugiat turpis, a
            accumsan est. Suspendisse euismod, ligula id vulputate congue, elit
            dolor consectetur est, in blandit ligula massa eu dui. Nulla vitae
            facilisis odio, eu tempor orci. Duis tempor molestie urna nec
            tristique. Nullam tempus eros a nunc interdum sagittis. Nunc ut
            dolor rhoncus, sollicitudin odio rutrum, consequat libero. Nulla ac
            feugiat neque. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris convallis consequat ex, sit amet ornare leo volutpat
            non. Phasellus fringilla tempus fringilla. Quisque maximus libero
            vitae malesuada vehicula. Proin justo risus, tincidunt non
            sollicitudin vitae, consectetur elementum metus. Vestibulum euismod
            porttitor quam, id molestie odio egestas a. Curabitur luctus
            dignissim nulla, nec consectetur enim venenatis vel. Sed condimentum
            mi felis, nec tristique nisl dictum et. Nullam auctor facilisis
            lectus, a lacinia felis tristique tristique. Proin nunc nibh,
            placerat quis nisl id, euismod elementum nisl. Sed at erat vel erat
            placerat imperdiet in non quam. Sed aliquam rutrum mauris ac
            finibus. Quisque suscipit velit in ante aliquam vulputate. Donec
            congue lacus et purus ultrices, vitae maximus mauris dapibus.
            Aliquam erat volutpat. Duis facilisis sapien eget auctor
            ullamcorper. Nulla porttitor ultrices elit, sed ullamcorper metus
            pretium quis. Integer vulputate nisl non tristique iaculis. Etiam id
            tincidunt tortor. Nullam in commodo felis. Cras tempor neque quis
            sapien pulvinar tristique. Nulla eu diam gravida ex efficitur
            scelerisque at sit amet nunc. Curabitur non est ut ipsum sodales
            mollis. Etiam quis feugiat turpis, a accumsan est. Suspendisse
            euismod, ligula id vulputate congue, elit dolor consectetur est, in
            blandit ligula massa eu dui. Nulla vitae facilisis odio, eu tempor
            orci. Duis tempor molestie urna nec tristique. Nullam tempus eros a
            nunc interdum sagittis. Nunc ut dolor rhoncus, sollicitudin odio
            rutrum, consequat libero. Nulla ac feugiat neque.
          </p>
          <div style={backButtonContainerStyle}>
            <PostButton type="read" text="back" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
