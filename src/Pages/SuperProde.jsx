import React from 'react'
import { puntaje } from '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()
  const storeandupdateprodes = async (uid,formprode) => {
    await firestore.storesuperprode(uid,formprode)

    const prodesdeusuarios = await firestore.getAllProdesUsuarios()
   
    prodesdeusuarios.forEach(prodeusuario => {
    const puntajepreliminares = []
    prodeusuario.resultados.forEach((grupo) => {
      grupo.partidos.forEach((partido)=> {
        const superprodegrupo = formprode.resultados.find(g =>  g.nombre === partido.gruponombre())
        const superprodepartido = superprodegrupo.partidos.find(p => p.partidoid === partido.partidoid)
        let puntospartido = puntaje.puntajepreliminar.SIN_COINCIDENCIA
        if(partido.golesequipoA === superprodepartido.golesequipoA && partido.golesequipoB === superprodepartido.golesequipoB){

          puntospartido = puntaje.puntajepreliminar.COINCIDENCIA_TOTAL
        } else if(partido.resultado() === superprodepartido.resultado() ){
          puntospartido = puntaje.puntajepreliminar.COINCIDENCIA_PARCIAL
        } else {
          puntospartido = puntaje.puntajepreliminar.SIN_COINCIDENCIA
        }
        console.log('punt',partido,puntospartido)
        puntajepreliminares.push({partidoid:partido.partidoid,puntaje:puntospartido})
      })
    })
    const resultados = {}
    resultados.preliminares = puntajepreliminares

    const nombrescuartossuperprode = Object.keys(formprode.torneo).filter(nombre => nombre.includes('cuartos'))
    const equiposencuartossuperprode = nombrescuartossuperprode.map(nombre => formprode.torneo[nombre])
    prodesdeusuarios.forEach(prodeusuario => {
      const puntajecuartos = []
      const nombrescuartos = Object.keys(prodeusuario.torneo).filter(nombre => nombre.includes('cuartos'))
      const equiposencuartos = nombrescuartos.map(nombre => prodeusuario.torneo[nombre])
      let nombreformulariotorneo
      equiposencuartos.forEach(equipo => {
        
        nombreformulariotorneo = nombrescuartos[equiposencuartossuperprode.indexOf(equipo)]

        let puntajeaguardar = {}
        const coincidencia = equiposencuartossuperprode.some((resultado) => resultado===equipo)
        
        if(coincidencia===true){
          puntajeaguardar = {puntos: 8,torneoid:nombreformulariotorneo}
        } else {
          puntajeaguardar = {puntos: 0,torneoid:nombreformulariotorneo}
        }
        puntajecuartos.push(puntajeaguardar)
      })
      resultados.cuartos = puntajecuartos
      console.log('res for',nombreformulariotorneo)
    })


    firestore.storeresultadosuserprode(prodeusuario.userid, resultados)
   })
  }
  const getsuperprode = firestore.getsuperprodeporid
  return (
    <div>
      
      <TuProdeGenerico onSubmitFinalStrategy={storeandupdateprodes} validarcamposvacios={false} getprode = {getsuperprode}/>
        
    </div>
  )
}
