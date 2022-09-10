class Partido {
    constructor(nombregrupo, equipoA, equipoB){
        this.partidoid = nombregrupo + '-' + equipoA + '-' +equipoB
        this.equipoA = equipoA
        this.equipoB = equipoB
        this.golesequipoA = 0
        this.golesequipoB = 0
    }
        setgolesequipoA(goles){
            if(isNaN(goles)){
                goles=parseInt(goles)
            } 
            if(goles<0){
                throw Error('los goles deben ser numeros positivos')

            }
            this.golesequipoA=goles
        }
            setgolesequipoB(goles){
                if(isNaN(goles)){
                    goles=parseInt(goles)
                } 
                if(goles<0){
                    throw Error('los goles deben ser numeros positivos')
    
                }
                this.golesequipoB=goles
            }        
    }
 export default Partido