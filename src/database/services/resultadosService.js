import { getAll, getById, store } from './../firebaseService';
import { firebaseFolder } from '../firebaseFolders';

export const getresultadosuserprode = async uid => {
	if (!uid) throw new Error('No se ha especificado el uid del usuario');
	return await getById(uid, firebaseFolder.RESULTADOS);
};

export const storeresultadosuserprode = async (uid, resultados) => {
	if (!uid) throw new Error('No se ha especificado el uid del usuario');
	return await store(uid, firebaseFolder.RESULTADOS, resultados);
};

export const getAllProdesResultados = async () => {
	return await getAll(firebaseFolder.RESULTADOS);
};

export const getPuntajeTotalById = async uid => {
	if (!uid) throw new Error('No se ha especificado el uid del usuario');

	const resultados = await getresultadosuserprode(uid);
	const puntajetorneo = Object.values(resultados.torneo).reduce(
		(a, b) => a + b,
		0,
	);
	const puntajepreliminar = Object.values(resultados.preliminares).reduce(
		(a, b) => a + b,
		0,
	);
	return puntajetorneo + puntajepreliminar;
};
