import React from 'react'
import { Partido } from './Partido'


export const GrupoPreliminar = (props) => {
    const nombre = props.nombre
    const partidos = props.partidos
    const grupospreliminares = props.grupospreliminares 
    const setgrupospreliminares = props.setgrupospreliminares
    console.log('part',partidos)
  return (
    <div className='containeritem col-md-5'>
        <h1>Grupo </h1>
        {partidos.map((partido)=><Partido key={partido.partidoid} grupospreliminares={grupospreliminares} setgrupospreliminares={setgrupospreliminares} partido={partido}/>)}
    </div>
  )
}
