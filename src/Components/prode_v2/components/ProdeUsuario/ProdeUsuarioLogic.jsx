import { useState } from "react";
import Loading from "../../../Loading";
import SuccessToast, { showToast } from "../../../toasts/SuccessToast";
import Octavos from "../../parts/Octavos";
import Preliminares from "../../parts/Preliminares";
import Torneo from "../../parts/Torneo";
import ConsumerProdeContext from "../../ProdeProvider";
import { storeUserProde } from "./../../../../database/services/prodeService";

const ProdeUsuarioLogic = ({ uid, isEditable = true }) => {
  const { prode } = ConsumerProdeContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClickToSave = async () => {
    try {
      setIsLoading(true);
      await storeUserProde(uid, prode);
      setIsLoading(false);
      showToast("⚽ Prode guardado!");
    } catch (error) {
      console.error(error);
      alert("Error al guardar el prode");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <SuccessToast />
          {isEditable && (
            <button className="prodeboton" onClick={handleOnClickToSave}>
              Guardar
            </button>
          )}
          <h2>Ronda de Grupos</h2>
          <Preliminares />
          <Octavos />
          <Torneo />
        </div>
      )}
    </>
  );
};

export default ProdeUsuarioLogic;
