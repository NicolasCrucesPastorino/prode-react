import React, { useState, useEffect } from 'react';
import AuthConsumer from './../../Hooks/UseAuth';
import { useFirestore } from '../../Hooks/useFirestore';
import { BracketTorneo } from './torneo/BracketTorneo';
import { Octavos } from './torneo/Octavos'
import { Preliminares } from './preliminares/Preliminares';

export const TuProdeGenerico = (props) => {
  
  const onSubmitFinalStrategy = props.onSubmitFinalStrategy
  const validarcamposvacios = props.validarcamposvacios
  const [resultados, setresultados] = useState([])
  const [octavos, setoctavos] = useState({})
  const [torneo, settorneo] = useState({})
  
  const auth = AuthConsumer();
  const firestore = useFirestore()

  const cargarprode = async () => {
    if(auth.userauth.uid){
        const prodeusuario = await firestore.getprodeporid(auth.userauth.uid)
        
        if(prodeusuario){
          if(prodeusuario.torneo) { settorneo(prodeusuario.torneo) }
          if(prodeusuario.octavos) { setoctavos(prodeusuario.octavos) }
          if(prodeusuario.resultados && prodeusuario.resultados.length > 0) {
            setresultados(prodeusuario.resultados) 
          }
        }
      }      
  }

  useEffect(()=>{
   cargarprode().then() 
   console.log('datos cargados del prode', {resultados, octavos, torneo});
  },[])

  const handleOnSubmit = (evento) => {
    evento.preventDefault()

    if (validarcamposvacios === true) {
      const mensaje = validarcampos()
      if (mensaje != 'ok') {
        alert(mensaje)
        return
      }
    }
      const prodeusuario = auth.userauth
      const prode = {resultados, octavos, torneo }

      onSubmitFinalStrategy(prodeusuario.uid, prode)
      .then(() => {
        alert('Prode guardado con éxito')
      })
      .catch(error => {
        alert('No se pudo guardar el prode intente mas tarde')
        console.error(error);
      })
  }

  const validarcampos = () => {
    if (octavos['1-a'] === octavos['2-a'] || octavos['1-b'] === octavos['2-b'] || octavos['1-c'] === octavos['2-c'] || octavos['1-d'] === octavos['2-d'] || octavos['1-e'] === octavos['2-e'] || octavos['1-f'] === octavos['2-f'] || octavos['1-g'] === octavos['2-g'] || octavos['1-h'] === octavos['2-h']) {
      return 'No pueden haber dos equipos iguales'
    } else if (octavos['1-a'] === '' || octavos['2-a'] === '' || octavos['1-b'] === '' || octavos['2-b'] === '' || octavos['1-c'] === '' || octavos['2-c'] === '' || octavos['1-d'] === '' || octavos['2-d'] === '' || octavos['1-e'] === '' || octavos['2-e'] === '' || octavos['1-f'] === '' || octavos['2-f'] === '' || octavos['1-g'] === '' || octavos['2-g'] === '' || octavos['1-h'] === '' || octavos['2-h'] === '') {
      return 'debe completar todos los casilleros'
    } else {
      return 'ok'
    }
  }

  return (
    <div>
      <h1>Tu Prode {auth.userauth.name}</h1>
      <p>Para grabar los datos de TU PRODE apriete el botón de guardar al final.</p>
      <form onSubmit={handleOnSubmit}>
        <h4>Fase de Grupos</h4>
        <Preliminares resultados={resultados} setresultados={setresultados} />

        <h4>Elija los equipos primeros y segundos de cada grupo respectivamente.</h4>
        <Octavos octavos={octavos} setoctavos={setoctavos} />

        <button className='btn btn-primary' type='submit'>Guardar</button>
        <h4>Complete las llaves del prode de izquierda a derecha y de arriba hacia abajo.</h4>

        <div>
          <BracketTorneo torneo={torneo} settorneo={settorneo} octavos={octavos}></BracketTorneo>
        </div>

      </form>
    </div>
  )

}
