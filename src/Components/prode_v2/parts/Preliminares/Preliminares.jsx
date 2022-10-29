import Grupo from "./Grupo";
import ConsumerProdeContext from "../../ProdeProvider";

const Preliminares = () => {
  const { resultados } = ConsumerProdeContext();
  return (
    <div className="container row mx-auto">
      {resultados.map((grupoPreliminar) => (
        <Grupo
          key={grupoPreliminar.nombre}
          nombre={grupoPreliminar.nombre}
          partidos={grupoPreliminar.partidos}
        />
      ))}
    </div>
  );
};

export default Preliminares
