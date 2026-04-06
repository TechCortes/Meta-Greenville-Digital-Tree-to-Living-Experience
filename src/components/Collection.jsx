import styles from './Collection.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
const M = 'https://collections.mashlabs.xyz/metagreenville/'
const nfts = [
  { id:'001', rarity:'Super Rare', g:'linear-gradient(135deg,#ff6eb4 0%,#c77dff 55%,#48cae4 100%)' },
  { id:'042', rarity:'Rare', g:'linear-gradient(135deg,#f72585 0%,#ffb347 100%)' },
  { id:'007', rarity:'Common', g:'linear-gradient(135deg,#1a5c44 0%,#80ffdb 100%)' },
  { id:'156', rarity:'Rare', g:'linear-gradient(135deg,#ff477e 0%,#ffb347 100%)' },
  { id:'389', rarity:'Super Rare', g:'linear-gradient(135deg,#c77dff 0%,#ff6eb4 55%,#fff176 100%)' },
  { id:'214', rarity:'Common', g:'linear-gradient(135deg,#48cae4 0%,#0b2e21 100%)' },
  { id:'067', rarity:'Rare', g:'linear-gradient(135deg,#ffb347 0%,#ff477e 100%)' },
  { id:'523', rarity:'Common', g:'linear-gradient(135deg,#80ffdb 0%,#c77dff 100%)' },
  { id:'901', rarity:'Super Rare', g:'linear-gradient(135deg,#fff176 0%,#ff6eb4 55%,#48cae4 100%)' },
]
const rc = { Common:'#94a3b8', Rare:'#C6A96B', 'Super Rare':'#ff6eb4' }
export default function Collection() {
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()
  return (
    <section id="collection" className={styles.section}>
      <div ref={titleRef} className={`${styles.title} reveal`}>
        <span className={styles.label}>NFT Collection</span>
        <h2 className={styles.heading}>1,000 Unique Digital Trees</h2>
        <p className={styles.sub}>Each tree is one-of-a-kind — Common, Rare, or Super Rare.</p>
      </div>
      <div ref={gridRef} className={`${styles.grid} reveal`}>
        {nfts.map((n) => (
          <div key={n.id} className={styles.card}>
            <div className={styles.thumb} style={{ background:n.g }}><span className={styles.tree}>🌳</span></div>
            <div className={styles.info}>
              <span className={styles.nftId}>#{n.id}</span>
              <span className={styles.rarity} style={{ color:rc[n.rarity] }}>{n.rarity}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cta}><a href={M} target="_blank" rel="noopener noreferrer" className={styles.btn}>Browse &amp; Collect Now</a></div>
    </section>
  )
}
