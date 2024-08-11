import { useEffect, useState } from 'react'
import {faAngular, faCss3, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faRust, faReact, faGit, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

import sqlIcon from '../../assets/images/sql-icon.png'
import mongoIcon from '../../assets/images/mongo-icon.png'
import postgreIcon from '../../assets/images/postgre-icon.png'
import pythonIcon from '../../assets/images/python-icon.png'
import javaIcon from '../../assets/images/java-icon.png'
import csharpIcon from '../../assets/images/csharp-icon.png'
import cplusplusIcon from '../../assets/images/cplusplus-icon.png'
import aspIcon from '../../assets/images/asp-icon.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Software Engineer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. 
          </p>
          <p align="LEFT">
            I'm confident, calm, fast learner, good problem solver and I'm working on
            obtaining my Masters degree.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, I love my family, a gym addict,
            movie and TV lover and tech ethusiast.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#F5EF42"/>
              <FontAwesomeIcon className="middle-icon" icon={faHtml5} color="#F06529"/>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
              <FontAwesomeIcon className="middle-icon" icon={faReact} color="#61DAFB"/>
              <FontAwesomeIcon icon={faNodeJs} color="#68A063"/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faRust} color="#CC722D"/>
              <img
                className="icon-image middle-icon"
                src={pythonIcon}
                alt="pythonDB"
              />
              <img
                className="icon-image"
                src={javaIcon}
                alt="JAVA"
              />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4"/>
            </div>
            <div className="face5">
              <img
                className="icon-image"
                src={sqlIcon}
                alt="SQL"
              />

              <img
                className="icon-image middle-icon"
                src={mongoIcon}
                alt="mongoDB"
              />

              <img
                className="icon-image"
                src={postgreIcon}
                alt="postgreDB"
              />
            </div>
            <div className="face6">
            <img
                className="icon-image"
                src={csharpIcon}
                alt="C-sharp"
              />

              <img
                className="icon-image middle-icon"
                src={cplusplusIcon}
                alt="C-plus-plus"
              />

              <img
                className="icon-image"
                src={aspIcon}
                alt="ASP.NET"
              />
            </div>
          </div>
        </div>

      </div>
      {/* <Loader type="ball-scale-ripple-multiple" /> */}
      <Loader type="pacman" />
    </>
  )
}

export default About
