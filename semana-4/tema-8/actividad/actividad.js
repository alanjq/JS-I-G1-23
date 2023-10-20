// Cambiar título de "ventana"
// Obtener valores de los elementos
const boton_cambiar = document.getElementById('btnCambiar')
const input_titulo_ventana = document.getElementById('inputTituloVentana')

// Esperar a evento
boton_cambiar.addEventListener('click', () => {
    document.title = input_titulo_ventana.value
})


// Cambiar Título del documento HTML
const titulo_documento = document.getElementById('tituloDocumento')
const input_titulo_documento = document.getElementById('inputTituloDocumento')
const boton_guardar = document.getElementById('btnGuardar')

boton_guardar.addEventListener('click', () => {
    titulo_documento.innerText = input_titulo_documento.value
})