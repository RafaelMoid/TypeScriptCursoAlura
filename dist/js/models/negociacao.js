export class Negociacao {
    //Contructor \/ \/
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //Getters
    //This Getters are substituted by the readonly property
    //of contructor properties
    // get data(): Date {
    //     return this._data;
    // }
    // get quantidade(): number {
    //     return this._quantidade;
    // }
    // get valor(): number {
    //     return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
