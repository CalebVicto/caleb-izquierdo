import React from 'react'
import './style.css'
import pin from '../../images/pin.png'
import fr from '../../images/flor-r.png'
import fl from '../../images/flor-l.png'

const Ubicacion = () => {
  return (
    <div className="bkg ubi regalos asistencia">
      <img src={fl} alt="" className="fl" />
      <img src={fr} alt="" className="fr" />
      <div className="max-width">
        <div className="title">
          <img src={pin} alt="" />
          <h1>Como llegar</h1>
        </div>
        <b>AV. TÚPAC AMARU 1611, COMAS 15312</b>
        <span>REFERENCIA: AL COSTADO DE LA RENIEC DE COMAS</span>
        <div className="mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d975.8459812155872!2d-77.04925148663035!3d-11.947898905204122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d029686d80c9%3A0x94a97031958d91d7!2sIglesia%20Alianza%20Cristiana%20y%20Misionera!5e0!3m2!1ses-419!2spe!4v1633410502560!5m2!1ses-419!2spe" allowfullscreen="" title="map-comas" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Ubicacion