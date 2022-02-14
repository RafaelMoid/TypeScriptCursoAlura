export class Negociacao {
    //Contructor \/ \/
    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ) {}

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

    get volume(): number {
        return this.quantidade * this.valor;
    }
}