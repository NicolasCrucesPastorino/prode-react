import Preliminares from "../../parts/Preliminares";
import ConsumerProdeContext from "../../ProdeProvider";

const ProdeUsuarioLogic = () => {

  const hook = ConsumerProdeContext()
  return (
      <div>
        <button onClick={() => console.log(hook.resultados)}>Guardar</button>
        <h2>Ronda de Grupos</h2>
        <Preliminares />
      </div>
  )
};

export default ProdeUsuarioLogic;
