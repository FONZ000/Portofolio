import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_2oawv6i', 'template_qwj35ra', form.current, 'dNwgMZ1RxNwWMS0r9')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance and contract opportunities - especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me using the below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ghaith Toutanji,
          <br />
          Damascus,
          Syria<br />
          <br />
          <span>waltherp992000@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[33.513805, 36.276527]} zoom={13}>
            <TileLayer url="https://api.mapbox.com/styles/v1/don-t/cl7eg51ku001r14qy9awducwp/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9uLXQiLCJhIjoiY2w3ZWd4aWpoMDBhazNzbnJuYnlxNzY3YiJ9.RDAEp8oNRC9zkToqONiKGA" 
                       attribution='<a href="https://www.mapbox.com/about/maps/"> © Mapbox </a> <a href="http://www.openstreetmap.org/copyright">© OpenStreetMap </a> <a href="https://www.mapbox.com/map-feedback/" target="_blank"><strong>Improve this map</strong></a>' />
            <Marker position={[33.513805, 36.276527]}>
              <Popup>Ghaith lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* <Loader type="ball-scale-ripple-multiple" /> */}

      <Loader type="pacman" />
    </>
  )
}

export default Contact


// mapbox://styles/don-t/cl7eg51ku001r14qy9awducwp

// pk.eyJ1IjoiZG9uLXQiLCJhIjoiY2w3ZWd4aWpoMDBhazNzbnJuYnlxNzY3YiJ9.RDAEp8oNRC9zkToqONiKGA

// https://api.mapbox.com/styles/v1/don-t/cl7eg51ku001r14qy9awducwp/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9uLXQiLCJhIjoiY2w3ZWd4aWpoMDBhazNzbnJuYnlxNzY3YiJ9.RDAEp8oNRC9zkToqONiKGA