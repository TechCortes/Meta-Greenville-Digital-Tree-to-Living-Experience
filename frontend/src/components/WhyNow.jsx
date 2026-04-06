import styles from './WhyNow.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const lines = ['Burnout is rising.','People are seeking meaning.','Nature is calling.']

export default function WhyNow() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div ref={ref} className={`${styles.content} reveal`}>
        <span className={styles.label}>Why Now</span>
        <h2 className={styles.heading}>The Shift is Happening</h2>
        <div className={styles.lines}>{lines.map((l) => <p key={l} className={styles.line}>{l}</p>)}</div>
        <p className={styles.closing}>Meta Greenville is not just a project — <em>it's a movement.</em></p>
        <span className={styles.badge}>Limited to 1,000 NFTs</span>
      </div>
    </section>
  )
}
