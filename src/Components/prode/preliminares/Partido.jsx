import React,{ useState } from 'react'
import { useEffect } from 'react'
import { puntaje, ROL } from '../../../Constantes'
import { useFirestore } from '../../../Hooks/useFirestore'
import authconsumer from './../../../Hooks/UseAuth'
export const Partido = (props) => {
   
  
    const resultados = props.resultados
    const setresultados = props.setresultados
    const partido = props.partido

    const SIN_PUNTOS = '#FFFFFF'
    const SIN_COINCIDENCIAS = '#f44336'
    const COINCIDENCIA_PARCIAL = '#FFFF72'
    const COINCIDENCIA_TOTAL = '#66BB6A'

    const consumer = authconsumer()
    const firestore = useFirestore()

    const [resultadopuntos, setresultadopuntos] = useState([])
    const [colorpuntos, setcolorpuntos] = useState(SIN_PUNTOS)

    useEffect(()=>{
      const getresultadopuntos = async () => {
        const resultadosprode = await firestore.getresultadosuserprode(consumer.userauth.uid)
        setresultadopuntos(resultadosprode.preliminares.find(r => r.partidoid === partido.partidoid))
        const puntos = resultadopuntos.puntaje
        if(consumer.userauth.rol === ROL.GUEST){
          setcolorpuntos(SIN_PUNTOS)
        } else {
          if(resultadopuntos.puntaje === 3){
            setcolorpuntos(COINCIDENCIA_TOTAL)
          } else if(resultadopuntos.puntaje === 2){
            setcolorpuntos(COINCIDENCIA_PARCIAL)
          } else if(resultadopuntos.puntaje === 0){
            setcolorpuntos(SIN_COINCIDENCIAS)
          } else {
            setcolorpuntos(SIN_PUNTOS)
          }
        
        }

      }
      getresultadopuntos().then()
      
      

      
    },[resultados])


    const handleOnChange = (evento) => {
      let goles = evento.target.value 
      
      try{
        if(evento.target.name === 'golesequipoA'){
          partido.setgolesequipoA(goles)
        } else if(evento.target.name === 'golesequipoB'){
          partido.setgolesequipoB(goles)
        }
        const grupoNombre = partido.partidoid.split('-')[0];
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
    const divstyle={backgroundColor:colorpuntos}
    return (
    <div className='partidocontainer row' style={divstyle}>
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