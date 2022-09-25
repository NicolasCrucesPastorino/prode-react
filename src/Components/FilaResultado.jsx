import React from 'react'
import { useEffect,useState } from 'react'

export const FilaResultado = (props) => {
    const index = props.index
    const resultado = props.resultado
    console.log('res',resultado)

    const [filaresultado, setfilaresultado] = useState({posicion:1,nombre:'',puntaje:0})
    useEffect(
        () => {
           const cargardatos = async () => {
            const usuario = {}
            
            setfilaresultado({...filaresultado,nombre:usuario.name,puntaje:resultado.puntajetotal, posicion:index})
           }
           cargardatos().then()
        }
    ,[])
  return (
    <tr>
      <th scope="row">{filaresultado.posicion}</th>
      <td>{filaresultado.nombre}</td>
      <td>{filaresultado.puntaje}</td>
   
    </tr>
  )
}
