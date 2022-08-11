import React from 'react'
import { useEffect } from 'react'
import { Partido } from './Partido'

export const Grupo = (props) => {


    const nombre = props.nombre
    const partidos =props.partidos
    const resultados=props.resultados
    const setresultados=props.setresultados
    
  return (
    <div className='containeritem col-md-5'>
        <h1>Grupo {nombre}</h1>
        {partidos.map((partido,index)=><Partido index={index} grupo={nombre} resultados={resultados} setresultados={setresultados} equipoA={partido.equipoA} equipoB={partido.equipoB}/>)}
    </div>
  )
}
