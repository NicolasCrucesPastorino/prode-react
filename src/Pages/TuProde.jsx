
import '../Constantes'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico';
import {getprodeporid, storeUserProde} from './../database/services/prodeService'


export const TuProde = () => {
 
  const getprode = getprodeporid

  return (
    <TuProdeGenerico 
      onSubmitFinalStrategy={storeUserProde} 
      validarcamposvacios={true} 
      getprode={getprode}
    />
  ) 
}