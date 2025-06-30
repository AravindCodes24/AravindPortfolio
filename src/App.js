import { useEffect } from 'react'
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const location = useLocation()

  useEffect(() => {
    const trackingId = process.env.REACT_APP_GA_TRACKING_ID

    if (trackingId) {
      ReactGA.initialize(trackingId)
      ReactGA.pageview(location.pathname + location.search)
    } else {
      console.warn("Google Analytics Tracking ID not found in .env")
    }
  }, [location]) // 🔁 Run on route change too

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
