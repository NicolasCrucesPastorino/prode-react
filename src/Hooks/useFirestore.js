
import { database } from "../firebase/firebase"

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
    const storeUserProde = async (idusuario, formprode)=>{
        const prodes = await getAllProdes()
        if(prodes.any(prode => prode.idusuario==idusuario)){
            console.log('el usuario ya existe')
            return 
        }
        const response = await addDoc(collection(dbfirestore, 'prodes'), {
            idusuario,
            formprode

        })
        return response

    }
    const storeUserData = async (uid,name,lastname,phone) => {
        const response = await addDoc(collection(dbfirestore, 'datausuarios'), {uid,name,lastname,phone})
        console.log('response',response)
        return response
    }

    const  getAllProdes = async ()=>{
        const querySnapshot= await getDocs(collection(dbfirestore, 'prodes'))
        const prodes= querySnapshot.docs.map(doc => doc.data())
        return prodes
    }


    return {
        getAllPartidos,
        createResultados,
        storeUserData
    }
}
