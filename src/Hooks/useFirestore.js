
import { database } from "../firebase/firebase"
import { setDoc, doc, getDoc, getDocs, collection } from 'firebase/firestore'
import Grupo from "../Components/prode/preliminares/Models/Grupo"
import  Partido  from "../Components/prode/preliminares/Models/Partido"

const { dbfirestore } = database

const firebaseFolder = {
    PRODES: 'prodes',
    SUPER_PRODE: 'superprode',
    DATA_USUARIOS: 'usuarios',
    RESULTADOS: 'resultados'
}

const resultadosconverter = {
    toFirestore:(resultados = []) => {
        const grupos = resultados.map(grupo => ({nombre: grupo.nombre,partidos:grupo.partidos.map(partido => ({partidoid:partido.partidoid, equipoA:partido.equipoA, equipoB:partido.equipoB, golesequipoA:partido.golesequipoA, golesequipoB:partido.golesequipoB}))}))
        return grupos
    },
    toObject:(resultadosfromfirestore = [])=> {
        const grupos = resultadosfromfirestore.map(grupo => (new Grupo(grupo.nombre)))
        console.log(grupos)
        for(let index = 0; index<grupos.length; index++){
            resultadosfromfirestore[index].partidos.forEach(partido => grupos[index].agregarpartido(new Partido(grupos[index].nombre,partido.equipoA,partido.equipoB,partido.golesequipoA,partido.golesequipoB)))
        }
        return grupos
    }
}

export const useFirestore = () => {
    const storeUserProde = async (uid, prode) => {
        try {
            const prodeCopy = { ...prode }
            if(prode.resultados) {
                prodeCopy.resultados = resultadosconverter.toFirestore(prode.resultados)
            }

            const response = await setDoc(
                doc(dbfirestore, firebaseFolder.PRODES , uid), 
                prodeCopy
            );
            return response;
        } catch (e) {
            throw e;
        }
    }

    const storesuperprode = async (uid, superProde) => {
        try {
            const prodeCopy = {...superProde}
            if(superProde.resultados) {
                prodeCopy.resultados = resultadosconverter.toFirestore(superProde.resultados)
            }

            const response = await setDoc(
                doc(dbfirestore, firebaseFolder.SUPER_PRODE, uid), 
                prodeCopy
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
    const storeresultadosuserprode = async(uid,resultados) => {
        try {
            const response = await setDoc(
                doc(dbfirestore,firebaseFolder.RESULTADOS,uid),
                resultados
            )
                return response
        } catch (e) {
            throw e;
        }
    }
    const getresultadosuserprode = async(uid) => {
        try{
            const docref = doc(
                dbfirestore, 
                firebaseFolder.RESULTADOS, 
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

    const getAllProdesUsuarios = async () => {
        try {
            const querySnapshot = await getDocs(
                collection(dbfirestore, firebaseFolder.PRODES)
            );
            const prodes = querySnapshot.docs.map(doc => {
              const prode = {...doc.data(), userid:doc.id }
              prode.resultados = resultadosconverter.toObject(prode.resultados)
              return prode  
            });
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
                const prode = { ...docsnap.data() }
                if(prode.resultados) {
                    prode.resultados = resultadosconverter.toObject(prode.resultados)
                }
                return prode;
            } else {
                return null;
            }
        } catch (e) {
            throw e;
        }

    }

    const getsuperprodeporid = async (uid) => {
        try {
            const docref = doc(
                dbfirestore, 
                firebaseFolder.SUPER_PRODE, 
                uid
            );
            const docsnap = await getDoc(docref);
            if (docsnap.exists()) {
                const prode = { ...docsnap.data() }
                if(prode.resultados) {
                    prode.resultados = resultadosconverter.toObject(prode.resultados)
                }
                return prode;
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
        getsuperprodeporid,
        getresultadosuserprode,
        storeresultadosuserprode,
    }
}
