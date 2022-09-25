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
  try {
    return await setDoc(doc(dbfirestore, folder, uid), data);
  } catch (error) {
    throw error;
  }
};

export const getById = async (uid, folder) => {
  try {
    const response = doc(dbfirestore, folder, uid);
    const snap = await getDoc(response);
    return snap.exists() ? snap.data() : null;
  } catch (error) {
    throw error;
  }
};
