/*Escriba un programa que pida dos números enteros y escriba qué números son pares 
y cuáles impares desde el primero hasta el segundo.*/
import * as rls from "readline-sync";
let num1: number = rls.questionInt("Ingrese un numero entero x: ");
let num2: number = rls.questionInt("Ingrese un numero igual o mayor que x: ");
if (num2<num1){
    console.log("El numero",num2,"es un numero menor que x")
}
for (let i=num1; i<=num2; i++){
    if (i % 2 == 0){
            console.log("El numero", i, "es par")
   } else{
        console.log("El numero", i,"es impar:")
   }
}


