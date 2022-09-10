import Partido from "./Partido"

class Grupo{
    constructor (nombre, paresdeequipo=[]){
        this.nombre = nombre
        this.partidos = paresdeequipo.map(par => new Partido(this.nombre, par.equipoA, par.equipoB))
    }
}
export default Grupo