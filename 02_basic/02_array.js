const marvel_heores = ["IronMan", "Captain America", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "BatMan", "Flash", "AquaMan"]

// marvel_heores.push(dc_heroes)

// console.log(marvel_heores);
// console.log(marvel_heores[4][1]);

// const AllHeroes = marvel_heores.concat(dc_heroes)
// console.log(AllHeroes);

// const all_new_heroes = [...marvel_heores, ...dc_heroes]   // concater Spread Operator
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]]
const usable_anothe_array = another_array.flat(Infinity)
console.log(usable_anothe_array);

console.log(Array.isArray("Abhang"));   // check if given variable is array or not 
console.log(Array.from("Abhang"));  // converts the given variable into array

