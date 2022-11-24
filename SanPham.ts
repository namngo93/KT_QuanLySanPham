export class SanPham{
    private _name!: string;
    private _price!: number;
    private _number!: number;
    private _type!: string;


    constructor(name: string, price: number, number: number, type: string) {
        this._name = name;
        this._price = price;
        this._number = number;
        this._type = type;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get number(): number {
        return this._number;
    }

    set number(value: number) {
        this._number = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}