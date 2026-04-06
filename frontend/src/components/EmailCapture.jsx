import { useState } from 'react'
import styles from './EmailCapture.module.css'

export default function EmailCapture() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (name && email) setDone(true)
  }

  return (
    <section id="email" className={styles.section}>
      <div className={styles.box}>
        <span className={styles.label}>Stay Connected</span>
        <h2 className={styles.heading}>Your Journey Starts Here</h2>
        <p className={styles.sub}>
          Be the first to receive event invitations, retreat announcements,
          new program launches, and NFT holder benefits.
        </p>
        {done ? (
          <p className={styles.thanks}>Welcome, {name}. You're now part of Meta Greenville. ✨</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className={styles.input} type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" className={styles.btn}>Join the Meta Greenville Community</button>
          </form>
        )}
      </div>
    </section>
  )
}
