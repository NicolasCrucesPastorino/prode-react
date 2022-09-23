import { etapa } from '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { calcularPuntosTorneo,calcularPuntosPreliminar,calcularpuntajetotal } from '../utils/superprodefunctions'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()
  const getsuperprode = firestore.getsuperprodeporid

  const storeandupdateprodes = async (uid,formprode) => {
    await firestore.storesuperprode(uid,formprode)
    const prodesdeusuarios = await firestore.getAllProdesUsuarios()

    
    
    prodesdeusuarios.forEach(prodeUsuario => {
      const resultadoPuntaje = {torneo:{}}
      resultadoPuntaje.preliminares = calcularPuntosPreliminar(prodeUsuario, formprode)
      Object.values(etapa).forEach(nombreetapa => {
      const puntaje = calcularPuntosTorneo(prodeUsuario, formprode, nombreetapa);
      resultadoPuntaje.torneo[nombreetapa] = puntaje
      })
      calcularpuntajetotal(prodeUsuario.userid).then(puntajetotal => {
        console.log('pun',puntajetotal)
      })
      
      firestore.storeresultadosuserprode(prodeUsuario.userid,resultadoPuntaje)
    })
  }


  return (
    <div>
      <TuProdeGenerico onSubmitFinalStrategy={storeandupdateprodes} validarcamposvacios={false} getprode = {getsuperprode}/>
    </div>
  )
}
