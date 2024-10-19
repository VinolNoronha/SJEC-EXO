import { useEffect, useState } from "react";
import styles from "./top5stocks.module.css";

const StocksComponent = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const KEY = "cs90j1pr01qu0vk4jg60cs90j1pr01qu0vk4jg6g"; // Replace with your Finnhub API key

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // List of stock tickers to fetch
        const tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "NFLX"];
        const stockData = await Promise.all(
          tickers.map(async (ticker) => {
            const response = await fetch(
              `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${KEY}`
            );
            const data = await response.json();
            console.log(data);
            return {
              symbol: ticker,
              ...data,
              imageUrl: `https://finnhub.io/api/logo?symbol=${ticker}&token=${KEY}`, // Get the logo URL
            };
          })
        );
        setStocks(stockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the stocks:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load stocks.</div>;
  }

  return (
    <div className={styles.stockscontainer}>
      {stocks.map((stock, index) => (
        <div key={index} className={styles.stocksbox}>
          <img
            src={stock.imageUrl}
            alt={`${stock.symbol} logo`}
            className={styles.stockImage}
          />
          <h1 className={styles.stocktitle}>{stock.symbol}</h1>
          <p>Current Price: ${stock.c}</p>
          <p>Open Price: {stock.o || "N/A"}</p>
          <p>High Price: ${stock.h || "N/A"}</p>
        </div>
      ))}
    </div>
  );
};

export default StocksComponent;
