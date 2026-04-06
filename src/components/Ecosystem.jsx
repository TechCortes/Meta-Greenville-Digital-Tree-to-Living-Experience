import styles from './Ecosystem.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const elements = [
  { label: 'Tiny Homes' },
  { label: 'Organic Farm' },
  { label: 'Sustainable Energy' },
  { label: 'Conscious Tech' },
]

export default function Ecosystem() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div ref={ref} className={`${styles.content} reveal`}>
        <span className={styles.label}>The Ecosystem</span>
        <h2 className={styles.heading}>Building the Future<br /><em>of Conscious Living</em></h2>
        <p className={styles.body}>
          Meta Greenville is evolving into a living campus — a place where innovation
          meets nature, and where people come to design not just companies, but their lives.
        </p>
        <div className={styles.elements}>
          {elements.map((e, i) => (
            <div key={e.label} className={styles.element}>
              <span className={styles.elementNum}>0{i + 1}</span>
              <span className={styles.elementLabel}>{e.label}</span>
            </div>
          ))}
        </div>
        <a href="#community" className={styles.link}>Explore the Vision</a>
      </div>
    </section>
  )
}
