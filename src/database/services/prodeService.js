import { getAll, getById, store } from './../firebaseService';
import { firebaseFolder } from '../firebaseFolders';
import { resultadosconverter } from '../../utils/resultadosConverter';

export const getAllProdesUsuarios = async () => {
	const prodesFromFirebase = await getAll(firebaseFolder.PRODES);
	const prodes = prodesFromFirebase.map(prodeFromFirestore => ({
		...prodeFromFirestore,
		resultados: resultadosconverter.toObject(prodeFromFirestore.resultados),
	}));

	return prodes;
};

export const getprodeporid = async uid => {
	if (!uid) throw new Error('No se ha especificado el uid del usuario');

	const prodeFromFirestore = await getById(uid, firebaseFolder.PRODES);
	return prodeFromFirestore === null
		? null
		: {
				...prodeFromFirestore,
				resultados: resultadosconverter.toObject(
					prodeFromFirestore.resultados,
				),
		  };
};

export const storeUserProde = async (uid, prode) => {
	if (!uid) throw new Error('No se ha especificado el uid del usuario');

	const prodeMapeado = {
		...prode,
		resultados: resultadosconverter.toFirestore(prode.resultados),
	};
	return await store(uid, firebaseFolder.PRODES, prodeMapeado);
};
