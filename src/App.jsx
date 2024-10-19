import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Market from "./Pages/Market";
import News from "./Pages/news";
import Charts from "./Pages/charts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="homepage" element={<Homepage />} />
          <Route path="market" element={<Market />} />
          <Route path="news" element={<News />} />
          <Route path="graph" element={<Charts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
