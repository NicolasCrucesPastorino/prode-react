import { etapa } from '../Constantes'
import { useFirestore } from '../Hooks/useFirestore'
import { calcularPuntosTorneo } from '../utils/superprodefunctions'
import { TuProdeGenerico } from './../Components/prode/TuProdeGenerico'

export const SuperProde = () => {
  const firestore = useFirestore()
  const getsuperprode = firestore.getsuperprodeporid

  const storeandupdateprodes = async (uid,formprode) => {
    await firestore.storesuperprode(uid,formprode)
    const prodesdeusuarios = await firestore.getAllProdesUsuarios()
    prodesdeusuarios.forEach(prodeUsuario => {
      const puntajeCuartos = calcularPuntosTorneo(prodeUsuario, formprode, etapa.CUARTOS);
      const resultadoPuntaje = {}
      resultadoPuntaje.cuartos= puntajeCuartos

    })
  }

  return (
    <div>
      <TuProdeGenerico onSubmitFinalStrategy={storeandupdateprodes} validarcamposvacios={false} getprode = {getsuperprode}/>
    </div>
  )
}
