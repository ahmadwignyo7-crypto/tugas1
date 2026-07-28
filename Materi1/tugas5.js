const hadir = [
true,
false,
true,
true,
false,
true
];
let status ="";
let siswaHadir= 0;
let siswatidak= 0;

for (let i = 0; i <hadir.length; i++) {
     if (hadir[i] === true){
               status="hadir "
               siswaHadir++;
           } else {
               status="tidak hadir"
               siswatidak++;
           }

           console.log(`
            ${i + 1} = ${hadir[i]} > ${status}`)
            
            }
            console.log(`
                siswa hadir = ${siswaHadir}
                siswa tidak hadir =${siswatidak}`);