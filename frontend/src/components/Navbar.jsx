import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoAccent}>Meta</span> Greenville
      </a>
      <ul className={styles.links}>
        <li><a href="#features">Features</a></li>
        <li><a href="#trending">Trending</a></li>
        <li><a href="#" className={styles.cta}>Enter Marketplace</a></li>
      </ul>
    </nav>
  )
}
