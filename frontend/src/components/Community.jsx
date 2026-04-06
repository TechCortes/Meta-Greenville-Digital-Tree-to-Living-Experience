import styles from './Community.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const audience = ['Entrepreneurs & Founders','Angel Investors, VCs & Family Offices','Wellness Practitioners','Thought Leaders in Health & Wealth']

const events = [
  { icon: '🏙️', type: 'NYC In-Person Salons', desc: 'Intimate gatherings with curated, high-signal conversations.' },
  { icon: '💻', type: 'Virtual Workshops', desc: 'Online sessions open to the global conscious community.' },
  { icon: '🌿', type: 'Retreats on the Land', desc: 'Immersive multi-day experiences in Greenville, NY.' },
  { icon: '🎙️', type: 'Guest Speaker Series', desc: 'Health, wealth, and consciousness thought leaders.' },
]

export default function Community() {
  const ref = useScrollReveal()
  return (
    <section id="community" className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <div className={styles.left}>
          <span className={styles.label}>Community & Events</span>
          <h2 className={styles.heading}>Join the Conscious<br /><em>Community</em></h2>
          <p className={styles.body}>We host gatherings for the NYC conscious innovation community — bringing together those who build and lead with intention.</p>
          <ul className={styles.audience}>{audience.map((a) => <li key={a}>{a}</li>)}</ul>
          <div className={styles.actions}>
            <a href="#email" className={styles.btnPrimary}>See Upcoming Events</a>
            <a href="#email" className={styles.btnSecondary}>Join Mailing List</a>
          </div>
        </div>
        <div className={styles.right}>
          {events.map((e) => (
            <div key={e.type} className={styles.card}>
              <span className={styles.cardIcon}>{e.icon}</span>
              <div><h3>{e.type}</h3><p>{e.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
