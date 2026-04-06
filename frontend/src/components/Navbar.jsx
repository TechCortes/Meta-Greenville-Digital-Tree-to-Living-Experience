import styles from './Navbar.module.css'

const MARKETPLACE = 'https://collections.mashlabs.xyz/metagreenville/'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>Meta Greenville</a>
      <ul className={styles.links}>
        <li><a href="#vision">Vision</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#collection">NFT</a></li>
        <li>
          <a href={MARKETPLACE} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            View Collection
          </a>
        </li>
      </ul>
    </nav>
  )
}
