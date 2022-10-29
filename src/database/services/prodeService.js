import { getAll, getById, store } from "./../firebaseService";
import { firebaseFolder } from "../firebaseFolders";
import { resultadosconverter } from "../../utils/resultadosConverter";

export const getAllProdesUsuarios = async () => {
  try {
    const prodesFromFirebase = await getAll(firebaseFolder.PRODES);
    const prodes = prodesFromFirebase.map((prodeFromFirestore) => ({
      ...prodeFromFirestore,
      resultados: resultadosconverter.toObject(prodeFromFirestore.resultados),
    }));

    return prodes;
  } catch (e) {
    throw e;
  }
};

export const getprodeporid = async (uid) => {
  try {
    const prodeFromFirestore = await getById(uid, firebaseFolder.PRODES);
    return prodeFromFirestore === null
      ? null
      : {
          ...prodeFromFirestore,
          resultados: resultadosconverter.toObject(
            prodeFromFirestore.resultados
          ),
        };
  } catch (e) {
    throw e;
  }
};

export const storeUserProde = async (uid, prode) => {
  try {
    const prodeMapeado = {
      ...prode,
      resultados: resultadosconverter.toFirestore(prode.resultados),
    };
    return await store(uid, firebaseFolder.PRODES, prodeMapeado);
  } catch (e) {
    throw e;
  }
};
