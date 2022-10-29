import { equipos } from "../../../../Constantes";
import PrimeroYsegundo from "./PrimeroYsegundo";
const Octavos = () => {
  const convertirGrupoNombreALetraMinuscula = (nombreGrupo = "") => {
    const letraMinuscula = nombreGrupo.split("grupo")[1].toLowerCase();
    return letraMinuscula;
  };


  return (
    <>
      <h2>Octavos</h2>
      <section>
        {Object.keys(equipos).map((grupoNombre, index) => (
          <PrimeroYsegundo
            key={new Date().getTime() + index}
            nombreGrupo={convertirGrupoNombreALetraMinuscula(grupoNombre)}
            equipos={Object.values(equipos[grupoNombre])}
          />
        ))}
      </section>
    </>
  );
};

export default Octavos;
