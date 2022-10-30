import { database } from '../firebase/firebase';
import { setDoc, doc, getDoc, getDocs, collection } from 'firebase/firestore';

const { dbfirestore } = database;

export const getAll = async folder => {
	const querySnapshot = await getDocs(collection(dbfirestore, folder));
	return querySnapshot.docs.map(doc => ({
		...doc.data(),
		userid: doc.id,
	}));
};

export const store = async (uid, folder, data) => {
	if (!folder) throw new Error('FOLDER is requerired!!!');
	if (!uid) throw new Error('USER ID is requerired!!!');
	if (!data) throw new Error('DATA is requerired!!!');

	return await setDoc(doc(dbfirestore, folder, uid), data);
};

/***
 * @param {string} uid
 * @param {string} folder
 * @returns {Promise<firebase.firestore.DocumentData>} | null
 */
export const getById = async (uid, folder) => {
	if (!uid) throw new Error('USER ID is requerired!!!');
	if (!folder) throw new Error('FOLDER is requerired!!!');

	const response = doc(dbfirestore, folder, uid);
	const snap = await getDoc(response);
	return snap.exists() ? snap.data() : null;
};
