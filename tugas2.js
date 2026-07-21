const siswa =["eka","rahman","baji","budang"]
const nilai = [90, 75, 60, 45, 88];
let status = "";
let jumlahLulus = 0;
let jumlahTidakLulus = 0;

for (let i = 0; i <nilai.length; i++) {
     if (nilai[i] >=75){
               status="lulus" 
               jumlahLulus++;
           } else {
               status="tidak lulus"
               jumlahTidakLulus++;
           }

           
           console.log(`
            siswa $[i] = ${siswa[i]}
             nilai =${nilai[i]} 
             status = ${status}`);
            } 
            console.log(`
               jumlah yang lulus = ${jumlahLulus}
               jumlah tidak lulus = ${jumlahTidakLulus}
                         
           `)
    
   