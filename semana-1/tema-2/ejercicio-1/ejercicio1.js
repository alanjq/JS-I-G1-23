function comprobarNumeros() {
    let num1 = numero1.value;
    let num2 = numero2.value;

    // Declaramos junto sin asignar valor inicial
    let numero_mayor, numero_menor, son_iguales
    numero_mayor = numero_menor = son_iguales = false
    numero_menor // ?

    if (num1 > num2) {
        numero_mayor = num1
        numero_menor = num2
    } else if (num2 > num1) {
        numero_mayor = num2
        numero_menor = num1
    } else {
        numero_mayor = num1
        numero_menor = num1
        son_iguales = true
    }

    // Mostrar el resultado en el label
    resultado.innerHTML = `
    <p>Son iguales: ${son_iguales}<p>
    <p>Número mayor: ${numero_mayor}<p>
    <p>Número menor: ${numero_menor}<p>
`
}
