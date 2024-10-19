//54c0fa4678a9b16474f3129297e5cfdb

import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const StockLineChart = ({ symbol }) => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({ x: [], y: [] });
  const [error, setError] = useState(null);

  const API_KEY = "54c0fa4678a9b16474f3129297e5cfdb"; // Replace with your actual API key

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          `https://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${symbol}&date_from=2024-02-26&date_to=2024-03-07`
        );

        const data = await response.json();

        if (data.data && data.data.length > 0) {
          setChartData({
            x: data.data.map((entry) => new Date(entry.date)), // x-axis (dates)
            y: data.data.map((entry) => entry.close), // y-axis (closing prices)
          });
          setLoading(false);
        } else {
          setError("No stock data available");
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStockData();
  }, [symbol]);

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Plot
      data={[
        {
          x: chartData.x,
          y: chartData.y,
          type: "scatter", // Line graph type
          mode: "lines", // Line plot
          line: { color: "green" }, // Line color
        },
      ]}
      layout={{
        title: `${symbol} Stock Price (End of Day)`,
        xaxis: {
          title: "Date",
          type: "date",
        },
        yaxis: {
          title: "Closing Price",
        },
        autosize: true,
        paper_bgcolor: "#1a1a1a",
        plot_bgcolor: "#1a1a1a",
        font: {
          color: "#ededed",
        },
      }}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default StockLineChart;
