export default class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor)
        this._id = contadorIngresos + 1
    }

    getId = () => this._id
}