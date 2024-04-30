import axios from "axios";
import { useState, useEffect } from "react";
import apiKey from "../../config";

const API_URL = "https://api.nasa.gov/planetary/apod?";

function Background() {
  const [imageUrl, setImageUrl] = useState(null);
  console.log(imageUrl);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: apiKey.key,
          },
        });

        setImageUrl(response.data.url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    getImage();
  }, []);

  return (
    imageUrl && (
      <div
        className="Background-Img"
        style={{ margin: "0", padding: "0", border: "0" }}
      >
        <img
          src={imageUrl}
          style={{
            backgroundImage: `url(${imageUrl})`,
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    )
  );
}

export default Background;
