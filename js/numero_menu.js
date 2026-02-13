//while //for //do while

let numero_leer = parseInt(prompt("Escribe un número"));

alert(`El numero a leer es  ${numero_leer}`);

while(numero_leer>=0){
    //operaciones
    console.log(numero_leer)
    numero_leer=numero_leer-1;
}

let menu_opcion = parseInt(prompt("Ingresa una opción: 1-Coche 2-Moto 3-Bicicleta 4-Camión"));

switch(menu_opcion){
    case 1:
        alert("Te irás en Coche");
    break;
    case 2:
        alert("Te irás en Moto");
    break;  
    case 3:
        alert("Te irás en Bicicleta");
    break;
    case 1:
        alert("Te irás en Camión ;(");
    break; 
    default: 
        alert("No elegiste una opción");
    break;           
}
alert("Vuelve pronto");