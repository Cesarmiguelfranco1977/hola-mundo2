/*Al tirar un dado tenemos 1/6 de probabilidades de sacar 6 • Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada vez menor• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6 siendo que tiramos N dados (datoingresado por el usuario)
38*/
import * as rls from "readline-sync";
let dados= rls.questionInt("Ingrese la cantidad de dados: ");
let resultado= 0;
let posibilidades= Math.pow(6,dados);
let casosPosibles=1;
resultado=posibilidades/casosPosibles;
console.log(resultado);
