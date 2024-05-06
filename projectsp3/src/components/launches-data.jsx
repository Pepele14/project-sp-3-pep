import axios from "axios";
import { useState, useEffect } from "react";
import youtubeIcon from "../assets/youtube.png";
import upcomingLogo from "../assets/logo-upcoming-nasa.png";

const API_URL = "https://ll.thespacedevs.com/2.2.0/event/upcoming/";

function LaunchesData() {
  const [launches, setLaunches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {});

        if (response.data.results) {
          setLaunches(response.data.results);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div style={{ textAlign: "center" }}>
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
              src={upcomingLogo}
              alt="Logo"
              style={{ width: "25%", height: "auto" }}
            ></img>
          </div>
        </div>
        <h6></h6>
        {launches.map((launch, index) => (
          <div className="col-md-4" key={index}>
            <div className="card my-2" style={{ background: "black" }}>
              <div className="card-body" style={{ color: "white" }}>
                {/* <h5 className="card-title">{launch.name}</h5> */}
                <h6 className="card-title">
                  <b>{launch.name}</b>
                </h6>
                <h6 className="card-title">{launch.description}</h6>
                <p className="card-text">{launch.date}</p>
                <img
                  src={youtubeIcon}
                  alt="YouTube Icon"
                  className="youtube-icon"
                  height={"30px"}
                  width={"30px"}
                  onClick={() => window.open(launch.video_url, "_blank")}
                />{" "}
                Live
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LaunchesData;
