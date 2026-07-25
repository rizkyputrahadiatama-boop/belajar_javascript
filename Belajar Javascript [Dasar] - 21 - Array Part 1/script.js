//cara lama
let siswa1 = "usep";
let siswa2 = "ramlan";
let siswa3 = "ujang";

//cara array
let array_siswa = ["usep", "ramlan", "ujang"];
console.log(array_siswa);

//penjelasan tenatang operator

//indexing
console.log(array_siswa[0]);
console.log(array_siswa[1]);
console.log(array_siswa[2]);
console.log(array_siswa[-1]);

//properti length
let panjang_array = array_siswa.length;
console.log(`panjang array = ${panjang_array}`);

//tambah dan hapus member

array_siswa.push("didin");
console.log(`tambah didin di belakang --> ${array_siswa}`);

let ambil_siswa = array_siswa.pop();
console.log(`hapus ${ambil_siswa} di belakang --> ${array_siswa}`);

array_siswa.unshift("didin");
console.log(`tambah didin di depan --> ${array_siswa}`);

ambil_siswa = array_siswa.shift();
console.log(`hapus ${ambil_siswa} di depan --> ${array_siswa}`);