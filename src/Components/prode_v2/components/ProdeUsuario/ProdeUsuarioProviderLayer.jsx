import React, {useState, useEffect} from "react";
import { ProdeProvider } from "../../ProdeProvider";
import {getprodeporid} from '../../../../database/services/prodeService'

const ProdeUsuarioProviderLayer = ({uid, children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [globalProde, setGlobalProde] = useState({})
    
    useEffect(
      () => {
        const getProdeById = async (uid='') => {
          try {
            const prode = await getprodeporid(uid)
            setIsLoading(false)
            setGlobalProde(prode)
            setIsLoading(true)
          }catch (error) {
            console.error(error)
            setIsLoading(false)
            throw new Error(error)
        }
      }
      getProdeById(uid)
        .then(() => {
          console.log('Prode cargado')
        })
        .catch((error) => {
          console.error(error)
        })
  
      },[uid])
      
    return(
        <>
          {
            isLoading === false ? (
              <h2>Cargando...</h2>
            ) : (
              <ProdeProvider prode={globalProde}>
                <h1>prode usuario id: {uid}</h1>
                {children}
              </ProdeProvider>
            )
          }
        </>
    )
  }

    export default ProdeUsuarioProviderLayer