import {SanPham} from "./SanPham";

export class SanPhamManage{

    public list: SanPham[] = [];

    add(obj: SanPham): void{
        this.list.push(obj)
    }

    findName(name: string): SanPham[]{
        return this.list.filter(obj => obj.name.includes(name))
    }

    findPrice(price1: number, price2: number): SanPham[]{
        return this.list.filter(obj => (price1 < obj.price && obj.price < price2))
    }

    findType(type: string): SanPham[]{
        return this.list.filter(obj => obj.type.includes(type))
    }


    display(): SanPham[]{
        return this.list;
    }

    sortPriceSlow(){
        return this.list.sort((p1,p2) => p1.price - p2.price)
    }

    sortPriceHeight(){
        return this.list.sort((p1,p2) => p2.price - p1.price)
    }

    sortNumberHeight() {
        return this.list.sort((p1, p2) => p2.number - p1.number)
    }


}