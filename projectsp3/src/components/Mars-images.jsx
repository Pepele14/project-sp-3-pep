import axios from "axios";
import { useState, useEffect } from "react";
import { apiKey } from "../../configs";
import marsExpLogo from "../assets/logo-mars.png";

const API_URL =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

function MarsImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            sol: "1000",
            api_key: apiKey.key,
          },
        });

        const formattedImages = response.data.photos
          .slice(0, 8)
          .map((photo) => ({
            url: photo.img_src,
            rover: photo.rover.name,
            date: photo.earth_date,
          }));

        setImages(formattedImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          border: "2px solid black",
          width: "calc(100% - 8px)", // 25% width minus border and spacing
          margin: "4px",
          boxSizing: "border-box",
          overflow: "hidden",
          textAlign: "center",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <img
          src={marsExpLogo}
          alt="Logo"
          style={{ width: "20%", height: "auto" }}
        ></img>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            border: "2px solid black",
            width: "calc(25% - 8px)", // 25% width minus border and spacing
            margin: "4px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <img
            src={image.url}
            alt={`Mars image taken by ${image.rover} on ${image.date}`}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{ padding: "5px", backgroundColor: "black", color: "white" }}
          >
            <p>Rover: {image.rover}</p>
            <p>Date: {image.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarsImages;
