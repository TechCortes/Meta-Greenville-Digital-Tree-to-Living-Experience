import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}><span className={styles.accent}>Meta</span> Greenville</span>
        <p className={styles.copy}>© {new Date().getFullYear()} Meta Greenville. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
