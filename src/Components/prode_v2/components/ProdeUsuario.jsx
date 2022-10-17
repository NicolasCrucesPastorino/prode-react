import React, {useState, useEffect} from "react";
import Preliminares from "../parts/Preliminares";
import ConsumerProdeContext, { ProdeProvider } from "../ProdeProvider";
import {getprodeporid, storeUserProde} from './../../../database/services/prodeService'

const ProdeUsuario = ({ uid, isEditable = true }) => {
  const prode = ConsumerProdeContext();

  const handleOnClick = () => {
    alert("hola");
  };

  return (
    <>
      <button onClick={handleOnClick}>boton</button>
      <h1>
        Prode de <span>Usuario</span>
      </h1>
      <Preliminares />
    </>
  );
};

const ProdeUsuarioWithContext = ({uid}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [globalProde, setGlobalProde] = useState({})
  
  useEffect(
    () => {
      const getProdeById = async (uid='') => {
        console.log('id', uid)
        const prode = await getprodeporid(uid)
        console.log('prode', prode);
        try {
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

    },[])
    
  return(
      <>
        <h1>prode usuario id: {uid}</h1>
        <p>{globalProde.resultados?<span>valor { globalProde.resultados[0].partidos[0].partidoid}</span> : <span>sin resultados</span>}</p>
      </>
  )
}

export default ProdeUsuarioWithContext
