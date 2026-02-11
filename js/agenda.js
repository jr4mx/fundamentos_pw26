let seguir = true;
let datos = [];

while(seguir){

    let opcion = parseInt(prompt(
        "Bienvenido a tu agenda personal \n" +
        "1. Agregar contacto \n" +
        "2. Listar contactos \n" +
        "3. Salir"
    ));

    switch(opcion) {

        case 1:
            let nombre = prompt("Ingresa tu nombre");
            let telefono = prompt("Ingresa tu telefono");
            let correo = prompt("Ingresa tu correo");
            let edad = parseInt(prompt("Ingresa tu edad"));

            let agenda = { nombre, telefono, correo, edad };

            datos.push(agenda);

            alert("Contacto agregado correctamente");
            break;

        case 2:
            let todos = "";

            for(let i = 0; i < datos.length; i++){
                todos += "Nombre: " + datos[i].nombre + "\n";
                todos += "Telefono: " + datos[i].telefono + "\n";
                todos += "Correo: " + datos[i].correo + "\n";
                todos += "Edad: " + datos[i].edad + "\n\n";
            }

            if(datos.length === 0){
                alert("No hay contactos registrados");
            } else {
                alert(todos);
            }
            break;

        case 3:
            if(confirm("¿Deseas salir?")){
                seguir = false;
            }
            break;

        default:
            alert("No recibí una opción válida");
    }
}
