// unit test useProde hook from src/Components/prode_v2/ProdeProvider/useProde
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Grupo from "../../prode/preliminares/Models/Grupo";
import Partido from "../../prode/preliminares/Models/Partido";
import { useProde } from "./useProde";

const prodeMok = {
  torneo: {
    cuartos: [
      {
        nombre: "Bélgica",
        formKey: "cuartos-d-1",
        puntos: 0,
      },
      {
        nombre: "Inglaterra",
        formKey: "cuartos-c-1",
        puntos: 0,
      },
      {
        nombre: "Brasil",
        formKey: "cuartos-b-2",
        puntos: 0,
      },
      {
        nombre: "Portugal",
        formKey: "cuartos-d-2",
        puntos: 0,
      },
      {
        nombre: "Canadá",
        formKey: "cuartos-b-1",
        puntos: 0,
      },
      {
        nombre: "Arabia Saudita",
        formKey: "cuartos-c-2",
        puntos: 0,
      },
      {
        nombre: "Ecuador",
        formKey: "cuartos-a-1",
        puntos: 0,
      },
      {
        nombre: "Argentina",
        formKey: "cuartos-a-2",
        puntos: 0,
      },
    ],
    semi: [
      {
        nombre: "Bélgica",
        formKey: "semi-b-2",
        puntos: 0,
      },
      {
        nombre: "Ecuador",
        formKey: "semi-a-1",
        puntos: 0,
      },
      {
        nombre: "Inglaterra",
        formKey: "semi-b-1",
        puntos: 0,
      },
      {
        nombre: "Canadá",
        formKey: "semi-a-2",
        puntos: 0,
      },
    ],
    final: [
      {
        nombre: "Ecuador",
        formKey: "final-a",
        puntos: 0,
      },
      {
        nombre: "Inglaterra",
        formKey: "final-b",
        puntos: 0,
      },
    ],
    campeon: [
      {
        nombre: "Ecuador",
        formKey: "campeon",
        puntos: 0,
      },
    ],
    tercero: [
      {
        nombre: "Canadá",
        formKey: "tercero",
        puntos: 0,
      },
    ],
  },
  octavos: {
    "1-d": "Dinamarca",
    "1-e": "España",
    "1-f": "Marruecos",
    "2-g": "Camerún",
    "2-h": "Corea del sur",
    "2-f": "Croacia",
    "1-a": "Ecuador",
    "1-c": "Argentina",
    "1-h": "Ghana",
    "1-g": "Brasil",
    "2-e": "Costa Rica",
    "1-b": "Estados Unidos",
    "2-d": "Australia",
    "2-c": "Polonia",
    "2-a": "Catar",
    "2-b": "Gales",
  },
  /* no carga bien los datos de los grupos */
  /*
  resultados: [
    {
      partidoid: "A-Senegal-Paises bajos",
      puntaje: 2,
    },
    {
      partidoid: "A-Catar-Ecuador",
      puntaje: 0,
    },
    {
      partidoid: "A-Catar-Senegal",
      puntaje: 0,
    },
    {
      partidoid: "A-Paises bajos-Ecuador",
      puntaje: 0,
    },
    {
      partidoid: "A-Ecuador-Senegal",
      puntaje: 3,
    },
    {
      partidoid: "A-Paises bajos-Catar",
      puntaje: 3,
    },
    {
      partidoid: "B-Inglaterra-Irán",
      puntaje: 3,
    },
    {
      partidoid: "B-Estados Unidos-Gales",
      puntaje: 3,
    },
    {
      partidoid: "B-Gales-Irán",
      puntaje: 3,
    },
    {
      partidoid: "B-Inglaterra-Estados Unidos",
      puntaje: 3,
    },
    {
      partidoid: "B-Gales-Inglaterra",
      puntaje: 3,
    },
    {
      partidoid: "B-Irán-Estados Unidos",
      puntaje: 3,
    },
    {
      partidoid: "C-Argentina-Arabia Saudita",
      puntaje: 3,
    },
    {
      partidoid: "C-México-Polonia",
      puntaje: 3,
    },
    {
      partidoid: "C-Polonia-Arabia Saudita",
      puntaje: 3,
    },
    {
      partidoid: "C-Argentina-México",
      puntaje: 3,
    },
    {
      partidoid: "C-Polonia-Argentina",
      puntaje: 3,
    },
    {
      partidoid: "C-Arabia Saudita-México",
      puntaje: 3,
    },
    {
      partidoid: "D-Dinamarca-Túnez",
      puntaje: 3,
    },
    {
      partidoid: "D-Francia-Australia",
      puntaje: 3,
    },
    {
      partidoid: "D-Túnez-Australia",
      puntaje: 3,
    },
    {
      partidoid: "D-Francia-Dinamarca",
      puntaje: 3,
    },
    {
      partidoid: "D-Australia-Dinamarca",
      puntaje: 3,
    },
    {
      partidoid: "D-Túnez-Francia",
      puntaje: 3,
    },
    {
      partidoid: "E-Alemania-Japón",
      puntaje: 3,
    },
    {
      partidoid: "E-España-Costa Rica",
      puntaje: 3,
    },
    {
      partidoid: "E-Japón-Costa Rica",
      puntaje: 3,
    },
    {
      partidoid: "E-España-Alemania",
      puntaje: 3,
    },
    {
      partidoid: "E-Japón-España",
      puntaje: 3,
    },
    {
      partidoid: "E-Costa Rica-Alemania",
      puntaje: 3,
    },
    {
      partidoid: "F-Marruecos-Croacia",
      puntaje: 3,
    },
    {
      partidoid: "F-Bélgica-Canadá",
      puntaje: 3,
    },
    {
      partidoid: "F-Bélgica-Marruecos",
      puntaje: 3,
    },
    {
      partidoid: "F-Croacia-Canadá",
      puntaje: 3,
    },
    {
      partidoid: "F-Croacia-Bélgica",
      puntaje: 3,
    },
    {
      partidoid: "F-Canadá-Marruecos",
      puntaje: 3,
    },
    {
      partidoid: "G-Suiza-Camerún",
      puntaje: 3,
    },
    {
      partidoid: "G-Brasil-Serbia",
      puntaje: 3,
    },
    {
      partidoid: "G-Camerún-Serbia",
      puntaje: 3,
    },
    {
      partidoid: "G-Brasil-Suiza",
      puntaje: 3,
    },
    {
      partidoid: "G-Serbia-Suiza",
      puntaje: 3,
    },
    {
      partidoid: "G-Camerún-Brasil",
      puntaje: 3,
    },
    {
      partidoid: "H-Uruguay-Corea del sur",
      puntaje: 3,
    },
    {
      partidoid: "H-Portugal-Ghana",
      puntaje: 3,
    },
    {
      partidoid: "H-Corea del sur-Ghana",
      puntaje: 3,
    },
    {
      partidoid: "H-Portugal-Uruguay",
      puntaje: 3,
    },
    {
      partidoid: "H-Ghana-Uruguay",
      puntaje: 3,
    },
    {
      partidoid: "H-Corea del sur-Portugal",
      puntaje: 3,
    },
  ],*/
  puntajetotal: 134,
};

