class Poligono {
    constructor(lados) {
      this.lados = lados;
    }
  
    calcularPerimetro() {
      return this.lados.reduce((total, lado) => total + lado, 0);
    }
  }
  
  class Cuadrado extends Poligono {
    constructor(lado) {
      super([lado, lado, lado, lado]);
    }
  
    calcularArea() {
      return this.lados[0] * this.lados[0];
    }
  }
  
  export { Cuadrado };