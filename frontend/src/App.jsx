import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Trending from './components/Trending'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Trending />
      </main>
      <Footer />
    </>
  )
}
