import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import email from "../assets/email.png";
import user from "../assets/user.png";
import camera from "../assets/camera.png";
import defaultProfileImage from "../assets/profile-user.png";
import "./username-email.css";

const API_URL = "https://json-server-be.adaptable.app/profile";

function UserNameEmailForm() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [lastSubmittedUsername, setLastSubmittedUsername] = useState("");
  const [lastSubmittedEmail, setLastSubmittedEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null); // State for selected profile image

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newText = e.target.username.value;
    const newDescription = e.target.email.value;
    setText(newText);
    setDescription(newDescription);

    const requestBody = { username: newText, email: newDescription };
    axios
      .post(`${API_URL}`, requestBody)
      .then((response) => {
        setLastSubmittedUsername(newText);
        setLastSubmittedEmail(newDescription);
        navigate("/profile");
        console.log("posted successfully");
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
        <h3>Profile Information</h3>
        {lastSubmittedUsername && (
          <div className="last-submitted-info">
            <div className="profile-image-container">
              <img
                height={"50px"}
                width={"50px"}
                src={
                  profileImage
                    ? URL.createObjectURL(profileImage)
                    : defaultProfileImage
                }
                alt="Profile"
                className="profile-image"
              />
            </div>
            <p>Username: {lastSubmittedUsername}</p>
            <p>Email: {lastSubmittedEmail}</p>
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
