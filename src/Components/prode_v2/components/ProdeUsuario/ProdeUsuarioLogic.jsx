import Octavos from "../../parts/Octavos";
import Preliminares from "../../parts/Preliminares";
import Torneo from "../../parts/Torneo";
import ConsumerProdeContext from "../../ProdeProvider";
import { storeUserProde } from "./../../../../database/services/prodeService";

const ProdeUsuarioLogic = ({ uid }) => {
  const { prode } = ConsumerProdeContext();

  const handleOnClick = async () => {
    try {
      //await storeUserProde(uid, prode);
      console.log("prode", prode);
      // alert("Prode guardado");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el prode");
    }
  };

  return (
    <div>
      <button
        className="prodeboton"
        onClick={handleOnClick}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          zIndex: 100,
        }}
      >
        Guardar
      </button>
      <h2>Ronda de Grupos</h2>
      <Preliminares />
      <Octavos />
      <Torneo />
    </div>
  );
};

export default ProdeUsuarioLogic;
