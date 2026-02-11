let edad = parseInt(prompt("Ingresa tu edad"));
//para saber el tipo de dato, como es javascript, nos puede causar problemas, por eso es importante validar o saber el tipo de dato
console.log(typeof edad);
if(edad >= 18){ 
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}
