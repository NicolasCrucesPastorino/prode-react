import { getById, store } from "./../firebaseService";
import { firebaseFolder } from "../firebaseFolders";

export const getdatauserfromid = async (uid) => {
  try {
    return await getById(uid, firebaseFolder.DATA_USUARIOS);
  } catch (e) {
    throw e;
  }
};

export const storeUserData = async (uid, displayName, lastname, phone) => {
  try {
    const userdata = {
      displayName,
      lastname,
      phone,
    };
    return store(uid, firebaseFolder.DATA_USUARIOS, userdata);
  } catch (e) {
    throw e;
  }
};
