import styles from './NFTUtility.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
const M = 'https://collections.mashlabs.xyz/metagreenville/'
const utilities = [
  { icon:'🌳', title:'Access to the Land', desc:'Nature-based retreats in Greenville, NY. Walk the land. Connect with your tree.' },
  { icon:'🧘', title:'Mindfulness Sessions', desc:'Meditation, breathwork, and energy awareness practices led by expert facilitators.' },
  { icon:'🧠', title:'Founder Programs', desc:'PVS-inspired cohort sessions and self-discovery programs for conscious entrepreneurs.' },
  { icon:'🤝', title:'Conscious Community', desc:'A curated network of entrepreneurs, investors, and wellness practitioners.' },
  { icon:'🌍', title:'Exclusive Events', desc:'NYC salons, virtual workshops, and in-person retreats open to all NFT holders.' },
]
export default function NFTUtility() {
  const titleRef = useScrollReveal()
  const cardsRef = useScrollReveal()
  return (
    <section className={styles.section}>
      <div ref={titleRef} className={`${styles.title} reveal`}>
        <span className={styles.label}>NFT Utility</span>
        <h2 className={styles.heading}>Your NFT is a Gateway</h2>
        <p className={styles.sub}>Each Meta Greenville NFT is more than art — it is your access point into a living, breathing ecosystem.</p>
      </div>
      <div ref={cardsRef} className={`${styles.cards} reveal`}>
        {utilities.map((u) => (
          <div key={u.title} className={styles.card}>
            <span className={styles.cardIcon}>{u.icon}</span>
            <h3>{u.title}</h3><p>{u.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.cta}><a href={M} target="_blank" rel="noopener noreferrer" className={styles.btn}>Explore the Collection</a></div>
    </section>
  )
}
