import axios from "axios";
import { useState, useEffect } from "react";
import newsLogo from "../assets/logo-news.png";

const API_URL = "https://api.spaceflightnewsapi.net/v4/articles";

function NewsArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {});

        if (response.data.results) {
          setArticles(response.data.results);
          console.log("Response data:", response.data);
        } else {
          console.error("Unexpected data format:", response.data);
          console.log("Response data:", response.data);
        }
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
          src={newsLogo}
          alt="Logo"
          style={{ width: "25%", height: "auto" }}
        ></img>
      </div>
      {articles.map((article, index) => (
        <div
          key={index}
          style={{
            border: "2px solid black",
            width: "calc(50% - 4px)", // Half width minus border width and spacing
            margin: "2px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <img
            src={article.image_url}
            alt={article.title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{ padding: "5px", backgroundColor: "black", color: "white" }}
          >
            <p>
              <b>{article.title}</b>
            </p>
            <p>Published at: {article.published_at}</p>
            <p>{article.news_site}</p>
            <a href={article.url} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsArticles;
