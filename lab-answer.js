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

// ----------Yell at the Ninja Turtles answered-------------
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
log(favMovies[8]);
const sortMovies = favMovies.sort();
log(sortMovies);
//pop method
const lastMovies = favMovies.pop();
log("Last Movie", lastMovies);
log("Updated Movie", favMovies);

// push method
const addMovies = favMovies.push("Guardians of the Galaxy");
log("Updated Movie", favMovies);

favMovies.reverse();
log("Reversed Movie", favMovies);

favMovies.shift();
log("Shift method", favMovies);

favMovies.unshift();
log("Unshift method", favMovies);

const DjangoUnchained = favMovies.indexOf("Django Unchained");
if (DjangoUnchained !== -1) {
    favMovies.splice(DjangoUnchained, 1, "Avatar");
    log("Updated movie list", favMovies);
} else {
    log("The movie not found in the list");
}
// slice the half of the array.
const midFavMovies = Math.ceil(favMovies.length / 2);
const lasthalf = favMovies.slice(midFavMovies);
log(lasthalf);
// console index of "fast and furious"
favMovies.pop();
const indexOfFastFurious = favMovies.indexOf("Fast and Furious");
if (indexOfFastFurious !== -1) {
    log('Index of "Fast and Furious":', indexOfFastFurious)
} else {
    log('"Fast and Furious" is not in the array');
}