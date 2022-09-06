
import { database } from "../firebase/firebase"
import { setDoc, doc, getDoc, getDocs, collection } from 'firebase/firestore'

const { dbfirestore } = database

const firebaseFolder = {
    PRODES: 'prodes',
    SUPER_PRODE: 'superprode',
    DATA_USUARIOS: 'usuarios'
}

export const useFirestore = () => {
    const storeUserProde = async (uid, formprode) => {
        try {
            const response = await setDoc(
                doc(dbfirestore, firebaseFolder.PRODES , uid), 
                formprode
            );
            return response;
        } catch (e) {
            throw e;
        }
    }

    const storesuperprode = async (uid, formprode) => {
        try {
            const response = await setDoc(
                doc(dbfirestore, firebaseFolder.SUPER_PRODE, uid), 
                formprode
            );
            return response;
        } catch (e) {
            throw e;
        }
    }
    const storeUserData = async (uid, displayName, lastname, phone) => {
        try {
            const userdata = {
                displayName,
                lastname,
                phone
            }

            const response = await setDoc(
                doc(dbfirestore, firebaseFolder.DATA_USUARIOS, uid), 
                userdata
            );
            return response;
        } catch (e) {
            throw e;
        }
    }

    const getAllProdesUsuarios = async () => {
        try {
            const querySnapshot = await getDocs(
                collection(dbfirestore, firebaseFolder.PRODES)
            );
            const prodes = querySnapshot.docs.map(doc => doc.data());
            return prodes;
        } catch (e) {
            throw e;
        }
    }

    const getdatauserfromid = async (uid) => {
        try {
            const docref = doc(
                dbfirestore, 
                firebaseFolder.DATA_USUARIOS, 
                uid
            );
            const docsnap = await getDoc(docref);
            if (docsnap.exists()) {
                return docsnap.data();
            } else {
                return null;
            }
        } catch (e) {
            throw e;
        }
    }

    const getprodeporid = async (uid) => {
        try {
            const docref = doc(
                dbfirestore, 
                firebaseFolder.PRODES, 
                uid
            );
            const docsnap = await getDoc(docref);
            if (docsnap.exists()) {
                return docsnap.data();
            } else {
                return null;
            }
        } catch (e) {
            throw e;
        }

    }
    return {
        storeUserData,
        getdatauserfromid,
        storeUserProde,
        storesuperprode,
        getprodeporid,
        getAllProdesUsuarios,
    }
}
