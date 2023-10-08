// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.


const coffeeMenu = require('./coffee_data');

//PRINT ARRAY OF DRINKS
// const drinkMenu = coffeeMenu.map(a => a.name);
// console.log(drinkMenu)

//PRINT ARRAY OF DRINKS UNDER 5  
// for (let i = 0; i < coffeeMenu.length; i++) {
//     if (coffeeMenu[i].price <= 5) {
//         console.log(coffeeMenu[i]);
//     }
// }

//PRINT ARRAY OF EVEN NUMBERED DRINKS

// for (let i = 0; i < coffeeMenu.length; i++) {
//     if (coffeeMenu[i].price%2== 0) {
//         console.log(coffeeMenu[i]);
//     }
// }

//PRINT TOTAL IF YOU ORDERED EVERY DRINK

// console.log(coffeeMenu.reduce((n, {price}) => n + price, 0));


// PRINT ARRAY OF ALL SEASONAL ITEMS

// for (let i = 0; i < coffeeMenu.length; i++) {
//     if (coffeeMenu[i].seasonal== true) {
//         console.log(coffeeMenu[i].name);
//     }
// }

//PRINT SEASON DRINKS WITH "WIT IMPORTED BEANS"

for (let i = 1; i < coffeeMenu.length; i++) {
    if (coffeeMenu[i].seasonal== true) {
        console.log(coffeeMenu[i].name+" WITH IMPORTED BEANS");
    }
}