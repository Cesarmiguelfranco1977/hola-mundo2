import * as rls from "readline-sync";

let usuario: string = "";
let contrasenia: string = "";

 usuario = rls.question("Ingrese su usuario: ")
 contrasenia = rls.question("Ingrese su contraseña: ")
const usuario1: string = "Juan"
const contrasenia1: string = "claveJuan"
if (usuario == usuario1 && contrasenia == contrasenia1) {

    console.log("Su usuario y contraseña son correctos")
} else
 {
    console.log("Su usuario y su contraseña son incorrectos")

}

