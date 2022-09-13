import Partido from "./Partido"

class Grupo{
    constructor (nombre, paresdeequipo=[]){
        this.nombre = nombre
        this.partidos = paresdeequipo.map(par => new Partido(this.nombre, par.equipoA, par.equipoB))
    }
    agregarpartido(partido){
        this.partidos.push(partido)
    }
}
export default Grupo