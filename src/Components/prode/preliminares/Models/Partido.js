class Partido {
  constructor(
    nombregrupo,
    equipoA,
    equipoB,
    golesequipoA = "",
    golesequipoB = ""
  ) {
    this.partidoid = nombregrupo + "-" + equipoA + "-" + equipoB;
    this.equipoA = equipoA;
    this.equipoB = equipoB;
    this.golesequipoA = golesequipoA;
    this.golesequipoB = golesequipoB;
  }
  setgolesequipoA(goles = "") {
    this.validateGoles(goles);
    this.golesequipoA = goles;
  }

  setgolesequipoB(goles = "") {
    this.validateGoles(goles);
    this.golesequipoB = goles;
  }
  gruponombre() {
    return this.partidoid.split("-")[0];
  }

  validateGoles(goles) {
    if (goles === "") {
      this.golesequipoB = "";
      return;
    }
    if (isNaN(goles)) {
      throw new Error("Goles must be a number");
    }
    if (parseInt(goles) < 0)
      throw Error("los goles deben ser numeros positivos");
  }
  resultado() {
    if (this.golesequipoA === "" || this.golesequipoB === "") return "sin resultados";
    if (this.golesequipoA - this.golesequipoB > 0) {
      return "gana " + this.equipoA;
    }
    if (this.golesequipoA - this.golesequipoB < 0) {
      return "gana " + this.equipoB;
    }
    if (this.golesequipoA === this.golesequipoB) {
      return "empate";
    }

  }
}

export default Partido;
