import { useState } from "react";
import { gruposEtapaPreliminares } from "../../../constants/grupos_etapa_preliminares";
import Grupo from "../../prode/preliminares/Models/Grupo";

export const useProde = (prode = {}, puntos = []) => {
  const resultadosPorDefecto = gruposEtapaPreliminares.map(
    (grupo) => new Grupo(grupo.nombre, grupo.partidos)
  );
  const { resultados = resultadosPorDefecto } = prode;

  if (resultados && !resultados.every((grupo) => grupo instanceof Grupo)) {
    throw new Error("Resultados must be an array of Grupo objects");
  }

  const [_resultados, _setResultados] = useState(resultados);
  const [_octavos, _setOctavos] = useState([]);
  const [_torneo, _setTorneo] = useState([]);
  const [_puntos, _setPuntos] = useState([]);

  function getPartidoById(id) {
    const groupName = id.split("-")[0];
    return _resultados
      .find((grupo) => grupo.nombre === groupName)
      .partidos.find((partido) => partido.partidoid === id);
  }

  function updatePartido(partidoId, golesequipoA = "", golesequipoB = "") {
    const partido = getPartidoById(partidoId);
    _setResultados(
      _resultados.map((grupo) => {
        if (grupo.nombre === partido.gruponombre()) {
          grupo.partidos = grupo.partidos.map((partido) => {
            if (partido.partidoid === partidoId) {
              partido.setgolesequipoA(golesequipoA);
              partido.setgolesequipoB(golesequipoB);
            }
            return partido;
          });
        }
        return grupo;
      })
    );
  }

  return {
    resultados: _resultados,
    getPartidoById,
    updatePartido,
    // octavos,
    // torneo,
  };
};
