import React from 'react'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()
  const storeandupdateprodes = async (uid,formprode) => {
    await firestore.storesuperprode(uid,formprode)
    const prodesdeusuarios = await firestore.getAllProdesUsuarios()
    const prodesdeusuariospuntuado = prodesdeusuarios.map(prodedeusuario => {
      
    })
  }

  return (
    <div>
      
      <TuProdeGenerico onSubmitFinalStrategy={storeandupdateprodes} validarcamposvacios={false}/>
        
    </div>
  )
}
