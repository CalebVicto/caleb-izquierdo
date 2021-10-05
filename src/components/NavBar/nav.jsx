import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'
import logo from '../../images/logo_boda.png'

const NavBar = () => {

  const [bar, setBar] = useState(false)


  const lk = useLocation().pathname

  return (
    <nav className="navbar">
      <div className="max-width">
        <img src={logo} alt="Boda de Samuel y Dayan" className="nav__logo" />
        <div className="nav__hamb" onClick={() => setBar(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={bar ? 'nav_menu active' : 'nav_menu'}>
          <div className="close" onClick={() => setBar(false)}>X</div>
          <li><Link onClick={() => setBar(false)} to="/" className={lk === '/' ? 'link_active' : ''}>INICIO</Link></li>
          <li><Link onClick={() => setBar(false)} to="/nuestra-historia" className={lk === '/nuestra-historia' ? 'link_active' : ''}>NUESTRA HISTORIA</Link></li>
          <li><Link onClick={() => setBar(false)} to="/confirmar-asistencia" className={lk === '/confirmar-asistencia' ? 'link_active' : ''}>CONFIRMAR ASISTENCIA</Link></li>
          <li><Link onClick={() => setBar(false)} to="/regalos" className={lk === '/regalos' ? 'link_active' : ''}>REGALOS</Link></li>
          <li><Link onClick={() => setBar(false)} to="/como-llegar" className={lk === '/como-llegar' ? 'link_active' : ''} s>CÓMO LLEGAR</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
