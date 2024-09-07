import styles from "./header.module.scss";

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/pro">Pro</a>
          </li>
          <li>
            <a href="/teams">Teams</a>
          </li>
        </ul>
        <div className={styles.navButton}>
          <a href="/login" className={styles.loginButton}>
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}
