// Asignación de variables
const hola = () => 4

function holafun() {
    return 4;
}

// Función como parámetro
function funcionMap(valor) {
    console.log('Valor:', valor);
    return valor
}

[1, 2, 3, 4].map(funcionMap)

// Función asíncrona
async function ejemplo() {
    setTimeout(() => {
        return "ok"
    }, 1000)
}

ejemplo()
    .then(() => {
        console.log('OK');
    })
    .catch(() => {
        console.error('error');
    })


console.log('algo extra');


// Funciones puras e impuras
let fecha = () => Date.now
fecha() // ?
fecha() // ?

// Personalizamos el formato de la fecha
const f = new Date()
let formato = "dia/mes/año"
formato = formato.replace('dia', f.getDate())
formato = formato.replace('mes', 'septiembre')
formato = formato.replace('año', '2020')
formato = formato.replace("dia-mes-año".replace('dia', f.getDay()));
formato

// Función impura
const tiempo = () => Date.now()
tiempo();//?
tiempo();//?


// Función pura
const suma = (a, b) => (a + b)
suma(2, 5) // ?
suma(2, 5) // ?
