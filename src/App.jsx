import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features.jsx'
import WorkFlow from './components/WorkFlow.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonial from './components/Testimonial.jsx'
import Footer from './components/Footer.jsx'
import Random from './components/Random.jsx'
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection /> 
        <Features /> 
        <WorkFlow />
        <Pricing />
        <Testimonial />
        <Footer />
        <Random />
      </div>
    </>

  )
}

export default App
