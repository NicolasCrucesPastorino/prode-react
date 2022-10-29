import { getAll, getById, store } from "./../firebaseService";
import { firebaseFolder } from "../firebaseFolders";

export const getresultadosuserprode = async (uid) => {
  try {
    return await getById(uid, firebaseFolder.RESULTADOS);
  } catch (error) {
    throw error;
  }
};

export const storeresultadosuserprode = async (uid, resultados) => {
  try {
    return await store(uid, firebaseFolder.RESULTADOS, resultados);
  } catch (error) {
    throw error;
  }
};

export const getAllProdesResultados = async () => {
  try {
    return await getAll(firebaseFolder.RESULTADOS);
  } catch (error) {
    throw error;
  }
};

export const getPuntajeTotalById = async (uid) => {
  const resultados = await getresultadosuserprode(uid);
  const puntajetorneo = Object.values(resultados.torneo).reduce(
    (a, b) => a + b,
    0
  );
  const puntajepreliminar = Object.values(resultados.preliminares).reduce(
    (a, b) => a + b,
    0
  );
  return puntajetorneo + puntajepreliminar;
};
