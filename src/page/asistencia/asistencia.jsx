import React from 'react'
import './asistencia.css'
import fr from '../../images/flor-r.png'
import fl from '../../images/flor-l.png'

const Asistencia = () => {
  return (
    <div className="asistencia bkg">
      <img src={fl} alt="" className="fl" />
      <img src={fr} alt="" className="fr" />
      <div className="max-width">
        <h1>Confirma tu asistencia</h1>
        <div className="input-s">
          <span>CÓDIGO</span>
          <input type="text" name="codigo" autoComplete="off" />
          <button>Buscar</button>
        </div>
        <div className="res">
          <table className="res-s">
            <thead>
              <tr>
                <th></th>
                <th>Presencial</th>
                <th>Virtual</th>
                <th>No asiste</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-name">VICTOR MANUEL IZQUIERDO PANDURO</td>
                <td className="check"><input type="radio" name="iz_asis" /><div className="check"></div></td>
                <td className="check"><input type="radio" name="iz_asis" /><div className="check"></div></td>
                <td className="check"><input type="radio" name="iz_asis" /><div className="check"></div></td>
              </tr>
              <tr>
                <td className="td-name">JOSUE IZQUIERDO</td>
                <td className="check"><input type="radio" name="izj_asis" /><div className="check"></div></td>
                <td className="check"><input type="radio" name="izj_asis" /><div className="check"></div></td>
                <td className="check"><input type="radio" name="izj_asis" /><div className="check"></div></td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => document.location.href = '/confirmado'} className="btn-conf">CONFIRMAR</button>
        </div>
      </div>
    </div>
  )
}

export default Asistencia
