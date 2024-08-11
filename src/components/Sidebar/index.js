import './index.scss'
import LogoT from '../../assets/images/11-01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faSkype,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src={LogoT} alt="Logo" /> */}
        <img className="sub-logo" src={LogoT} alt="Toutanji" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.facebook.com/profile.php?id=100010754673718">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.instagram.com/ghaithtoutanji/">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href="#">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a href="#" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
