import React from 'react'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()
  const storeandupdateprodes = async (uid,formprode) => {
    await firestore.storesuperprode(uid,formprode)

    const prodesdeusuarios = await firestore.getAllProdesUsuarios()
   console.log('prous',prodesdeusuarios)
   const puntajepreliminares = []

   prodesdeusuarios.forEach(prodeusuario => {
    prodeusuario.resultados.forEach((grupo,index) => {
      grupo.partidos.forEach((partido,index)=> {console.log('part',partido)})
    })
   })
  }
  const getsuperprode = firestore.getsuperprodeporid
  return (
    <div>
      
      <TuProdeGenerico onSubmitFinalStrategy={storeandupdateprodes} validarcamposvacios={false} getprode = {getsuperprode}/>
        
    </div>
  )
}
