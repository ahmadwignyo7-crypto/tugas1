const pelaggan =["budi"];
const umur =[23];
const hargaBarang = [12000,];
let status = ""


    for (let i = 0; i <hargaBarang.length; i++) {
    
        if (hargaBarang[i] >=30000){
            status="selamat anda dapat diskon"
        } else {
            status="belanja agar mendapat diskon"
        }

    } 
    console.log(`nama = ${pelaggan}\numur = ${umur}\ntotal belanja = ${hargaBarang}\nstatus= ${status}`)

