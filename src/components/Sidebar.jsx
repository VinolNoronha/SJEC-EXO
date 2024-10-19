import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.pageNavBox}>
      <NavLink
        to="/homepage"
        className={({ isActive }) => (isActive ? styles.activeLink : "")}
      >
        <div className={styles.navItem}>Homepage</div>
      </NavLink>
      <NavLink
        to="/market"
        className={({ isActive }) => (isActive ? styles.activeLink : "")}
      >
        <div className={styles.navItem}>Market</div>
      </NavLink>

      <NavLink
        to="/news"
        className={({ isActive }) => (isActive ? styles.activeLink : "")}
      >
        <div className={styles.navItem}>News</div>
      </NavLink>

      <NavLink
        to="/graph"
        className={({ isActive }) => (isActive ? styles.activeLink : "")}
      >
        <div className={styles.navItem}>Graph</div>
      </NavLink>
    </div>
  );
}

export default Sidebar;
