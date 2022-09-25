import React from "react";
import { useEffect, useState } from "react";
import { getAllProdesResultados } from "./../database/services/resultadosService";
import { FilaResultado } from "../Components/FilaResultado";

export const Tabla = () => {
  const [resultados, setresultados] = useState([]);

  useEffect(() => {
    getAllProdesResultados().then((r) => {
      const ordenarpuntajemayor = (a, b) => {
        if (a.puntajetotal > b.puntajetotal) {
          return 1;
        } else {
          return -1;
        }
      };
      r.sort(ordenarpuntajemayor);
      setresultados(r);
      console.log("tabla", resultados);
    });
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
            <p>sin resultados</p>
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
