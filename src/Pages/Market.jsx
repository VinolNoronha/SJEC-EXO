// StockInfoComponent.jsx
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Lists from "../components/lists";
import styles from "./Market.module.css";

function Market() {
  const tickers = [
    "AAPL",
    "MSFT",
    "GOOGL",
    "M",
    "TSLA",
    "NFLX",
    "NVDA",
    "C",
    "V",
  ];

  return (
    <div>
      <Header />
      <Sidebar />

      {tickers.map((sym, ind) => (
        <li key={ind} className={styles.lists}>
          <Lists tkr={sym} key={ind} />
        </li>
      ))}
    </div>
  );
}

export default Market;
