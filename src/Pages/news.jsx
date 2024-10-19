import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react"; // Import useEffect here
import styles from "./news.module.css";

function News() {
  // Capitalize the component name
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const KEY = "cs90j1pr01qu0vk4jg60cs90j1pr01qu0vk4jg6g";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/news?category=general&token=${KEY}`
        );

        // Check if the response is OK
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Set only the top 5 news articles
        setNews(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Make sure useEffect is imported

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load news.</div>;
  }

  return (
    <>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className={styles.newscontainer}>
        {news.map((article, index) => (
          <div key={index} className={styles.newsbox}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newslink}
            >
              <h1 className={styles.newstitle}>{article.headline}</h1>
            </a>
            <p className={styles.date}>
              {new Date(article.datetime * 1000).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default News; // Make sure the export is capitalized
