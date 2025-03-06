import { React, useEffect } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import ReactGa from 'react-ga'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'









ReactGa.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`, { debug: true })

function App() {
  useEffect(() => {
    // var host = window.location.hostname
    // if (host !== 'localhost')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
