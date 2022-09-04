import React, { useState } from 'react'
import AuthConsumer from './../Hooks/UseAuth'
import { Grupo } from '../Components/prode/Grupo'
import { equipos } from '../Constantes'
import '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { BracketTorneo } from '../Components/BracketTorneo'
import { useEffect } from 'react'

export const TuProdeGenerico = (props) => {
  const onSubmitFinalStrategy = props.onSubmitFinalStrategy
  const validarcamposvacios = props.validarcamposvacios
  const [resultados, setresultados] = useState([])
  const [octavos, setoctavos] = useState(
    { 
      a: { a: '', b: '' }, 
      b: { a: '', b: '' }, 
      c: { a: '', b: '' }, 
      d: { a: '', b: '' }, 
      e: { a: '', b: '' },
      f: { a: '', b: '' },
      g: { a: '', b: '' },
      h: { a: '', b: '' } 
    })
    console.log('octa',octavos)
  const [inputbracket, setinputbracket] = useState({})
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
        console.log(prodeusuario,'prodeusuario')
        settorneo(prodeusuario.torneo)
        setresultados([...prodeusuario.resultados])
        setoctavos(prodeusuario.octavos)
        console.log('octavos en efecto',octavos)
      }
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
    firestore.createResultados(resultados, 1).then(() => {
      alert('Prode guardado con éxito')
      const prodeusuario = {
        resultados, torneo, userid: auth.userauth.uid
      }
      console.log('octa',octavos)
      onSubmitFinalStrategy(prodeusuario.userid, { resultados: prodeusuario.resultados,octavos, torneo: prodeusuario.torneo })
    })
      .catch(error => {
        alert('No se pudo guardar el prode intente mas tarde')
      })
  }


  const validarcampos = () => {
    if (inputbracket['1-a'] === inputbracket['2-a'] || inputbracket['1-b'] === inputbracket['2-b'] || inputbracket['1-c'] === inputbracket['2-c'] || inputbracket['1-d'] === inputbracket['2-d'] || inputbracket['1-e'] === inputbracket['2-e'] || inputbracket['1-f'] === inputbracket['2-f'] || inputbracket['1-g'] === inputbracket['2-g'] || inputbracket['1-h'] === inputbracket['2-h']) {
      return 'No pueden haber dos equipos iguales'
    } else if (inputbracket['1-a'] === '' || inputbracket['2-a'] === '' || inputbracket['1-b'] === '' || inputbracket['2-b'] === '' || inputbracket['1-c'] === '' || inputbracket['2-c'] === '' || inputbracket['1-d'] === '' || inputbracket['2-d'] === '' || inputbracket['1-e'] === '' || inputbracket['2-e'] === '' || inputbracket['1-f'] === '' || inputbracket['2-f'] === '' || inputbracket['1-g'] === '' || inputbracket['2-g'] === '' || inputbracket['1-h'] === '' || inputbracket['2-h'] === '') {
      return 'debe completar todos los casilleros'
    } else {
      return 'ok'
    }

  }
  
  const handleOnChangeOctavos = (evento) => {
    const octavosauxiliar={...octavos}
    switch (evento.target.name){
      case '1-a': octavosauxiliar.a.a=evento.target.value; break ;
      case '2-a': octavosauxiliar.a.b=evento.target.value; break ;
      case '1-b': octavosauxiliar.b.a=evento.target.value; break ;
      case '2-b': octavosauxiliar.b.b=evento.target.value; break ;
      case '1-c': octavosauxiliar.c.a=evento.target.value; break ;
      case '2-c': octavosauxiliar.c.b=evento.target.value; break ;
      case '1-d': octavosauxiliar.d.a=evento.target.value; break ;
      case '2-d': octavosauxiliar.d.b=evento.target.value; break ;
      case '1-e': octavosauxiliar.e.a=evento.target.value; break ;
      case '2-e': octavosauxiliar.e.b=evento.target.value; break ;
      case '1-f': octavosauxiliar.f.a=evento.target.value; break ;
      case '2-f': octavosauxiliar.f.b=evento.target.value; break ;
      case '1-g': octavosauxiliar.g.a=evento.target.value; break ;
      case '2-g': octavosauxiliar.g.b=evento.target.value; break ;
      case '1-h': octavosauxiliar.h.a=evento.target.value; break ;
      case '2-h': octavosauxiliar.h.b=evento.target.value; break ;
    }
    setoctavos(octavosauxiliar)
    

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


        <div>
          <label>1ro Grupo A :</label>
          <select onChange={handleOnChangeOctavos} name='1-a'>
            {octavos.a.a!=''  ?
            <option value={octavos.a.a}>{octavos.a.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoA).map(equipo => <option value={equipo} >{equipo}</option>)}
          </select>
          <label> 2do Grupo A :</label>
          <select onChange={handleOnChangeOctavos} name='2-a'>
          {octavos.a.b!='' ?
            <option value={octavos.a.b}>{octavos.a.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoA).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo B :</label>
          <select onChange={handleOnChangeOctavos} name='1-b'>
          {octavos.b.a!='' ?
            <option value={octavos.b.a}>{octavos.b.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo B :</label>
          <select onChange={handleOnChangeOctavos} name='2-b'>
          {octavos.b.b!='' ?
            <option value={octavos.b.b}>{octavos.b.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoB).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo C :</label>
          <select onChange={handleOnChangeOctavos} name='1-c'>
          {octavos.c.a!='' ?
            <option value={octavos.c.a}>{octavos.c.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo C :</label>
          <select onChange={handleOnChangeOctavos} name='2-c'>
          {octavos.c.b!=''?
            <option value={octavos.c.b}>{octavos.c.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoC).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo D :</label>
          <select onChange={handleOnChangeOctavos} name='1-d'>
          {octavos.d.a!=''  ?
            <option value={octavos.d.a}>{octavos.d.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo D :</label>
          <select onChange={handleOnChangeOctavos} name='2-d'>
          {octavos.d.b!=''?
            <option value={octavos.d.b}>{octavos.d.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoD).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo E :</label>
          <select onChange={handleOnChangeOctavos} name='1-e'>
          {octavos.e.a!='' ?
            <option value={octavos.e.a}>{octavos.e.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo E :</label>
          <select onChange={handleOnChangeOctavos} name='2-e'>
          {octavos.e.b!='' ?
            <option value={octavos.e.b}>{octavos.e.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoE).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo F :</label>
          <select onChange={handleOnChangeOctavos} name='1-f'>
          {octavos.f.a!='' ?
            <option value={octavos.f.a}>{octavos.f.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo F :</label>
          <select onChange={handleOnChangeOctavos} name='2-f'>
          {octavos.f.b!='' ?
            <option value={octavos.f.b}>{octavos.f.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoF).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo G :</label>
          <select onChange={handleOnChangeOctavos} name='1-g'>
          {octavos.g.a!=''?
            <option value={octavos.g.a}>{octavos.g.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo G :</label>
          <select onChange={handleOnChangeOctavos} name='2-g'>
          {octavos.g.b!='' ?
            <option value={octavos.g.b}>{octavos.g.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoG).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>
          <label>1ro Grupo H :</label>
          <select onChange={handleOnChangeOctavos} name='1-h'>
          {octavos.h.a!='' ?
            <option value={octavos.h.a}>{octavos.h.a}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <label> 2do Grupo H :</label>
          <select onChange={handleOnChangeOctavos} name='2-h'>
          {octavos.h.b!='' ?
            <option value={octavos.h.b}>{octavos.h.b}</option>:
            <option value=''>seleccione un pais</option>}
            {Object.keys(grupoH).map(equipo => <option value={equipo}>{equipo}</option>)}
          </select>
          <br></br>
          <br></br>

        </div>
        <button className='btn btn-primary' type='submit'>Guardar</button>
        <h4>Complete las llaves del prode de izquierda a derecha y de arriba hacia abajo.</h4>

        <div>
          <BracketTorneo torneo={torneo} settorneo={settorneo} inputbracket={inputbracket}></BracketTorneo>
        </div>

      </form>
    </div>
  )

}
