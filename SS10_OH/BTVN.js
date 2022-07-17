//Bai 7.1
// getString = (string) => {
//     let totalStr = '';
//     let newstring = string.split(' ')
//     let newstring2 = newstring.join('');
//     for(let i = 0; i < newstring2.length; i++){
//        totalStr += newstring2[i] + ': o vi tri ' + i + '\n';
//     }
//     return totalStr;
// }

//Bai 7.1 
// getString = (string) => {
//     let totalStr = '';
//     let str1 = ''
//     for(let i = 0; i < string.length; i++){
//         if(string[i] == ' '){
//             str1 += string.splice(i, 1);
//         };
//         totalStr += string[i] + " o vi tri la: " + i + "\n";
//     }
//     return totalStr;
// }
// console.log(getString("Day la ha noi"))

// let string = 'Đây là nội dung';
// console.log(getString(string))

//Bai 7.2
// tongBinhPhuong = () => {
//   let total = 0;
//   for (let i = 0; i <= 100; i++) {
//     if (i % 5 == 0) {
//       total += i * i;
//     }
//   }
//   return total;
// };
// console.log(tongBinhPhuong());

//Bai 3:
// mangChia5 = () => {
//     let total = '';
//     for(let i = 0; i <= 100; i++){
//         if(i % 5 == 0){
//             total += i + ' ';
//         }
//     }
//     return total;
// }
// console.log(mangChia5());

//Bai 7.4
// timKytu = (string, char) => {
//     let total = '';
//     for(let i = 0; i < string.length; i++){
//         if(string[i] == char){
//             total += i + ' ';
//         }
//     }
//     if(total == ''){
//         return 'Khong tim thay ky tu ' + char;
//     }
//     return total;
// }
// let string = 'anh yeu em nhieu lam'
// let char = 'e'
// console.log(timKytu(string, char));



//Bai 7.5.1

// daoKytu = (string) => {
//     let total = '';
//     for(let i = string.length-1 ;i>=0; i--){
//         total += string[i] + ' ';
//     }
//     return total;
// }
// console.log(daoKytu("hello"))

//Bai 7.6
// sosanhArray = (arr1,arr2) => {
//     let total1 = 0,total2=0;
//     for(let i = 0; i < arr1.length; i++){
//         total1 += arr1[i];
//     }
//     for(let i = 0; i <arr2.length; i++){
//         total2 += arr2[i];
//     }
//     return total1 > total2 ? "Mang dau tien lon hon" : "Mang dau tien nho hon";
// }
// console.log(sosanhArray([1,2,3,4,10],[3,4,5,7]))

//Bai 7.7      quá nhiều bug
// insertValue = (string, char, newChar) => {
//     let flag = '';
//     for(let i=0; i<string.length; i++){
//         if(string[i] == char){
//             flag = i;
//             break;
//         }
//     }
//     let substr = string.splice(flag, string.length-flag);
//     let finalStr = string + "," + newChar + "," + substr.splice(substr.length-1,1);
//     return finalStr;
// }
// console.log(insertValue(['hoa','hua','khai','nice','five'],'khai',' congchua '))

//Bai 7.7:
// insertValue = (string, char, char2) => {
//     let flag = 0;
//     for(let i=0; i<string.length; i++){
//         if(string[i] == char){
//             flag += i;
//             break;
//         }
//         console.log(flag)
//     let newstr = string.splice(flag, 1, char2);
//     return string;
// }
// }

// console.log(insertValue(['hoa','hien','chien','toan'],'chien','hieu'))
// let string = ['Lan', 'Điệp', 'Ngọc','Ngạn', 'Trinh']
// newstring = string.splice(4,1,"An",'Trinh');
// console.log(string)


/*
Ex7.8: Cho 1 mảng học sinh: arrStudents = [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];
		+ Thêm ‘An’ vào sau ‘Ngạn’ -> Hiển thị [‘Lan’, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘An’, ‘Trinh’];
		+ Xóa ‘Ngọc’ -> hiển thị [‘Lan’, ‘Điệp’,,’Ngạn’, ‘Trinh’];
		+ Tìm kiếm và hiển thị vị trí của người tên là Trinh  trong mảng
		+ Cập nhật ‘Lan’ thành ‘Phú’ -> Hiển thị [‘Phú, ‘Điệp’, ‘Ngọc’,’Ngạn’, ‘Trinh’];

*/ 

//Bai 7.8.a
let arrStudents = [`Lan`, `Điệp`, `Ngọc`,`Ngạn`, `Trinh`];
let indexOfNgan = arrStudents.indexOf('Ngạn');
arrStudents.splice(indexOfNgan + 1,0,"An");
console.log(arrStudents);






