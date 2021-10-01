import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'
import logo from '../../images/logo_boda.png'

const NavBar = () => {
  const lk = useLocation().pathname

  return (
    <nav className="navbar">
      <div className="max-width">
        {/* <img src={logo} alt="Boda de Samuel y Dayan" className="nav__logo" /> */}
        <div className="nav_hamburguer"></div>
        <ul>
          <li><Link to="/" className={lk === '/' ? 'link_active' : ''}>INICIO</Link></li>
          <li><Link to="">NUESTRA HISTORIA</Link></li>
          <li><Link to="">CONFIRMAR ASISTENCIA</Link></li>
          <li><Link to="">REGALOS</Link></li>
          <li><Link to="">CÓMO LLEGAR</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
