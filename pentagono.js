
class Poligono {
    constructor(lados) {
      this.lados = lados;
    }
  
    calcularPerimetro() {
      return this.lados.reduce((total, lado) => total + lado, 0);
    }
  }
  
  class Pentagono extends Poligono {
    constructor(lado) {
      super([lado, lado, lado, lado, lado]);
    }
  
    calcularArea() {
      const apotema = this.lados[0] / (2 * Math.tan(Math.PI / 5));
      return (this.lados[0] * apotema) / 2;
    }
  }
  
  export { Pentagono };