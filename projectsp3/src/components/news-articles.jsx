import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

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
    <div className="container">
      <div className="row">
        <h3>News</h3>
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card my-2">
              <img
                src={article.imageUrl}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.publishedAt}</p>
                <a href={article.url} className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsArticles;
