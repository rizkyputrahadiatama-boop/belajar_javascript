let nilai = 40;
console.log(`nilai: ${nilai}`);
let hasil;

if (nilai >=75){
  hasil = "lulus";
} else {
  hasil = "perbaikan";
}

console.log(`hasil: ${hasil}`);

//ternary operator
//variable hasil = (kondisi) ? true : false
let hasil_ternary = (nilai >=75) ? "lulus" : "perbaikan";
console.log(`hasil ternary: ${hasil_ternary}`);