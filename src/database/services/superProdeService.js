import { getById, store, getAll } from './../firebaseService';
import { firebaseFolder } from '../firebaseFolders';
import { resultadosconverter } from '../../utils/resultadosConverter';

/***
 * @param {string} uid
 * @param {string} folder
 * @returns {Promise<firebase.firestore.DocumentData>} | null
 */
export const getsuperprodeporid = async uid => {
	try {
		const prodeFromFirestore = await getById(
			uid,
			firebaseFolder.SUPER_PRODE,
		);
		return prodeFromFirestore === null
			? null
			: {
					...prodeFromFirestore,
					resultados: resultadosconverter.toObject(
						prodeFromFirestore.resultados,
					),
			  };
	} catch (e) {
		throw e;
	}
};

export const getSuperProde = async () => {
	try {
		const superProdesFromFirebase = await getAll(
			firebaseFolder.SUPER_PRODE,
		);
		const prodes = superProdesFromFirebase.map(prodeFromFirestore => ({
			...prodeFromFirestore,
			resultados: resultadosconverter.toObject(
				prodeFromFirestore.resultados,
			),
		}));

		return prodes[0];
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
