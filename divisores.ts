//Escriba un programa que pida un número entero mayor que cero y que escriba sus divisores.//
import * as rls from "readline-sync";
let numero:number = rls.questionInt("Ingrese un numero entero mayor que 0: ");
if (numero<0){
    console.log("El numero",numero, "es menor que 0");
}
for (let i:number = 1; i <=numero; i++){
if  (numero % i == 0){
    console.log("Los divisores son:", i);
}
}