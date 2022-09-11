
import '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico';


export const TuProde = () => {
 
const firestore=useFirestore()
return (
  <TuProdeGenerico onSubmitFinalStrategy={firestore.storeUserProde} validarcamposvacios={true}/>
)
 
  }