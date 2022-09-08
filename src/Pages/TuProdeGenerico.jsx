import React, { useState } from 'react'
import AuthConsumer from './../Hooks/UseAuth'
import { Grupo } from '../Components/prode/Grupo'
import { equipos } from '../Constantes'
import '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { BracketTorneo } from '../Components/BracketTorneo'
import { useEffect } from 'react'
import { Octavos } from '../Components/prode/torneo/Octavos'

export const TuProdeGenerico = (props) => {
  const onSubmitFinalStrategy = props.onSubmitFinalStrategy
  const validarcamposvacios = props.validarcamposvacios
  const [resultados, setresultados] = useState([])
  const [octavos, setoctavos] = useState({})
  const [torneo, settorneo] = useState({
    cuartos: { a: { a: '', b: '' }, b: { a: '', b: '' }, c: { a: '', b: '' }, d: { a: '', b: '' } },
    semifinal: { a: { a: '', b: '' }, b: { a: '', b: '' } },
    final: { a: '', b: '' },
    campeon: '',
    tercero: ''
  })
  
  const auth = AuthConsumer();
  const firestore = useFirestore()

  const cargarprode = async () => {
    if(auth.userauth.uid){
        const prodeusuario = await firestore.getprodeporid(auth.userauth.uid)
        
        if(prodeusuario){
          if(prodeusuario.torneo) { settorneo(prodeusuario.torneo) }
          if(prodeusuario.restultados) { setresultados([...prodeusuario.resultados]) }
          if(prodeusuario.octavos) { setoctavos(prodeusuario.octavos) }
        }
      }

      console.log('datos cargados del prode', {resultados, octavos, torneo});
  }

  useEffect(()=>{
   cargarprode().then() 
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

      const prode = {
        resultados, octavos, torneo
      }
      console.log('prode', prode);
      console.log('userid', prodeusuario.uid);
      onSubmitFinalStrategy(prodeusuario.uid, { resultados,octavos, torneo })
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

  const { grupoA } = equipos
  const { grupoB } = equipos
  const { grupoC } = equipos
  const { grupoD } = equipos
  const { grupoE } = equipos
  const { grupoF } = equipos
  const { grupoG } = equipos
  const { grupoH } = equipos

  const grupos = [
    { nombre: 'A', partidos: [{ equipoA: grupoA.SENEGAL, equipoB: grupoA.PAISES_BAJOS }, { equipoA: grupoA.CATAR, equipoB: grupoA.ECUADOR }, { equipoA: grupoA.CATAR, equipoB: grupoA.SENEGAL }, { equipoA: grupoA.PAISES_BAJOS, equipoB: grupoA.ECUADOR }, { equipoA: grupoA.ECUADOR, equipoB: grupoA.SENEGAL }, { equipoA: grupoA.PAISES_BAJOS, equipoB: grupoA.CATAR }] },
    { nombre: 'B', partidos: [{ equipoA: grupoB.INGLATERRA, equipoB: grupoB.IRAN }, { equipoA: grupoB.ESTADOS_UNIDOS, equipoB: grupoB.GALES }, { equipoA: grupoB.GALES, equipoB: grupoB.IRAN }, { equipoA: grupoB.INGLATERRA, equipoB: grupoB.ESTADOS_UNIDOS }, { equipoA: grupoB.GALES, equipoB: grupoB.INGLATERRA }, { equipoA: grupoB.IRAN, equipoB: grupoB.ESTADOS_UNIDOS }] },
    { nombre: 'C', partidos: [{ equipoA: grupoC.ARGENTINA, equipoB: grupoC.ARABIA_SAUDITA }, { equipoA: grupoC.MEXICO, equipoB: grupoC.POLONIA }, { equipoA: grupoC.POLONIA, equipoB: grupoC.ARABIA_SAUDITA }, { equipoA: grupoC.ARGENTINA, equipoB: grupoC.MEXICO }, { equipoA: grupoC.POLONIA, equipoB: grupoC.ARGENTINA }, { equipoA: grupoC.ARABIA_SAUDITA, equipoB: grupoC.MEXICO }] },
    { nombre: 'D', partidos: [{ equipoA: grupoD.DINAMARCA, equipoB: grupoD.TUNEZ }, { equipoA: grupoD.FRANCIA, equipoB: grupoD.AUSTRALIA }, { equipoA: grupoD.TUNEZ, equipoB: grupoD.AUSTRALIA }, { equipoA: grupoD.FRANCIA, equipoB: grupoD.DINAMARCA }, { equipoA: grupoD.AUSTRALIA, equipoB: grupoD.DINAMARCA }, { equipoA: grupoD.TUNEZ, equipoB: grupoD.FRANCIA }] },
    { nombre: 'E', partidos: [{ equipoA: grupoE.ALEMANIA, equipoB: grupoE.JAPON }, { equipoA: grupoE.ESPANIA, equipoB: grupoE.COSTA_RICA }, { equipoA: grupoE.JAPON, equipoB: grupoE.COSTA_RICA }, { equipoA: grupoE.ESPANIA, equipoB: grupoE.ALEMANIA }, { equipoA: grupoE.JAPON, equipoB: grupoE.ESPANIA }, { equipoA: grupoE.COSTA_RICA, equipoB: grupoE.ALEMANIA }] },
    { nombre: 'F', partidos: [{ equipoA: grupoF.MARRUECOS, equipoB: grupoF.CROACIA }, { equipoA: grupoF.BELGICA, equipoB: grupoF.CANADA }, { equipoA: grupoF.BELGICA, equipoB: grupoF.MARRUECOS }, { equipoA: grupoF.CROACIA, equipoB: grupoF.CANADA }, { equipoA: grupoF.CROACIA, equipoB: grupoF.BELGICA }, { equipoA: grupoF.CANADA, equipoB: grupoF.MARRUECOS }] },
    { nombre: 'G', partidos: [{ equipoA: grupoG.SUIZA, equipoB: grupoG.CAMERUN }, { equipoA: grupoG.BRASIL, equipoB: grupoG.SERBIA }, { equipoA: grupoG.CAMERUN, equipoB: grupoG.SERBIA }, { equipoA: grupoG.BRASIL, equipoB: grupoG.SUIZA }, { equipoA: grupoG.SERBIA, equipoB: grupoG.SUIZA }, { equipoA: grupoG.CAMERUN, equipoB: grupoG.BRASIL }] },
    { nombre: 'H', partidos: [{ equipoA: grupoH.URUGUAY, equipoB: grupoH.COREA_DEL_SUR }, { equipoA: grupoH.PORTUGAL, equipoB: grupoH.GHANA }, { equipoA: grupoH.COREA_DEL_SUR, equipoB: grupoH.GHANA }, { equipoA: grupoH.PORTUGAL, equipoB: grupoH.URUGUAY }, { equipoA: grupoH.GHANA, equipoB: grupoH.URUGUAY }, { equipoA: grupoH.COREA_DEL_SUR, equipoB: grupoH.PORTUGAL }] }
  ]

  return (
    <div>
      <h1>Tu Prode {auth.userauth.name}</h1>
      <p>Para grabar los datos de TU PRODE apriete el botón de guardar al final.</p>
      <form onSubmit={handleOnSubmit}>
        <div className='container row mx-auto'>
          {grupos.map(grupo => <Grupo resultados={resultados} setresultados={setresultados} nombre={grupo.nombre} partidos={grupo.partidos} ></Grupo>)}
        </div>

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
