import styles from './Trending.module.css'

const artworks = [
  { id: 1, title: 'Neon Genesis #04', artist: '@voidpixel', price: '0.85 ETH', color: '#7c3aed' },
  { id: 2, title: 'Cyber Bloom', artist: '@luminarix', price: '1.2 ETH', color: '#06b6d4' },
  { id: 3, title: 'Abstract Void III', artist: '@neonwitch', price: '0.42 ETH', color: '#ec4899' },
  { id: 4, title: 'Digital Forest', artist: '@greendata', price: '0.67 ETH', color: '#22c55e' },
]

export default function Trending() {
  return (
    <section id="trending" className={styles.section}>
      <h2 className={styles.heading}>Trending Now</h2>
      <p className={styles.sub}>Hottest pieces on the marketplace right now.</p>
      <div className={styles.grid}>
        {artworks.map((art) => (
          <div key={art.id} className={styles.card}>
            <div className={styles.thumb} style={{ background: `radial-gradient(circle at 40% 40%, ${art.color}55, #0a0a0f)` }} />
            <div className={styles.info}>
              <span className={styles.title}>{art.title}</span>
              <span className={styles.artist}>{art.artist}</span>
              <div className={styles.bottom}>
                <span className={styles.price}>{art.price}</span>
                <button className={styles.btn}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
