import { equipos } from "../../../Constantes"
import { GrupoPreliminar } from "./GrupoPreliminar";
import Grupo from "./Models/Grupo";


export const Preliminares = (props) => {
    const resultados = props.resultados;
    const setresultados = props.setresultados; 
    const uid = props.uid;

    const {
        grupoA,
        grupoB,
        grupoC,
        grupoD,
        grupoE,
        grupoF,
        grupoG,
        grupoH
    } = equipos
    
    const grupos = [
        { nombre: 'A', partidos: [{ equipoA: grupoA.SENEGAL, equipoB: grupoA.PAISES_BAJOS }, { equipoA: grupoA.CATAR, equipoB: grupoA.ECUADOR }, { equipoA: grupoA.CATAR, equipoB: grupoA.SENEGAL }, { equipoA: grupoA.PAISES_BAJOS, equipoB: grupoA.ECUADOR }, { equipoA: grupoA.ECUADOR, equipoB: grupoA.SENEGAL }, { equipoA: grupoA.PAISES_BAJOS, equipoB: grupoA.CATAR }] },
        { nombre: 'B', partidos: [{ equipoA: grupoB.INGLATERRA, equipoB: grupoB.IRAN }, { equipoA: grupoB.ESTADOS_UNIDOS, equipoB: grupoB.GALES }, { equipoA: grupoB.GALES, equipoB: grupoB.IRAN }, { equipoA: grupoB.INGLATERRA, equipoB: grupoB.ESTADOS_UNIDOS }, { equipoA: grupoB.GALES, equipoB: grupoB.INGLATERRA }, { equipoA: grupoB.IRAN, equipoB: grupoB.ESTADOS_UNIDOS }] },
        { nombre: 'C', partidos: [{ equipoA: grupoC.ARGENTINA, equipoB: grupoC.ARABIA_SAUDITA }, { equipoA: grupoC.MEXICO, equipoB: grupoC.POLONIA }, { equipoA: grupoC.POLONIA, equipoB: grupoC.ARABIA_SAUDITA }, { equipoA: grupoC.ARGENTINA, equipoB: grupoC.MEXICO }, { equipoA: grupoC.POLONIA, equipoB: grupoC.ARGENTINA }, { equipoA: grupoC.ARABIA_SAUDITA, equipoB: grupoC.MEXICO }] },
        { nombre: 'D', partidos: [{ equipoA: grupoD.DINAMARCA, equipoB: grupoD.TUNEZ }, { equipoA: grupoD.FRANCIA, equipoB: grupoD.AUSTRALIA }, { equipoA: grupoD.TUNEZ, equipoB: grupoD.AUSTRALIA }, { equipoA: grupoD.FRANCIA, equipoB: grupoD.DINAMARCA }, { equipoA: grupoD.AUSTRALIA, equipoB: grupoD.DINAMARCA }, { equipoA: grupoD.TUNEZ, equipoB: grupoD.FRANCIA }] },
        { nombre: 'E', partidos: [{ equipoA: grupoE.ALEMANIA, equipoB: grupoE.JAPON }, { equipoA: grupoE.ESPANIA, equipoB: grupoE.COSTA_RICA }, { equipoA: grupoE.JAPON, equipoB: grupoE.COSTA_RICA }, { equipoA: grupoE.ESPANIA, equipoB: grupoE.ALEMANIA }, { equipoA: grupoE.JAPON, equipoB: grupoE.ESPANIA }, { equipoA: grupoE.COSTA_RICA, equipoB: grupoE.ALEMANIA }] },
        { nombre: 'F', partidos: [{ equipoA: grupoF.MARRUECOS, equipoB: grupoF.CROACIA }, { equipoA: grupoF.BELGICA, equipoB: grupoF.CANADA }, { equipoA: grupoF.BELGICA, equipoB: grupoF.MARRUECOS }, { equipoA: grupoF.CROACIA, equipoB: grupoF.CANADA }, { equipoA: grupoF.CROACIA, equipoB: grupoF.BELGICA }, { equipoA: grupoF.CANADA, equipoB: grupoF.MARRUECOS }] },
        { nombre: 'G', partidos: [{ equipoA: grupoG.SUIZA, equipoB: grupoG.CAMERUN }, { equipoA: grupoG.BRASIL, equipoB: grupoG.SERBIA }, { equipoA: grupoG.CAMERUN, equipoB: grupoG.SERBIA }, { equipoA: grupoG.BRASIL, equipoB: grupoG.SUIZA }, { equipoA: grupoG.SERBIA, equipoB: grupoG.SUIZA }, { equipoA: grupoG.CAMERUN, equipoB: grupoG.BRASIL }] },
        { nombre: 'H', partidos: [{ equipoA: grupoH.URUGUAY, equipoB: grupoH.COREA_DEL_SUR }, { equipoA: grupoH.PORTUGAL, equipoB: grupoH.GHANA }, { equipoA: grupoH.COREA_DEL_SUR, equipoB: grupoH.GHANA }, { equipoA: grupoH.PORTUGAL, equipoB: grupoH.URUGUAY }, { equipoA: grupoH.GHANA, equipoB: grupoH.URUGUAY }, { equipoA: grupoH.COREA_DEL_SUR, equipoB: grupoH.PORTUGAL }] }
      ]

    const objetogrupos = grupos.map(grupo => new Grupo(grupo.nombre, grupo.partidos))
 
    if(resultados.length === 0) {
        setresultados(objetogrupos)
    }
    
    return (
        <div className='container row mx-auto'>
            {
                resultados.map(grupoPreliminar =>(
                    <GrupoPreliminar
                        key={grupoPreliminar.nombre}
                        nombre={grupoPreliminar.nombre}
                        partidos={grupoPreliminar.partidos}
                        resultados={resultados}
                        setresultados={setresultados}
                        
                    />
                ))
            }
        </div>
    )
}