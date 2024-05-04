import axios from "axios";
import { useState, useEffect } from "react";
import { apiKeySFNews } from "../../configs";

const API_URL = "https://spaceflight-news2.p.rapidapi.com/v3/info";

function NewsSites() {
  const [newsUrl, setNewsUrl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "X-RapidAPI-Key": apiKeySFNews.key,
            "X-RapidAPI-Host": "spaceflight-news2.p.rapidapi.com",
          },
        });

        // Check if response data is an array before setting state
        if (response.data && Array.isArray(response.data.newsSites)) {
          setNewsUrl(response.data.newsSites);
          console.log(response.data.newsSites);
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3>News Websites List</h3>
        {newsUrl.map((url, index) => (
          <div className="col-md-3" key={index}>
            <div className="card my-2">
              <div className="card-body">
                <p className="card-text">{url}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSites;
