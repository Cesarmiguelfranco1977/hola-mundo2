import * as rls from "readline-sync";
let cuantosNumeros:number = rls.questionInt("Ingrese cantidad de numeros:");
if (cuantosNumeros<0){
      console.log("Usted ingreso un numero negativo")
}else{}
let numero1:number= rls.questionInt("Ingrese un numero:"); 
       
for (let i=1; i<=cuantosNumeros; i++){
     let numero2:number = rls.questionInt("Ingrese un numero mayor que el anterior");
    if (numero2>numero1){
          console.log("El numero",numero2,"es mayor que", numero1);
    }
     else{ console.log("El numero",numero2,"es menor que", numero1);
}
}
