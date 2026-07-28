const menu = [
10000,
25000,
18000,
12000,
50000
];

let status = "";

for (let i = 0; i <menu.length; i++) {
     if (menu[i] >= 20000){
               status="menu premium "
           } else {
               status="menu reguler"
           }

           console.log(`
            harga = ${menu[i]} 
            kategori ${status}`)
           }