
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

    return {
        getAllPartidos,
        createResultados
    }
}
