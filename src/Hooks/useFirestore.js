
import { database } from "../firebase/firebase"
import { setDoc,doc, getDoc } from 'firebase/firestore'

const {addDoc,collection,dbfirestore, getDocs} = database

export  const useFirestore = () => {
    const getAllPartidos = async  () => {
        const querySnapshot = await getDocs(collection(dbfirestore,'partidos'))
        const partidos = querySnapshot.docs.map(doc => doc.data())
        return partidos
    }
    const createResultados = async  (resultados,idusuario) => {
        return await addDoc(collection(dbfirestore, 'resultados'), {idusuario,resultados})
        
    }
    const storeUserProde = async (uid, formprode)=>{
        const response = await setDoc(doc(dbfirestore,'prodes',uid),formprode) 
        return response

    }

    const storesuperprode = async (uid,formprode) => {
        const response = await setDoc(doc(dbfirestore,'superprode',uid),formprode)
        return response
    }
    const storeUserData = async (uid,name,lastname,phone) => {
       
        const userdata = {
            name,
            lastname,
            phone
        }
        const response = await setDoc(doc(dbfirestore,'usuarios',uid),userdata) 
        return response
    }

    const  getAllProdes = async ()=>{
        const querySnapshot= await getDocs(collection(dbfirestore, 'prodes'))
        const prodes= querySnapshot.docs.map(doc => doc.data())
        return prodes
    }
    const getdatauserfromid = async (uid) => {
        const docref=doc(dbfirestore,'usuarios',uid)
        const docsnap=await getDoc(docref)
        if(docsnap.exists()){
            console.log('snap',docsnap.data())
            return docsnap.data()
        }else{
            return null
        }
    }

    const getprodeporid = async (uid) => {
        const docref=doc(dbfirestore,'prodes',uid)
        const docsnap=await getDoc(docref)
        if(docsnap.exists()){
            console.log('snap',docsnap.data())
            return docsnap.data()
        }else{
            return null
        }
    }
    return {
        getAllPartidos,
        createResultados,
        storeUserData,
        getdatauserfromid,
        storeUserProde,
        storesuperprode,
    }
}
