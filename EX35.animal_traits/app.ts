let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing animal names using a for loop
console.log(`\nPrinting animal names:`);
for (let i = 0; i < animals.length; i++) {
    console.log(`\n ${animals[i]}`);
}

// Printing statements about each animal
console.log("\nPrinting statements about each animal:");
for (let i = 0; i < animals.length; i++) {
    console.log(`\n A ${animals[i].toLowerCase()}  would make a great pet.`);
}

// Printing a common characteristic of these animals
console.log("\nAny of these animals would make a great pet!");
