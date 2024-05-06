import axios from "axios";
import { useState, useEffect } from "react";
import youtubeIcon from "../assets/youtube.png";
import upcomingLogo from "../assets/logo-upcoming-nasa.png";

const API_URL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/";

function LaunchesData() {
  const [launches, setLaunches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);

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
        {launches.map((launch, index) => (
          <div className="col-md-6" key={index}>
            <div className="card my-2" style={{ background: "black" }}>
              <div
                className="card-body"
                style={{ color: "white", height: "150px" }}
              >
                <h6 className="card-title">
                  <b>{launch.name}</b>
                </h6>
                <p className="card-text">{launch.window_start}</p>
                <img
                  src={youtubeIcon}
                  alt="YouTube Icon"
                  className="youtube-icon"
                  height={"30px"}
                  width={"30px"}
                  onClick={() => window.open(launch.vid_urls[0].url, "_blank")}
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
