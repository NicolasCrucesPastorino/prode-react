import { getById, store } from "./../firebaseService";
import { firebaseFolder } from "../firebaseFolders";
import { resultadosconverter } from "../../utils/resultadosConverter";

export const getsuperprodeporid = async (uid) => {
  try {
    const prodeFromFirestore = await getById(uid, firebaseFolder.SUPER_PRODE);
    const prode = {
      ...prodeFromFirestore,
      resultados: resultadosconverter.toObject(prodeFromFirestore.resultados),
    };
    return prode;
  } catch (e) {
    throw e;
  }
};

export const storesuperprode = async (uid, superProde) => {
  try {
    const superProdeMapeado = {
      ...superProde,
      resultados: resultadosconverter.toFirestore(superProde.resultados),
    };
    return await store(uid, firebaseFolder.SUPER_PRODE, superProdeMapeado);
  } catch (e) {
    throw e;
  }
};
