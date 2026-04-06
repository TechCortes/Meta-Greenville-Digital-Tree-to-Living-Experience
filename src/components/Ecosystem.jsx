import styles from './Ecosystem.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
const elements = [{ icon:'🏡', label:'Tiny Homes' },{ icon:'🌱', label:'Organic Farm' },{ icon:'⚡', label:'Sustainable Energy' },{ icon:'🧠', label:'Conscious Tech' }]
export default function Ecosystem() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div ref={ref} className={`${styles.content} reveal`}>
        <span className={styles.label}>The Ecosystem</span>
        <h2 className={styles.heading}>Building the Future<br /><em>of Conscious Living</em></h2>
        <p className={styles.body}>Meta Greenville is evolving into a living campus — a place where innovation meets nature, and where people come to design not just companies, but their lives.</p>
        <div className={styles.elements}>
          {elements.map((e) => <div key={e.label} className={styles.element}><span>{e.icon}</span><span>{e.label}</span></div>)}
        </div>
        <a href="#community" className={styles.link}>Explore the Vision →</a>
      </div>
    </section>
  )
}
