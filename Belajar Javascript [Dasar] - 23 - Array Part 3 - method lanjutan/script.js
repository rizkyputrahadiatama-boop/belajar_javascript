let siswa_01 = ['usep', 'ramlan', 'marlina'];
let siswa_02 = ['ebah', 'ujang', 'didin'];

//menggabungkab dua array

let tim_bola = siswa_01.concat(siswa_02);
console.log(tim_bola.join(' - '));

//mengecek member
if (siswa_01.includes('ujang')){
  console.log('ujang ada di siswa_01');
} else {
  console.log('ujang tidak ada di siswa_01');
}

//posisi 

let posisiJardel = tim_bola.indexOf("jardel");
console.log(`jardel ada di ${posisiJardel}`);
console.log(`ujang ada di ${tim_bola.indexOf("ujang")}`);

//mengurutkan data berdasarkan value

tim_bola.sort();
console.log("sort-->" + tim_bola.join('-'));

tim_bola.reverse();
console.log("reverse-->" + tim_bola.join('-'));