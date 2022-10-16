import React from "react";
import Preliminares from "../parts/Preliminares";
import ConsumerProdeContext, { ProdeProvider } from "../ProdeProvider";

const ProdeUsuario = ({ uid, isEditable = true }) => {
  const prode = ConsumerProdeContext();
  console.log(prode);

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

const ProdeUsuarioWithContext = (props) => (
  <ProdeProvider>
    <ProdeUsuario />
  </ProdeProvider>
);
export default ProdeUsuarioWithContext;
