/*• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/
import * as rls from "readline-sync";
let num1:number = rls.questionInt("Ingrese un numero:");
let num2:number = rls.questionInt("Ingrese un numero maximo a multiplicar:");
for(let i=1; i<num2+1; i++){
   let result = (num1 * i) 
        console.log(num1, "x", i, "=", result);
    }
