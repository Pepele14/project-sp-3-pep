import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import email from "../assets/email.png";
import user from "../assets/user.png";
import camera from "../assets/camera.png";
import defaultProfileImage from "../assets/profile-user.png";
import "./username-email.css";

const API_URL = "https://json-server-be.adaptable.app";

function UserNameEmailForm() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [lastSubmittedUsername, setLastSubmittedUsername] = useState("");
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const [profileImage, setProfileImage] = useState(null); // State for selected profile image

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API to display the last submitted information
    axios
      .get(`${API_URL}/profile`)
      .then((response) => {
        const lastEntry = response.data[response.data.length - 1];
        if (lastEntry) {
          setLastSubmittedUsername(lastEntry.username);
          setLastSubmittedEmail(lastEntry.email);
          setUserId(lastEntry.id);
          // Optionally, you can also fetch and set the profile image here if available
        }
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array to run only once on component mount

  const handleSubmit = (e) => {
    e.preventDefault();

    const newText = e.target.username.value;
    const newDescription = e.target.email.value;
    setText(newText);
    setDescription(newDescription);

    const requestBody = { username: newText, email: newDescription };
    axios
      .post(`${API_URL}/profile`, requestBody)
      .then((response) => {
        setLastSubmittedUsername(newText);
        setLastSubmittedEmail(newDescription);
        setUserId(response.data.id);
        navigate(`/profile/${response.data.id}`);
        console.log("posted successfully");
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    // Delete the last entry from the API
    axios
      .delete(`${API_URL}/profile/${userId}`)
      .then((response) => {
        console.log("Deleted successfully");
        setLastSubmittedUsername("");
        setLastSubmittedEmail("");
        setUserId(null);
        setProfileImage(null);
        navigate(`/profile`);
      })
      .catch((error) => console.log(error));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProfileImage(selectedImage);
  };

  return (
    <div className="CreateProfilePage">
      <div className="card">
        <div
          className=".c"
          style={{
            border: "2px solid black",
            width: "calc(600px - 4px)", // Half width minus border width and spacing
            margin: "2px",
            boxSizing: "border-box",
            overflow: "hidden",
            background: "black",
            borderRadius: "6px",
          }}
        >
          <h3>Profile Details</h3>
        </div>
        {lastSubmittedUsername && (
          <div className="last-submitted-info">
            <div className="the-cool-div">
              <div className="profile-image-container">
                <img
                  height={"50px"}
                  width={"50px"}
                  border-radius="50%"
                  src={
                    profileImage
                      ? URL.createObjectURL(profileImage)
                      : defaultProfileImage
                  }
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <p>{lastSubmittedUsername}</p>
              <p>{lastSubmittedEmail}</p>
            </div>

            <button onClick={handleDelete} className="deleteButton">
              Delete
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <label>
                <img src={user} alt="User Icon" />
              </label>
              <input
                className="usernameInput"
                placeholder="Username"
                type="text"
                name="username"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="input">
              <label>
                <img src={email} alt="Email Icon" />
              </label>
              <input
                className="emailInput"
                placeholder="Email"
                type="text"
                name="email"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="picture-input">
              <label>
                <img src={camera} alt="Camera Icon" />
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="submit-container">
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserNameEmailForm;
