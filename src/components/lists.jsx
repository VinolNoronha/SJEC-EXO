// StockInfoComponent.jsx
import { useEffect, useState } from "react";
import styles from "./lists.module.css";
import { Link } from "react-router-dom";

const StockInfoComponent = ({ tkr }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetching stock data (adjust URL as necessary)
    const fetchStocks = async () => {
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/stock/profile2?symbol=${tkr}&token=cs90j1pr01qu0vk4jg60cs90j1pr01qu0vk4jg6g`
        );
        const dta = await response.json();

        setData([dta]);
        console.log(dta);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchStocks();
  }, [tkr]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load stock information.</div>;
  }

  return (
    <Link to={`graph/${tkr}`}>
      <>
        <ul>
          <div className={styles.stockinfocontainer}>
            {data.map((data, index) => (
              <div key={index} className={styles.stockinfobox}>
                <div className={styles.box}>
                  <h3 className={styles.stocksymbol}>{data.name}</h3>
                </div>
                <div className="box">
                  <p className={styles.stockperatio}>TICKR: {data.ticker}</p>
                </div>
                <div className="box">
                  <p className={styles.stockmarketcap}>
                    Market Cap: {Math.round(data.marketCapitalization)}
                  </p>
                </div>
                <div className="box">
                  <p className={styles.stockpercentagechange}>
                    Price:{" "}
                    {(
                      data.marketCapitalization / data.shareOutstanding
                    ).toFixed(3)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </>
    </Link>
  );
};

export default StockInfoComponent;
