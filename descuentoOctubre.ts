/*Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas
sus compras• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene
descuento o no*/
import * as rls from "readline-sync";
let precio: number = rls.questionFloat("Indique precio unitario:");
let cantidad: number = rls.questionInt("Indique cantidad:");
let mes: string = rls.question("Indique mes:");
 
if (precio >2000) {
    console.log("usted tiene un 15% de descuento")
} else if (cantidad>2){
   console.log("usted tiene un 15% de descuento")
} else if (mes === "octubre"){
    console.log("usted tiene un 15% de descuento:")
} else {
    console.log("Usted no tiene descuento");
}    




