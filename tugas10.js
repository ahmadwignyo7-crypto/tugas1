const skor = [100, 450, 800, 150, 900];
let rank = "";

for (let i = 0; i <skor.length; i++) {
    if (skor[i] >= 800) {
    rank = "Mythic";
} else if (skor[i] >= 500) {
    rank = "Legend";
} else if (skor[i]>= 300) {
    rank = "Epic";
} else {
    rank = "Warrior";
}
 console.log(`
    player ${i}: ${skor[i]} -> ${rank}`)
}