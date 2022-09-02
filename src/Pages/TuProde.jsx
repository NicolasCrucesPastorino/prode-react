
import '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './TuProdeGenerico'


export const TuProde = () => {
 
const firestore=useFirestore()
return (
  <TuProdeGenerico storedestiny={firestore.storeUserProde} validarcamposvacios={true}/>
)
 
  }