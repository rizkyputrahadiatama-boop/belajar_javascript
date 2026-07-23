//operasi string

//charAt
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index 5 = ${dataChar}`); //tidak ada character

//menambung string
let namaDepan = "Usep";
let namaBelakang = "Surecep";

let namaLengkap = namaDepan.concat(' ',namaBelakang,' si kera');
console.log(namaLengkap);

//mengambil index (kemunculan pertama)
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('u'));

//mengambil substring
let namaLengkap_5_12 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_12);
console.log(namaLengkap.substring(12,5));

//slice
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5)); //menjadi kosong

//replace
namaLengkap = namaLengkap.replace('Usep Surecep','Ramlan Spakbor');
console.log(namaLengkap);

//tolower
console.log(namaLengkap.toLowerCase());

//uppercase
console.log(namaLengkap.toUpperCase());

//extract data number
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger); 

let dataString3 = '10.125'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);
