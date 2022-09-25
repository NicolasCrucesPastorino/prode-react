import { etapa } from "../Constantes";
import { getAllProdesUsuarios } from "./../database/services/prodeService";
import { storeresultadosuserprode } from "./../database/services/resultadosService";
import { TuProdeGenerico } from "./../Components/prode/TuProdeGenerico";
import {
  getsuperprodeporid,
  storesuperprode,
} from "./../database/services/superProdeService";
import {
  calcularPuntosTorneo,
  calcularPuntosPreliminar,
  calcularpuntajetotal,
} from "../utils/superprodefunctions";

export const SuperProde = () => {
  const getsuperprode = getsuperprodeporid;

  const storeandupdateprodes = async (uid, formprode) => {
    await storesuperprode(uid, formprode);
    const prodesdeusuarios = await getAllProdesUsuarios();

    prodesdeusuarios.forEach((prodeUsuario) => {
      const resultadoPuntaje = { torneo: {} };
      resultadoPuntaje.preliminares = calcularPuntosPreliminar(
        prodeUsuario,
        formprode
      );
      Object.values(etapa).forEach((nombreetapa) => {
        const puntaje = calcularPuntosTorneo(
          prodeUsuario,
          formprode,
          nombreetapa
        );
        resultadoPuntaje.torneo[nombreetapa] = puntaje;
      });
      const resultadoPuntajemastotal = calcularpuntajetotal(resultadoPuntaje);

      storeresultadosuserprode(prodeUsuario.userid, resultadoPuntajemastotal);
    });
  };

  return (
    <div>
      <TuProdeGenerico
        onSubmitFinalStrategy={storeandupdateprodes}
        validarcamposvacios={false}
        getprode={getsuperprode}
      />
    </div>
  );
};
