// console.log("Hello");
// let n = 3;
// console.log(`i have ${n} dog`);
// let a = "4";
// console.log(n + (Number)a);


//Hãy tính tổng của 2 số 3 và 4
//console.log(3 + 4);
// alert(4+3);

// Tính tổng của 2 số a và b


// let a = Number(prompt("Enter a:"));
// let b = Number(prompt("enter b:"));
// console.log(a+ b);

// Ví dụ về các toán tử trong js + - * /
// ** là bình phương 2^3
// console.log("Dấu chấm phẩy đó là",3.14);
// console.log(2 ** 3);

// Biến
// let name = "Lam";
// let age = 25;
// age = 20;

// {
//     let name = "Nguyeenx ngoc Tung lma";

// }
// let x = Number(prompt("Enter x:"));
// let a = Math.ceil(Math.random()*101);
// let b = Math.ceil(Math.random()*101);
// let c = Math.round(Math.random()*101);
// console.log("a =",a);
// console.log("b =",b);
// console.log("c =",c);
// console.log(a*(x**2) + b*x + c);

// BÀI TẬP VỀ NHÀ
/* # Em đi mua hàng. Em mua 5 lon nước coca với giá 10000$,và thuế VAT của mỗi lon là 5%
Em lại đi mua tiếp 5 chai Rượu quê với giá 15000$/1 lít trong khi 1 chai đựng 5 lít rượu và ko thuế.
Tính tổng tiền em phải trả gồm thuế và tổng tiền chưa có thuế
Tính số tiền của 5 lon nước. Tính số tiền của 5 chai rượu */

let coca = 10000;
let VATCOCA = 5/100;
let ruou_que = 15000;
let VATRUOU = 0;

let result_muacoca = (coca-(coca*VATCOCA)) * 5;
console.log(`Tổng số tiền phải trả để mua 5 lon coca là: ${result_muacoca}$`);

let result_muaruou = ruou_que * 5 * 5 -(ruou_que*VATRUOU);
console.log(`Tổng số tiền phải trả để mua 5 chai rượu quê là: ${result_muaruou}$`);

console.log(`Tổng số tiền phải trả khi mua cả rượu và coca tính cả thuế là: ${result_muacoca + result_muaruou}$`);

/* Một hộ gia đình tiêu hết x số điện (kwh), x là số được người dùng nhập vào. 
Biết giá số điện được tính như sau: 
1.678đ/kwh cho kwh từ 0-50, 1.734/kwh cho kwh từ 51-100, 2.014/kwh cho kwh từ 101-200, 2.536/kwh cho kwh 201 trở lên. 
Hãy tính số tiền hộ gia đình phải trả  
*/

let x = Number(prompt("Enter x:"));
let result=0;
if(x >=0 && x<=50){
    result += x * 1678;
}else if(x>=51 && x<=100){
    result += x * 1734;
}else if(x>=101 && x<=200){
    result += x * 2014;
}else result += x * 2536;

console.log(`Số tiền hộ gia đình phải trả là: ${result} VNĐ`);