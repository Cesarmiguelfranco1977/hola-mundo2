document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formulario");
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        
        var nombreInput = document.getElementById("nombre");
        var apellidoInput = document.getElementById("apellido");
        var direccionInput = document.getElementById("direccion");
        var emailInput = document.getElementById("email");
        var telefonoInput = document.getElementById("telefono");
        var localidadInput = document.getElementById("localidad");
        
        if (nombreInput && apellidoInput && direccionInput && emailInput && telefonoInput && localidadInput) {
            var nombre = nombreInput.value;
            var apellido = apellidoInput.value;
            var direccion = direccionInput.value;
            var email = emailInput.value;
            var telefono = telefonoInput.value;
            var localidad = localidadInput.value;
            
            console.log("Su registro fue cargado con exito");
            console.log("Nombre:", nombre);
            console.log("Apellido:", apellido)
            console.log("Direccion:", direccion);
            console.log("Email:", email);
            console.log("Telefono:", telefono);
            console.log("Localidad:" , localidad);
            
            if (form) {
                form.reset();
            }
        }
    }
  });