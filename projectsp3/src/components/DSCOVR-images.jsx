import axios from "axios";
import { useState, useEffect } from "react";
import { apiKey } from "../../configs";

const API_URL = "https://api.nasa.gov/EPIC/api/natural/images";

function DSCOVRImages() {
  //   const [imageUrl, setImageUrl] = useState(null);
  const [imageDate, setImageDate] = useState(null);
  //   const [imageCaption, setImageCaption] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: apiKey.key,
          },
        });

        const formattedImages = response.data.slice(0, 2).map((imageData) => ({
          url: `https://epic.gsfc.nasa.gov/archive/natural/${imageData.date
            .replace(/-/g, "/")
            .slice(0, 10)
            .split("-")
            .join("/")}/png/${imageData.image}.png`,
          caption: imageData.caption,
          date: imageData.date,
          coordinates: imageData.coords.centroid_coordinates,
        }));

        setImages(formattedImages);
        //console.log(images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            border: "2px solid black",
            width: "calc(50% - 4px)", // Half width minus border width
            margin: "2px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <img
            src={image.url}
            alt={image.caption}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              left: "5px",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px",
            }}
          >
            <p>Date: {image.date}</p>
            <p>Latitude: {image.coordinates.lat}</p>
            <p>Longitude: {image.coordinates.lon}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DSCOVRImages;
