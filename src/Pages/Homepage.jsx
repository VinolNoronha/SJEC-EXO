import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./Homepage.module.css";
import NewsComponent from "../components/Newscomponent";
import Top5stocks from "../components/top5stocks";

function Homepage() {
  return (
    <div className={styles.background}>
      <Header />

      <Sidebar />
      <div className="components">
        <NewsComponent />
        <Top5stocks />
        <div className={styles.slogan}>
          <p>Track Stocks, Optimize Decisions, Grow Wealth</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
