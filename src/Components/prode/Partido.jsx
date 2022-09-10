import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Partido = (props) => {
   
  
    const grupospreliminares = props.grupospreliminares
    const setgrupospreliminares = props.setgrupospreliminares
    const partido = props.partido

    
    //const [resultado, setresultado] = useState({partidoid,equipoA,equipoB,golesequipoA:'',golesequipoB:''})
    
    



    const handleOnChange = (evento) => {
      let goles = evento.target.value 
      if(isNaN(goles) || parseInt(goles)<0){
        alert('Los goles deben ser números positivos')
        return
      }
      goles=parseInt(goles)
      if(evento.target.name === 'golesequipoA'){
        partido.setgolesequipoA(goles)
      } else if(evento.target.name === 'golesequipoB'){
        partido.setgolesequipoB(goles)
      }
      //setresultado({...resultado,[evento.target.name]:goles})
    }
    
    const style={height:'32px',weight:'32px'}
    return (
    <div className='partidocontainer row' id={''}>
        <p className='equipo col-md-2'>{partido.equipoA}</p>
        <input name='golesequipoA' style={style} className='col-md-2' type='number' onChange={handleOnChange} value={partido.golesequipoA}></input>
        <p className='col-md-1'> - </p>
        <input name='golesequipoB' style={style} className='col-md-2' type='number' onChange={handleOnChange} value={partido.golesequipoB}></input>
        <p className='equipo col-md-2'>{partido.equipoB}</p>
    </div>
  )
}