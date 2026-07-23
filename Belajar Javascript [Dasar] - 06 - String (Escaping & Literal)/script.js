let dataString = "data string";
console.log(dataString);

//escape string (\ ' \" \n \t \r || \b \f )
let data1 = 'ramlan \tberkata "apa kabar dunia?"'; 
console.log(data1);
let data2 = "usep berkata \"tetap asekk\"";
console.log(data2);
let data3 = "ramlan berjalan-jalan di tengah jalan, \nkerennn";
console.log(data3);

//literak string (template literal string)
let namaDepan = "usep";
let namaBelakang = "ramlan";
let umur = 2;
let namaLengkap = umur + "" + namaDepan + " " + namaBelakang; //menjadi masalah
console.log(namaLengkap);

//lebih elegan biar tidak error
let bioData = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(bioData);