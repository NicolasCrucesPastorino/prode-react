import { database } from "../firebase/firebase";
import { setDoc, doc, getDoc, getDocs, collection } from "firebase/firestore";

const { dbfirestore } = database;

export const getAll = async (folder) => {
  try {
    const querySnapshot = await getDocs(collection(dbfirestore, folder));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), userid: doc.id }));
  } catch (error) {
    throw error;
  }
};

export const store = async (uid, folder, data) => {
  if (!folder) throw new Error("FOLDER is requerired!!!");
  if (!uid) throw new Error("USER ID is requerired!!!");
  if (!data) throw new Error("DATA is requerired!!!");

  try {
    return await setDoc(doc(dbfirestore, folder, uid), data);
  } catch (error) {
    throw error;
  }
};

/***
 * @param {string} uid
 * @param {string} folder
 * @returns {Promise<firebase.firestore.DocumentData>} | null
 */
export const getById = async (uid, folder) => {
  if (!uid) throw new Error("USER ID is requerired!!!");
  if (!folder) throw new Error("FOLDER is requerired!!!");

  try {
    const response = doc(dbfirestore, folder, uid);
    const snap = await getDoc(response);
    return snap.exists() ? snap.data() : null;
  } catch (error) {
    throw error;
  }
};
