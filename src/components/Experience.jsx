import styles from './Experience.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
const cols = [
  { tag:'Nature Immersion', icon:'🌿', title:'Walk the Land', items:['Walk the land in Greenville, NY','Connect with your tree','Participate in seasonal retreats'], bg:'linear-gradient(145deg,#0b2e21 0%,#1a5c44 100%)' },
  { tag:'Consciousness', icon:'🧘', title:'Inner Expansion', items:['Meditation & breathwork','Energy awareness practices','Mind-body-spirit curriculum'], bg:'linear-gradient(145deg,#181830 0%,#2e2e60 100%)' },
  { tag:'Entrepreneurial Growth', icon:'🚀', title:'Build with Purpose', items:['PVS cohort-style sessions','Founder circles & case discussions','Investor & community connections'], bg:'linear-gradient(145deg,#2a1508 0%,#5c3010 100%)' },
]
export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.titleBlock}>
        <span className={styles.label}>The Experience</span>
        <h2 className={styles.heading}>Step Into the Experience</h2>
      </div>
      <div ref={ref} className={`${styles.grid} reveal`}>
        {cols.map((c) => (
          <div key={c.tag} className={styles.col} style={{ background:c.bg }}>
            <span className={styles.icon}>{c.icon}</span>
            <span className={styles.tag}>{c.tag}</span>
            <h3>{c.title}</h3>
            <ul>{c.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
