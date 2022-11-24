import {SanPham} from "./SanPham";
import {SanPhamManage} from "./SanPhamManage";

let readlineSync = require ('readline-sync');
let qlSanPham = new SanPhamManage();




function main(){
    let menu = `-----------Menu chính-----------
      1. Thêm sản phẩm
      2. Sửa sản phẩm
      3. Xóa sản phẩm
      4. Tìm kiếm sản phẩm
      5. Sắp xếp sản phẩm 
      6. Hiển thị tất cả sản phẩm
      0. Thoát `

    let choice = -1;
    do{
        console.log(menu)
        choice = +readlineSync.question('Nhap lua chon: ');
        switch (choice){
            case 1:
                let name = readlineSync.question('Ten san pham: ');
                let gia = +readlineSync.question('Gia san pham: ');
                let soLuong = +readlineSync.question('So luong san pham: ');
                let hang = readlineSync.question('Hang san pham: ');
                let sanpham = new SanPham(name,gia,soLuong,hang)
                qlSanPham.add(sanpham );
                break;
            case 2:

                break;
            case 3:
                break;
            case 4:
                showTimKiemSanPham();
                break;
            case 5:
                showSapXepSP();
                break;
            case 6:
                display();
                break
            case 0:
                break;
        }
    }while (choice !== 0)

}
main()


function display(){
    console.log('-----------Tất cả sản phẩm--------');
    console.log(qlSanPham.display());
}

function showTimKiemSanPham(){
    let menuTimKiem = `-----------Tìm kiếm sản phẩm-----------
      1. Tìm tên sản phẩm
      2. Tìm loại sản phẩm
      3. Tìm theo khoảng giá sản phẩm
      0. Thoát
       `
    let choice = -1;
    console.log(menuTimKiem);
    choice = +readlineSync.question('Ban muon tim kiem:   ');
    switch (choice){
        case 1:
            findNameSP()
            break;
        case 2:
            findTypeSP()
            break;
        case 3:
            findPriceSP()
            break;
    }while (choice !== 0)
    console.log(showTimKiemSanPham())

}

function showSapXepSP(){
    let menuSapXep = `-----------Sắp xếp theo------------
      1. Sắp xếp giá tăng dần
      2. Sắp xếp giá giảm dần
      3. Sắp xếp số lượng giảm dần
      0. Thoát
       `
    let choice = -1;
    console.log(menuSapXep);
    choice = +readlineSync.question('Ban muon sap xep theo:   ');
    switch (choice){
        case 1:
            sortPriceSlow();
            break;
        case 2:
            sortPriceHeight();
            break;
        case 3:
            sortNumberHeight()
            break;
    }while (choice !== 0)
        console.log(showSapXepSP())

}

function sortPriceSlow(){
    qlSanPham.sortPriceSlow()
    console.log(display())

}

function sortPriceHeight() {
    qlSanPham.sortPriceHeight()
    console.log(display())
}

function sortNumberHeight() {
    qlSanPham.sortNumberHeight()
    console.log(display())
}


function findNameSP(){
    let name = readlineSync.question('Ten san pham can tim kiem:')
    let a = qlSanPham.findName(name)
    if (a.length === 0){
        console.log('Khong tim thay san pham')
    }
    else {
        a.forEach(obj => console.log(obj))
    }
}

function findTypeSP (){
    let type = readlineSync.question('Loai san pham can tim: ')
    let b = qlSanPham.findType(type)
    if (b.length === 0){
        console.log('Khong tim thay san pham')
    }
    else {
        b.forEach(obj => console.log(obj))
    }

}

function findPriceSP(){
    let price1 = +readlineSync.question('Lon hon gia: ');
    let price2 = +readlineSync.question('Nho hon gia: ')
    let c = qlSanPham.findPrice(price1,price2);
    console.log(c);

}