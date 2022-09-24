import React from 'react'
import { useEffect,useState } from 'react'
import { useFirestore } from '../Hooks/useFirestore'
import { calcularpuntajetotal } from '../utils/superprodefunctions'

export const FilaResultado = (props) => {
    const index = props.index
    const resultado = props.resultado
    console.log('res',resultado)
    const firestore = useFirestore()

    const [filaresultado, setfilaresultado] = useState({posicion:1,nombre:'',puntaje:0})
    useEffect(
        () => {
           const cargardatos = async () => {
            const usuario = await firestore.getdatauserfromid(resultado.userid)
            
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
