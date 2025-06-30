import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Canvas1 from '../Canvas/Canvas1'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ["  "," ",'A', 'r', 'a', 'v', 'i', 'n', 'd', ',']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    'S',
    't',
    'a',
    'c',
    'k',
    '\xa0',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const changeAnimationClass = () => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 5500)
    }

    changeAnimationClass()
  }, [])

  return (
    <>
      <div className="container home">
        <Canvas1 />

        {/**INTRODUCTION TEXT */}
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _6`}>i,</span>
            <br />
            <span className={`${letterClass} _7`}>I</span>
            <span className={`${letterClass} _8`}>'m</span>

            {/**Name Animation : T abassum */}
            {/* <img src={LogoTitle} alt="logo-title" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={9}
            />

            <br />

            {/** Job Animation: Software Developer */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <h2 style ={{ color: 'aqua' }}>Web Developer /Frontend Developer/Backend Developer</h2>

          
          {/** CONTACT BUTTON */}
          <Link to="/contact" className="flat-button">
            <span className="bg"></span>
            <span className="base"></span>
            <span className="text">Contact Me!</span>
          </Link>
        </div>
      </div>
    </>
  )
}



export default Home
