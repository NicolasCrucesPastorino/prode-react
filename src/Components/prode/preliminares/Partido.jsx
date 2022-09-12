import React from 'react'

export const Partido = (props) => {
   
  
    const resultados = props.resultados
    const setresultados = props.setresultados
    const partido = props.partido

    const handleOnChange = (evento) => {
      let goles = evento.target.value 
      
      try{
        if(evento.target.name === 'golesequipoA'){
          partido.setgolesequipoA(goles)
        } else if(evento.target.name === 'golesequipoB'){
          partido.setgolesequipoB(goles)
        }
        const grupoNombre = partido.partidoid.split('-')[0];
        console.log('pertenezco al grupo', grupoNombre);
        const resultadosAuxiliar = [...resultados];
        const grupoIndex = resultadosAuxiliar.findIndex((grupo) => grupo.nombre === grupoNombre);
        const partidoIndex = resultadosAuxiliar[grupoIndex].partidos.findIndex((p) => p.partidoid === partido.partidoid);
        resultadosAuxiliar[grupoIndex].partidos[partidoIndex] = partido;
        setresultados(resultadosAuxiliar);
      }catch(error){
        console.error(error);
        alert(error.message)
        return;
      }
      
    }
    
    const style={height:'32px',weight:'32px'}
    return (
    <div className='partidocontainer row' id={''}>
        <p className='equipo col-md-2'>{partido.equipoA}</p>
        <input 
          name='golesequipoA' 
          style={style} 
          className='col-md-2' 
          type='number' 
          onChange={handleOnChange} 
          value={partido.golesequipoA}>
        </input>

        <p className='col-md-1'> - </p>
        <input 
          name='golesequipoB' 
          style={style} 
          className='col-md-2' 
          type='number' 
          onChange={handleOnChange} 
          value={partido.golesequipoB}>
        </input>
        <p className='equipo col-md-2'>{partido.equipoB}</p>
    </div>
  )
}