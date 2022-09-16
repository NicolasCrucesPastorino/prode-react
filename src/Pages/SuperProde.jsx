import React from 'react'
import { puntaje } from '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()
  const storeandupdateprodes = async (uid,formprode) => {
    await firestore.storesuperprode(uid,formprode)

    const prodesdeusuarios = await firestore.getAllProdesUsuarios()
   console.log('prous',prodesdeusuarios)
   

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
