// egresos e ingresos
let ingresos = [
    new Ingreso('Salario', 2500),
    new Ingreso('Venta de coche', 1500)
]

let egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400)
]

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
}

const totalIngresos = () => {
    let total_ingresos = 0;
    // let ingresos = [
    //     { descripcion: 'Salario', valor: 2100 },
    //     { descripcion: 'Venta de coche', valor: 1500 }
    // ]
    for (const ingreso of ingresos) {
        total_ingresos = total_ingresos + ingreso.valor
    }
    return total_ingresos
}

const totalEgresos = () => {
    let total_egresos = 0;
    // let egresos = [
    //     { descripcion: 'Renta departamento', valor: 900 },
    //     { descripcion: 'Ropa', valor: 400 }
    // ]

    for (const egreso of egresos) {
        total_egresos = total_egresos + egreso.valor
    }
    return total_egresos
}

const formatoMoneda = (valor, moneda = 'MXN') => {
    return `$${valor.toLocaleString()} ${moneda}`
}

const formatoPorcentaje = (valor) => {
    return `${valor.toLocaleString()}%`
}

// Cargar contenido de la app
// cargarCabecero()
// console.log(formatoPorcentaje(10))