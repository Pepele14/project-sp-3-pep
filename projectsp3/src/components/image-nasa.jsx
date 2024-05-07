import axios from "axios";
import { useState, useEffect } from "react";
import { apiKey } from "../../configs";

const API_URL = "https://api.nasa.gov/planetary/apod?";

function ImageNasa() {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [imageDate, setImageDate] = useState(null);
  const [imageDetails, setImageDetails] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            api_key: apiKey.key,
          },
        });

        setImageUrl(response.data.url);
        setImageTitle(response.data.title);
        setImageDate(response.data.date);
        setImageDetails(response.data.explanation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncatedExplanation = imageDetails ? imageDetails.slice(0, 100) : " ";

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={{ position: "relative" }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="NASA"
          style={{
            width: "99.4%",
            height: "91.1vh",
            objectFit: "cover",
            margin: "4px 4px",
          }}
        />
      )}
      {imageTitle && (
        <h2
          style={{
            position: "absolute",
            bottom: "90px",
            bottom: showMore ? "360px" : "90px", // Adjust bottom position when showMore is true
            left: "20px",
            color: "white",
            zIndex: 1,
          }}
        >
          {imageTitle}
        </h2>
      )}
      {!showMore && (
        <div style={{ position: "relative" }}>
          <p
            style={{
              color: "white",
              position: "absolute",
              zIndex: 1,
              bottom: "10px",
              left: "20px",
              right: "30%",
            }}
          >
            {truncatedExplanation}...
          </p>
          <button
            onClick={toggleShowMore}
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              position: "absolute",
              bottom: "0px",
              left: "20px",
              padding: "0px",
              zIndex: 1,
            }}
          >
            Learn More
          </button>
        </div>
      )}
      {showMore && (
        <div>
          <p
            style={{
              color: "white",
              position: "absolute",
              zIndex: 1,
              bottom: "50px",
              left: "20px",
              right: "30%",
            }}
          >
            {imageDetails}
          </p>
          <button
            onClick={toggleShowMore}
            style={{
              color: "white",
              backgroundColor: "transparent",
              border: "none",
              position: "absolute",
              bottom: "40px",
              left: "20px",
              padding: "0px",
              color: "red",
              zIndex: 1,
            }}
          >
            Show Less
          </button>
        </div>
      )}

      {imageDate && (
        <p
          style={{
            position: "absolute",
            bottom: "120px",
            bottom: showMore ? "330px" : "60px", // Adjust bottom position when showMore is true
            left: "20px",
            color: "white",
            zIndex: 1,
          }}
        >
          {imageDate}
        </p>
      )}
    </div>
  );
}

export default ImageNasa;
