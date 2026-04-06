import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const MARKETPLACE = 'https://collections.mashlabs.xyz/metagreenville/'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add('is-revealed'), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.glow} />
      <div ref={ref} className={`${styles.content} reveal`}>
        <span className={styles.eyebrow}>1,000 Unique Digital Trees</span>
        <h1 className={styles.headline}>
          Own a Tree.<br />
          <em>Enter a New Way of Living.</em>
        </h1>
        <p className={styles.sub}>
          A conscious living ecosystem combining nature, mindfulness,
          entrepreneurship, and community — powered by a collection of
          1,000 unique digital trees.
        </p>
        <div className={styles.actions}>
          <a href={MARKETPLACE} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            View NFT Collection
          </a>
          <a href="#community" className={styles.btnSecondary}>Join the Community</a>
          <a href="#community" className={styles.btnGhost}>Attend an Event</a>
        </div>
      </div>
      <div className={styles.scroll}><span /></div>
    </section>
  )
}
