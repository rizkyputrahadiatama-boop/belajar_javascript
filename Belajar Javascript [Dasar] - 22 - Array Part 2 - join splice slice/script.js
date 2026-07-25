//method di javascript pop, push, shift dan unshift

let siswa = ["usep", "ramlan", "ujang"];

console.log(siswa);

//join (separator:string) --> menggabungkan array
console.log(siswa.join('-'));

//splice(index,delete/nodelete,data)
let hasil_splice;

//2a. index dan delete
hasil_splice = siswa.splice(1,1);
console.log(`hasil splice 1,1 = ${hasil_splice}`);
console.log(`siswa menjadi ${siswa}`);

//2b menambah data
hasil_splice = siswa.splice(1,0, 'ramlan');
console.log(`hasil splice 1,0,usep = ${hasil_splice}`);
console.log(`siswa menjadi ${siswa}`);

//slice()
console.log(siswa.join('-'));

let anak_pintar = siswa.slice(1,3);
console.log(`anak pintar = ${anak_pintar.join('-')}`);

console.log(siswa.join('-'));