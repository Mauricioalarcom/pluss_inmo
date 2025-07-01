import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
