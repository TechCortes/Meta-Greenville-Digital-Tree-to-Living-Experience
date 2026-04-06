import styles from './Footer.module.css'

const MARKETPLACE = 'https://collections.mashlabs.xyz/metagreenville/'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.logo}>Meta Greenville</span>
          <p>A conscious living ecosystem. 1,000 unique digital trees.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.group}>
            <span className={styles.groupLabel}>Explore</span>
            <a href="#vision">Vision</a>
            <a href="#experience">Experience</a>
            <a href="#collection">NFT Collection</a>
          </div>
          <div className={styles.group}>
            <span className={styles.groupLabel}>Connect</span>
            <a href="#community">Community</a>
            <a href="#email">Events</a>
            <a href="#email">Mailing List</a>
          </div>
        </div>
      </div>
      <div className={styles.finalCta}>
        <h2 className={styles.ctaHeadline}>Your Journey Starts Here</h2>
        <div className={styles.ctaButtons}>
          <a href={MARKETPLACE} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            View NFT Collection
          </a>
          <a href="#email" className={styles.btnSecondary}>Join Community</a>
          <a href="#community" className={styles.btnGhost}>Attend an Event</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Meta Greenville. All rights reserved.</span>
        <span>Powered by Princeton Venture Studio</span>
      </div>
    </footer>
  )
}
