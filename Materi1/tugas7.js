const nilai = [80, 95, 70, 88, 100, 65];
let nilaiTerbesar = 0;
let nilaiTerkecil = 1000;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= nilaiTerbesar ){
        nilaiTerbesar = nilai[i]
    }
    if(nilai[i] < nilaiTerkecil ){
        nilaiTerkecil = nilai[i]
    }
}
console.log(`
    nilai terkecil = ${nilaiTerkecil}
    nilaiTerbesar = ${nilaiTerbesar}
    `)