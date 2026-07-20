const stok = [12, 0, 5, 8, 0, 20];
let status ="";
 let barangTersedia=0;
 let barangHabis =0;

for (let i = 0; i <stok.length; i++) {
     if (stok [i]>=1){
               status="barang haBIS "
               barangHabis++;
           } else {
               status="STOK TERSEDIA"
               barangTersedia++;
           }

           console.log(`
            barang = ${stok[i]} > ${status}`)
           }
            console.log(`
                berapa barang yg habis = ${barangHabis}
                barang Tersedia =${barangTersedia}
                `)
        