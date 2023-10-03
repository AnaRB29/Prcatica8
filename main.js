import { Triangulo } from 'triangulo.js';
import { Cuadrado } from 'cuadrado.js';
import { Pentagono } from 'pentagono.js';
import { obtenerHoraDigital } from 'reloj.js';
import { calcularFactorial } from 'factorial.js';

const triangulo = new Triangulo(3, 4, 5);
console.log("Triángulo - Perímetro:", triangulo.calcularPerimetro());
console.log("Triángulo - Área:", triangulo.calcularArea());

const cuadrado = new Cuadrado(4);
console.log("Cuadrado - Perímetro:", cuadrado.calcularPerimetro());
console.log("Cuadrado - Área:", cuadrado.calcularArea());

const pentagono = new Pentagono(5);
console.log("Pentágono - Perímetro:", pentagono.calcularPerimetro());
console.log("Pentágono - Área:", pentagono.calcularArea());

const horaActual = obtenerHoraDigital();
console.log("Hora actual:", horaActual);

const numero = 5;
const factorial = calcularFactorial(numero);
console.log(`Factorial de ${numero}:`, factorial);