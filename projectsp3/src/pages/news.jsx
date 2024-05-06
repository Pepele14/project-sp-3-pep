import Header from "../components/header";
import Footer from "../components/footer";
import NewsSites from "../components/news-sites";
import NewsArticles from "../components/news-articles";

function News() {
  return (
    <div>
      <Header />
      <NewsArticles />
      <NewsSites />
      <Footer />
    </div>
  );
}

export default News;
