import React from 'react'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()


  return (
    <div>
      
      <TuProdeGenerico storedestiny={firestore.storesuperprode}/>
        
    </div>
  )
}
