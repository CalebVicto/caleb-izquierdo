import React, { useEffect, useState } from 'react'
import './home.css'
import logo_boda from '../../images/logo_boda.png'
import logo_zoom from '../../images/logo-zoom.png'
import logo_fb_live from '../../images/logo-fb-live.png'
import logo_yt from '../../images/logo-yt.png'
import { getTime } from '../../utilities/utilities'

var date = new Date()
var hasta = new Date(date);
hasta.setSeconds(0)
hasta.setMinutes(0)
hasta.setHours(0)
hasta.setDate(26)
hasta.setMonth(10)

const Home = () => {

  const [time, setTime] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime(hasta))
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="home bkg">
      <div className="max-width">
        <div className="logo_boda">
          <img src={logo_boda} alt="Boda de Samuel y Dayan" />
        </div>
        <div className="home_texto">
          <h1>Cuenta regresiva</h1>
          <div className="contador">
            <div>
              <span>DÍAS</span>
              <div><h2>{time.days}</h2></div>
            </div>
            <div>
              <span>HORAS</span>
              <div><h2>{time.hours}</h2></div>
            </div>
            <div>
              <span>MINUTOS</span>
              <div><h2>{time.minutes}</h2></div>
            </div>
            <div>
              <span>SEGUNDOS</span>
              <div className="cont-last"><h2>{time.seconds}</h2></div>
            </div>
          </div>
          <h3 className="fecha_boda_t">FECHA DE BODA</h3>
          <h1 className="f_boda">26</h1>
          <h3>DE NOVIEMBRE</h3>
          <h4>2021</h4>
          <div className="logos">
            <img src={logo_zoom} alt="Enlace para el zoom" />
            <img src={logo_fb_live} alt="Enlace para la trasnmisión de facebook" />
            <img src={logo_yt} alt="Enlace para la transmisión de YouTube" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

