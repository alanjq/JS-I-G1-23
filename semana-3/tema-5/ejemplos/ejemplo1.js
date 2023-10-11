// Poner texto en la etiqueta estado del formulario perro
const cambiarEstado = (mensaje) => {
    const etiquetaestado = document.getElementById('estadoperro')
    if (etiquetaestado) { // Comprobamos que exista la etiqueta
        etiquetaestado.innerText = mensaje
    }
}

class Perro {
    // propiedades privadas (con guión bajo)
    _raza
    _altura
    _nombre
    _alimento

    constructor(nombre, raza, altura, alimento) {
        // Valores iniciales al crear el objeto
        this._nombre = nombre
        this._raza = raza
        this._altura = altura
        this._alimento = alimento
    }

    // getter con Notación flecha
    getRaza = () => this._raza
    getAltura = () => this._altura
    getNombre = () => this._nombre
    getAlimento = () => this._alimento

    // Métodos setter
    setRaza = (raza) => this._raza = raza
    setAltura = (altura) => this._altura(altura)
    setNombre = (nombre) => this._nombre = nombre
    setAlimento = (alimento) => this._alimento = alimento

    // acciones de un perro (Métodos)
    ladrar() {
        return (`${this.getNombre()} está ladrando`);
    }

    comer() {
        return (`${this.getNombre()} está comiendo ${this.getAlimento()}`)
    }

    dormir() {
        return (`${this.getNombre()} está durmiendo`);
    }
}

// Crear o instanciar clase Perro
const primerPerro = new Perro('firulais', 'schnauzer', 40, 'croquetas')
const segundoPerro = new Perro('Filomeno', 'Malix', 30, 'pollo')

// primerPerro.comer()
console.log("Nombre del primer perro: ", primerPerro._nombre)

