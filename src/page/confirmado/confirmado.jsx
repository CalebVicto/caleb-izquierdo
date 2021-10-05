import React from 'react'
import { Link } from 'react-router-dom'
import regalo from '../../images/regalo.png'
import './style.css'


const Confirmado = () => {
  return (
    <div className="asistencia bkg">
      <div className="max-width">
        <h1>Confirmado</h1>
        <div className="msg">
          Su asistencia fue confirmada, si escogió virtual los enlaces
          aparecen en la pantalla principal. <br /> <br />
          Sus buenos deseos son suficientes para nosotros en el
          matrimonio y en caso de querer hacernos un presente puede
          darle click al siguiente enlace
        </div>
        <Link to="/regalos" className="regalo-btn">
          <img src={regalo} alt="" className="regalo-img" />
          <span>REGALOS</span>
        </Link>
      </div>
    </div>
  )
}

export default Confirmado
