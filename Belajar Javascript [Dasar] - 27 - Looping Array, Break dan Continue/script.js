let array_nama = ["usep", "ramlan", "marlina", "ujang", "saep"];

let cari_nama = "saep";

for(let i = 0; i < array_nama.length; i++){
  console.log(array_nama[i]);

  if (array_nama[i] === cari_nama){
    console.log(`nama ${cari_nama} ditemukan`);
    break;
  }
}

console.log("akhir dari looping");

let angka = [1,2,3,4,5,6];

for (let i=0; i < angka.length;i++){

  if(angka[i]==2){
    continue;
  }

  console.log(angka[i]);
}