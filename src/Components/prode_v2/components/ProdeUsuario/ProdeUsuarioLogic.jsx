import Octavos from "../../parts/Octavos";
import Preliminares from "../../parts/Preliminares";
import ConsumerProdeContext from "../../ProdeProvider";
import { storeUserProde } from "./../../../../database/services/prodeService";

const ProdeUsuarioLogic = ({ uid }) => {
  const { prode } = ConsumerProdeContext();

  const handleOnClick = async () => {
    try {
      await storeUserProde(uid, prode);
      alert("Prode guardado");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el prode");
    }
  };

  return (
    <div>
      <button onClick={handleOnClick}>Guardar</button>
      <h2>Ronda de Grupos</h2>
      <Preliminares />
      <Octavos />
    </div>
  );
};

export default ProdeUsuarioLogic;
