"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = "";
var contrasenia = "";
usuario = rls.question("Ingrese su usuario: ");
contrasenia = rls.question("Ingrese su contraseña: ");
var usuario1 = "Juan";
var contrasenia1 = "claveJuan";
if (usuario == usuario1 && contrasenia == contrasenia1) {
    console.log("Su usuario y contraseña son correctos");
}
else {
    console.log("Su usuario y su contraseña son incorrectos");
}
