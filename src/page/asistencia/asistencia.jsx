import React, { useState } from 'react'
import './asistencia.css'
import fr from '../../images/flor-r.png'
import fl from '../../images/flor-l.png'
import axios from 'axios'

const Asistencia = () => {

  const [Cod, setCod] = useState('')
  const [DataCod, setDataCod] = useState([])
  const [Loading, setLoading] = useState(false)

  const ListarEntrada = async () => {
    if (Cod === '') return 0
    setLoading(true)

    const { data } = await axios.get('https://fierce-taiga-34211.herokuapp.com/' + Cod)
    if (data.length === 0) return mostrarAlert()

    let invitados = data[0].invitados
    let res = await invitados.find(e => e.estado !== 1)
    if (res !== undefined) return mostrarAlert('La asistencia ya fue confirmada!')

    setLoading(false)
    setDataCod(data[0])
  }

  const mostrarAlert = (msg = 'El codigo no existe!') => {
    setLoading(false)
    setDataCod([])
    alert(msg)
  }

  const handleEstado = async (id, estado) => {
    let invitados = DataCod.invitados

    await Promise.all(invitados.map((item, i) => {
      if (item._id === id) {
        invitados[i].estado = estado
      }
      return item
    }))

    setDataCod({ ...DataCod, invitados })
  }

  const actualizarEntrada = async () => {
    if (DataCod.length === 0) return 0
    setLoading(true)
    const _data = await axios.put('https://fierce-taiga-34211.herokuapp.com/admin', DataCod)
    if (_data.statusText !== 'OK') return mostrarAlert('Ocurrio un Error! \n Intentelo De Nuevo')
    return window.location.href = '/#/confirmado'
  }

  return (
    <div className="asistencia bkg">
      {Loading &&
        <div className="loading">
          <div className='spinner'></div>
        </div>
      }
      <img src={fl} alt="" className="fl" />
      <img src={fr} alt="" className="fr" />
      <div className="max-width">
        <h1>Confirma tu asistencia</h1>
        <div className="input-s">
          <span>CÓDIGO</span>
          <input type="text" name="codigo" autoComplete="off" onChange={e => setCod(e.target.value)} />
          <button onClick={() => ListarEntrada()}>Buscar</button>
        </div>
        {DataCod.length !== 0
          &&
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
                {DataCod.invitados.map((i) => (
                  <tr key={i._id}>
                    <td className="td-name">{i.nombre}</td>
                    {(i.tipo === 1 || i.tipo === 3) ?
                      <td className="check"><input type="radio" name={i._id} onClick={() => handleEstado(i._id, 2)} /><div className="check"></div></td>
                      : <td> - </td>
                    }
                    {(i.tipo === 2 || i.tipo === 3) ?
                      <td className="check"><input type="radio" name={i._id} onClick={() => handleEstado(i._id, 3)} /><div className="check"></div></td>
                      : <td> - </td>
                    }
                    <td className="check"><input type="radio" name={i._id} onClick={() => handleEstado(i._id, 4)} /><div className="check"></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => actualizarEntrada()} className="btn-conf">CONFIRMAR</button>
          </div>

        }

      </div>
    </div>
  )
}

export default Asistencia
