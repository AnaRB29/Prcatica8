class Poligono {
    constructor(lados) {
      this.lados = lados;
    }
  
    calcularPerimetro() {
      return this.lados.reduce((total, lado) => total + lado, 0);
    }
  }
  
  class Triangulo extends Poligono {
    constructor(lado1, lado2, lado3) {
      super([lado1, lado2, lado3]);
    }
  
    calcularArea() {
      const s = this.calcularPerimetro() / 2;
      const area = Math.sqrt(s * (s - this.lados[0]) * (s - this.lados[1]) * (s - this.lados[2]));
      return area;
    }
  }
  
  export { Triangulo };