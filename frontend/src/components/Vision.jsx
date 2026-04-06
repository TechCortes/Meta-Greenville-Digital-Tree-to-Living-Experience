import styles from './Vision.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  { icon: '🌿', title: 'Nature & Regenerative Living', desc: 'Reconnect with the land. Breathe deeper. Live slower.' },
  { icon: '🧘', title: 'Mind-Body-Spirit Practices', desc: 'Meditation, breathwork, and energy awareness at your core.' },
  { icon: '🧠', title: 'Conscious Entrepreneurship', desc: 'PVS frameworks for founders who lead with purpose.' },
  { icon: '🏡', title: 'Sustainable Living', desc: 'Tiny homes, regenerative systems, and off-grid innovation.' },
]

export default function Vision() {
  const ref = useScrollReveal()
  return (
    <section id="vision" className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <div className={styles.text}>
          <span className={styles.label}>The Vision</span>
          <h2 className={styles.heading}>A New Paradigm<br /><em>for Living</em></h2>
          <p className={styles.body}>
            Meta Greenville is a vision to create a sanctuary where nature reconnects
            us to clarity, community accelerates growth, and consciousness drives creation.
          </p>
          <p className={styles.body}>
            We believe the next generation of entrepreneurs and leaders must be grounded
            not only in technology — but in presence, awareness, and purpose.
          </p>
        </div>
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.pillar}>
              <span className={styles.icon}>{p.icon}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
