let estudiantes = [
    {
        "nombre": "ASHLEY ALEJANDRA",
        "cuenta": "20212405",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "LUIS ALFREDO",
        "cuenta": "20246542",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "SOL JACQUELINE",
        "cuenta": "20246519",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "OSVAL ELIAS",
        "cuenta": "20216552",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "VICTOR ADRIAN",
        "cuenta": "20186411",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "HAZIEL",
        "cuenta": "20216558",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "AXEL EDUARDO",
        "cuenta": "20215495",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "MAXIMILIANO DAVID",
        "cuenta": "20202430",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "LEONARDO ISMAEL",
        "cuenta": "20206466",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "MIGUEL",
        "cuenta": "20246335",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "KAROL CITLALY",
        "cuenta": "20210131",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "YURIDIA LIZBETH",
        "cuenta": "20214586",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "KARINA PAMELA",
        "cuenta": "20214380",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "LUIS CARLOS",
        "cuenta": "20213274",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "JOSE MANUEL",
        "cuenta": "20214621",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "ESSAEL",
        "cuenta": "20206618",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "EDWARD ISMAEL",
        "cuenta": "20173528",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "DYLAN JESUS",
        "cuenta": "20213261",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "MELISSA ROSDELY",
        "cuenta": "20246907",
        "carrera": "Ingeniero de Software"
    },
    {
        "nombre": "JOEL FERNANDO",
        "cuenta": "20213343",
        "carrera": "Ingeniero de Software"
    }
]
/*
let estudiante_min = [];
estudiantes.forEach((valor)=> {   
   estudiante_min.push({
    "nombre":valor.nombres,
    "cuenta": valor.cuenta,
    "carrera":valor.carrera
   })
})
*/

let card = `<div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                     class="card-img-top p-3"
                     style="max-width:120px; margin:auto;"
                     alt="Avatar">
                <div class="card-body text-center float-first">
                    <h5 class="card-title">Nombres</h5>
                    <p class="card-text">cuenta:</p>
                    <p class="card-text"></p>
                    <p class="card-text">carrera:</p>
                    <a href="#" class="btn btn-warning">Ver perfil</a>
                </div>
            </div>
        </div>`;
const total_est = estudiantes.length;
let total_etiqueta = document.querySelector("#total_est");
total_etiqueta.textContent = total_est;        
let cards_container = document.getElementById("cards-container");
estudiantes.forEach((valor) => {
    let card_estudiante = card.replace(`Nombres`,` Nombre: ${valor.nombre}`)
                               .replace(`cuenta:`,`Nuenta: ${valor.cuenta}`)
                               .replace(`carrera:`,`Carrera: ${valor.carrera}`);
    cards_container.innerHTML += card_estudiante;
});



//console.table(estudiantes);