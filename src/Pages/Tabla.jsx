import React from "react";
import { useEffect, useState } from "react";
import { getAllProdesResultados } from "./../database/services/resultadosService";
import { FilaResultado } from "../Components/FilaResultado";

export const Tabla = () => {
  const [resultados, setresultados] = useState([]);

  useEffect(() => {
    const obteneryordenarresultados = async () => {
      const resultados = await getAllProdesResultados()
      const ordenarpuntajemayor = (a, b) => {
        if (a.puntajetotal < b.puntajetotal) {
          return 1;
        } else {
          return -1;
        }
      };

      if(resultados && resultados.length > 0){
          const resultadosordenados = resultados.sort(ordenarpuntajemayor)
          console.log('resord',resultadosordenados)
          setresultados(resultadosordenados)
      }
    }
    obteneryordenarresultados().then();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Puesto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {resultados.length === 0 ? (
            <tr><td>sin resultados</td> </tr>
          ) : (
            resultados.map((resultado, index) => (
              <FilaResultado index={index} resultado={resultado} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
