import styles from './Features.module.css'

const features = [
  {
    icon: '🎨',
    title: 'Mint Your Art',
    description: 'Upload and tokenize your digital artwork in seconds. Set royalties and retain ownership rights.'
  },
  {
    icon: '🔒',
    title: 'Secure Ownership',
    description: 'Every piece is backed by a verified proof of ownership. Trade with full confidence.'
  },
  {
    icon: '💸',
    title: 'Instant Payouts',
    description: 'Receive payments directly. No intermediaries, no delays — just your earnings.'
  },
  {
    icon: '🌐',
    title: 'Global Collectors',
    description: 'Reach buyers and collectors from across the world in one vibrant marketplace.'
  }
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <h2 className={styles.heading}>Why Meta Greenville?</h2>
      <p className={styles.sub}>Everything you need to thrive as a digital artist or collector.</p>
      <div className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <span className={styles.icon}>{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
