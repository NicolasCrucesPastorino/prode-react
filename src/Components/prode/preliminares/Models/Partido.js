class Partido {
    constructor(nombregrupo, equipoA, equipoB, golesequipoA = 0,golesequipoB = 0){
        this.partidoid = nombregrupo + '-' + equipoA + '-' +equipoB
        this.equipoA = equipoA
        this.equipoB = equipoB
        this.golesequipoA = golesequipoA
        this.golesequipoB = golesequipoB
    }
        setgolesequipoA(goles){
            if(isNaN(goles)){
                goles = parseInt(goles)
            } 
            if(goles < 0){
                throw Error('los goles deben ser numeros positivos')

            }
            this.golesequipoA = parseInt(goles);
        }
            setgolesequipoB(goles){
                if(isNaN(goles)){
                    goles = parseInt(goles)
                } 
                if(goles < 0){
                    throw Error('los goles deben ser numeros positivos')
    
                }
                this.golesequipoB = parseInt(goles);
            }        
    }
 export default Partido