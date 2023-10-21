let log = console.log;
// // let log = console.log;
// // // Easy Going
// // let i = 0;
// // for (i = 1; i <= 20; i++) {
// //     log(i);
// // }
// // Get Even
// for (let y = 0; y <= 200; y +=2) {
//     log(y)
// }

// FIZZ BUZZ
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
