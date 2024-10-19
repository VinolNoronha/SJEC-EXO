import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/homepage">
        <h1 className={styles.fnt}>EquiTrack</h1>
      </Link>

      <input type="text" placeholder="Search Here" className={styles.input} />
      <div className={styles.navEle}>
        <button className={styles.btnClass}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
