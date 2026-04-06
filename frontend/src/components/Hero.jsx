import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <span className={styles.badge}>Digital Art Marketplace</span>
        <h1 className={styles.title}>
          Create. Collect.
          <br />
          <span className={styles.gradient}>Own the Future.</span>
        </h1>
        <p className={styles.subtitle}>
          Meta Greenville is where digital artists and collectors come together.
          Discover rare works, mint originals, and build your collection.
        </p>
        <div className={styles.actions}>
          <a href="#" className={styles.btnPrimary}>Explore Artwork</a>
          <a href="#" className={styles.btnSecondary}>List Your Art</a>
        </div>
        <div className={styles.stats}>
          <div><strong>12K+</strong><span>Artists</span></div>
          <div><strong>84K+</strong><span>Artworks</span></div>
          <div><strong>$2.4M</strong><span>Volume</span></div>
        </div>
      </div>
    </section>
  )
}
