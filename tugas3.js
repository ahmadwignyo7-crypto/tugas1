const hero = [
"Layla",
"Ling",
"Franco",
"Fanny",
"Miya",
"Eudora"
];

let status ="";

for (let i = 0; i <hero.length; i++) {
     if (hero[i].startsWith("F")){
               status="Hero Assassin/Tank "
           } else {
               status="Hero Biasa"
           }

           console.log(`
            nama = ${hero[i]} > ${status}`)
        }