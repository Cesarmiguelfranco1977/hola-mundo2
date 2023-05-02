/*Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/
import * as rls from "readline-sync";
let numero:number = rls.questionInt("ingrese un numero:");
let i:number = 0;
while(numero !== 0){
    if(i<=numero)i=numero;
    numero = rls.questionInt("Ingrese un numero:");
}
console.log("El numero maximo es:",i);

    
    
        



