import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import NFTUtility from './components/NFTUtility'
import Experience from './components/Experience'
import Ecosystem from './components/Ecosystem'
import Community from './components/Community'
import WhyNow from './components/WhyNow'
import Collection from './components/Collection'
import EmailCapture from './components/EmailCapture'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <NFTUtility />
        <Experience />
        <Ecosystem />
        <Community />
        <WhyNow />
        <Collection />
        <EmailCapture />
        <About />
      </main>
      <Footer />
    </>
  )
}
