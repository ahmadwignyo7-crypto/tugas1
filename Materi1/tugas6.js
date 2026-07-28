const umur = [8, 13, 17, 20, 25, 11];
let status = "";

for (let i = 0; i <umur.length; i++) {
     if (umur[i] >= 17){
               status="bisa masuk "
           } else {
               status="tidak bisa masuk"
           }

           console.log(`umur = ${umur[i]}  ${status}`)
        }