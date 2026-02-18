import { useState } from 'react'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Servicios from './sections/Servicios'
import Stats from './sections/Stats'
import Nosotros from './sections/Nosotros'
import Citas from './sections/Citas'
import Footer from './sections/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Servicios />
      <Stats />
      <Nosotros />
      <Citas />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App