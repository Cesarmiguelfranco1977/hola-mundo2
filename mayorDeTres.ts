import * as rls from "readline-sync";

let nu1: number = rls.questionInt("Ingrese un numero: ");
let nu2: number = rls.questionInt("Ingrese un numero: ");
let nu3: number = rls.questionInt("Ingrese un numero: ");
if ( nu1 == nu2 && nu2 == nu3 && nu1 == nu3){
    console.log("Los nuemros son iguales")
}
if (nu1 > nu2 && nu1 > nu3){
    console.log ("El numero mayor es:", nu1)
}
else if( nu2 > nu1 && nu2 > nu3){
    console.log ("El numero mayor es:", nu2)
}
else if (nu3 > nu1 && nu3 > nu2){
    console.log("El numero mayor es:", nu3)
}
