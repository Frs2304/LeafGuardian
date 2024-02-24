import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Landing from './components/Landing'
import Upload from './components/Upload'
import PlantCareTips from './components/PlantCareTips'
import Subscription from './components/Subscription'


const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Upload />
      <PlantCareTips />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App

