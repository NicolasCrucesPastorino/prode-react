import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Partido = (props) => {
    const equipoA = props.equipoA
    const equipoB = props.equipoB
    const grupo = props.grupo
    const resultados = props.resultados
    const setresultados = props.setresultados
    const index = props.index

    const partidoid= grupo + '-' + index
    const [resultado, setresultado] = useState({partidoid,equipoA,equipoB,golesequipoA:'',golesequipoB:''})
    
    useEffect(()=>{
      const existeresultado=resultados.find(r => r.partidoid===partidoid)
      if(!existeresultado){
        setresultados([...resultados,resultado])
      }else{
        const updatedresultados=resultados.map(r => {
          if(r.partidoid===partidoid){
            return resultado
          }
          else{
            return r
          }
        })
        setresultados(updatedresultados)
      }
    },[resultado])

    const handleOnChange = (evento) => {
      let goles = evento.target.value 
      if(isNaN(goles) || parseInt(goles)<0){
        alert('Los goles deben ser números positivos')
        return
      }
      goles=parseInt(goles)
      setresultado({...resultado,[evento.target.name]:goles})
    }
    
    const style={height:'32px',weight:'32px'}
    return (
    <div className='partidocontainer row' id={''}>
        <p className='equipo col-md-2'>{equipoA}</p>
        <input name='golesequipoA' style={style} className='col-md-2' type='number' onChange={handleOnChange} value={resultado.golesequipoA}></input>
        <p className='col-md-1'> - </p>
        <input name='golesequipoB' style={style} className='col-md-2' type='number' onChange={handleOnChange} value={resultado.golesequipoB}></input>
        <p className='equipo col-md-2'>{equipoB}</p>
    </div>
  )
}