describe("useProde", () => {
  it("should return an resultados object with default parameters", () => {
    const { result } = renderHook(() => useProde());
    const { resultados } = result.current;

    console.log(result.current);
    expect(resultados).not.toBeUndefined();
    // expect any element of the array to be an Grupo object
    expect(resultados.every((grupo) => grupo instanceof Grupo)).toBeTruthy();
    resultados.forEach((grupo) => {
      expect(grupo.nombre).not.toBeUndefined();
      expect(grupo.partidos).not.toBeUndefined();
      expect(
        grupo.partidos.every((partido) => partido instanceof Partido)
      ).toBeTruthy();
      expect(grupo.partidos.length).toBe(6);
      grupo.partidos.forEach((partido) => {
        expect(partido.golesequipoA).toBe("");
        expect(partido.golesequipoB).toBe("");
      });
    });
  });

  it("should return a partido by partidoId", () => {
    const { result } = renderHook(() => useProde());
    const { resultados } = result.current;
    const partido = resultados[0].partidos[0];
    const partidoById = result.current.getPartidoById(partido.partidoid);
    expect(partidoById).not.toBeUndefined();
    expect(partidoById).toBe(partido);
  });

  it("should update a partido", () => {
    const { result } = renderHook(() => useProde());
    const { resultados, updatePartido } = result.current;
    const partido = resultados[0].partidos[0];
    console.log(partido);
    updatePartido(partido.partidoid, "1", "2");
    const partidoUpdate = result.current.getPartidoById(partido.partidoid);
    expect(partidoUpdate.golesequipoA).toBe("1");
    expect(partidoUpdate.golesequipoB).toBe("2");
  });

  it.skip("should return an resultados object with the given parameters", () => {
    const { result } = renderHook(() => useProde(prodeMok));
    const { resultados, getPartidosByGroupName } = result.current;

    console.log(result.current);
    expect(resultados).not.toBeUndefined();
    // expect any element of the array to be an Grupo object
    expect(resultados.every((grupo) => grupo instanceof Grupo)).toBeTruthy();
    expect(resultados.length).toBe(8);

    expect(getPartidosByGroupName("A")).not.toBeUndefined();
    expect(getPartidosByGroupName("A").length).toBe(6);
  });

  it("should return an octavos object with default parameters", () => {
    const { result } = renderHook(() => useProde());
    const { octavos } = result.current;
    console.log(octavos);
    expect(octavos).not.toBeUndefined();
    expect(
      Object.keys(octavos).every((key) => octavos[key] === "")
    ).toBeTruthy();
  });

  it("should return an octavos object with the given parameters", () => {
    const { result } = renderHook(() => useProde(prodeMok));
    const { octavos } = result.current;
    console.log(octavos);
    expect(octavos).not.toBeUndefined();
    expect(octavos["1-a"]).toBe("Ecuador");
    expect(octavos["1-c"]).toBe("Argentina");
  });

  it('should return an octavos object with the given parameters and update the "1-a" key', () => {
    const { result } = renderHook(() => useProde(prodeMok));
    const { octavos, updateOctavos } = result.current;

    expect(octavos).not.toBeUndefined();
    act(() => {
      updateOctavos("1-a", "Argentina");
    });

    expect(result.current.getOctavoByKey("1-a")).toBe("Argentina");
  });

  it("should throw an error if octavos key is not valid", () => {
    const { result } = renderHook(() => useProde(prodeMok));
    const { updateOctavos } = result.current;
    expect(() => updateOctavos("1-x", "Argentina")).toThrowError(
      "Invalid octavos key"
    );
  });

  it("should return a string valure from getOctavosByKey", () => {
    const { result } = renderHook(() => useProde(prodeMok));
    const { getOctavoByKey } = result.current;
    expect(getOctavoByKey("1-a")).toBe("Ecuador");
    expect(() => getOctavoByKey("1-x")).toThrowError("Invalid octavos key");
  });
});
