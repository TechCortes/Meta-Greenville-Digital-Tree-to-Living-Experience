import styles from './About.module.css'
import { useScrollReveal } from '../hooks/useScrollReveal'
export default function About() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <span className={styles.label}>Powered By</span>
        <h2 className={styles.heading}>Princeton Venture Studio</h2>
        <p className={styles.body}>A venture studio focused on building companies and communities through conscious entrepreneurship. PVS brings together founders, investors, and practitioners to build what matters — with intention and depth.</p>
        <div className={styles.divider} />
        <p className={styles.quote}>"We don't just build companies. We build the people who build companies."</p>
      </div>
    </section>
  )
}
