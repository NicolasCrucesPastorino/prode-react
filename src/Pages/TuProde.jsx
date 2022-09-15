
import '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico';


export const TuProde = () => {
 
const firestore=useFirestore()
const getprode = firestore.getprodeporid

return (
  <TuProdeGenerico onSubmitFinalStrategy={firestore.storeUserProde} validarcamposvacios={true} getprode={getprode}/>
)
 
  }