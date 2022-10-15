import { useState } from "react"
import { gruposEtapaPreliminares } from "../../../constants/grupos_etapa_preliminares";
import Grupo from "../../prode/preliminares/Models/Grupo";

export const useProde = (_resultados=[], _octavos, _torneo, _puntos) => {
    if(_resultados && !_resultados.every((grupo) => grupo instanceof Grupo)){
        throw new Error("Resultados must be an array of Grupo objects");
    }

    const resultadosPorDefecto = gruposEtapaPreliminares.map(grupo => new Grupo(grupo.nombre, grupo.partidos))
    const resultadosIniciales  = _resultados && _resultados.length > 0 ? _resultados : resultadosPorDefecto;
    
    
    const [resultados, _setResultados] = useState(resultadosIniciales)
    const [octavos, _setOctavos] = useState([])
    const [torneo, _setTorneo] = useState([])
    const [puntos, _setPuntos] = useState([])


    return {
        resultados,
        octavos,
        torneo,
    }
}