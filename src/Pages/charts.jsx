import { useState } from "react";
import Graph from "../components/graph"; // Adjust the import if necessary
import styles from "./charts.module.css";

function Charts() {
  const [symbol, setSymbol] = useState(""); // State to hold the ticker symbol
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSymbol(inputValue); // Set the symbol based on the user input
  };

  return (
    <div className={styles.chartcontainer}>
      <h1 className={styles.title}>Stock Chart Application</h1>

      {/* Form to input the ticker symbol */}
      <form onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label htmlFor="ticker">Enter Ticker Symbol:</label>
          <input
            type="text"
            id="ticker"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value on change
            placeholder="e.g. AAPL"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render the Graph component only if a symbol is entered */}
      {symbol && (
        <div className={styles.stockchart}>
          <h2>Stock Chart for {symbol.toUpperCase()}</h2>
          <Graph symbol={symbol.toUpperCase()} />{" "}
          {/* Pass symbol to Graph component */}
        </div>
      )}
    </div>
  );
}

export default Charts; // Export the component
