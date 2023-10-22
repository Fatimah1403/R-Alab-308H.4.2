let log = console.log;
//------------Easy Going--------------------------
let i = 0;
for (i = 1; i <= 20; i++) {
    log(i);
}
//-------------- Get Even------------------------
for (let y = 0; y <= 200; y +=2) {
    log(y)
}

//-----------FIZZ BUZZ-----------------
for (let z = 1; z <= 100; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        log("FizzBuzz");
    } else if (z % 3 === 0) {
        log("Fizz");
    } else if (z % 5 === 0) {
        log("Buzz");
    } else {
        log(z);
    }
}

// ------------------Wild Wild Life------------------------
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1;
log(plantee);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
log(wolfy);
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
log(dart)
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift("Gameboy");
log(wolfy);

//---------Yell at the Ninja Turtles------------------------
const ninjaTut = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const turtle of ninjaTut) {
    const upperCase = turtle.toUpperCase(ninjaTut);
    log(upperCase);
}
