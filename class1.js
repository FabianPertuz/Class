const pets = [];
menubar(function() {
    console.log("Welcome to the Pet Management System");});
function showmenu() {
    console.log("1. Add Pet");
    console.log("2. Show Pets");
    console.log("3. Remove Pet");
    console.log("4. update Pet");
    console.log("5. pet by name");
    console.log("6. Exit");
}
function addPet(pet) {
    const name= prompt("Enter pet name:");
    const species = prompt("Enter pet species:");
    const age = parseInt(prompt("Enter pet age:"));
    const weight = parseFloat(prompt("Enter pet weight:"));
    const healthStatus = prompt("Enter pet health status:");
    if (!name || !species || isNaN(age) || isNaN(weight) || !healthStatus) {
        console.log("Invalid input. Please try again.");
        return;
    }

    pets.push(pet);
    console.log(`Pet ${pet.name} added successfully.`); 

}
function showPets() {
    if (pets.length === 0) {
        console.log("No pets available.");
        return;
    }
    console.log("List of Pets:");
    pets.forEach((pet, index) => {
        console.log(`${index + 1}. Name: ${pet.name}, Species: ${pet.species}, Age: ${pet.age}, Weight: ${pet.weight}, Health Status: ${pet.healthStatus}`);
    });
}
function removePet(name) {
    const index = pets.findIndex(pet => pet.name === name);
    if (index === -1) {
        console.log(`Pet with name ${name} not found.`);
        return;
    }
    pets.splice(index, 1);
    console.log(`Pet ${name} removed successfully.`);
}
function updatePet(name) {
    const index = pets.findIndex(pet => pet.name === name);
    if (index === -1) {
        console.log(`Pet with name ${name} not found.`);
        return;
    }
    const pet = pets[index];
    const newName = prompt(`Enter new name for ${pet.name} (leave blank to keep current):`) || pet.name;
    const newSpecies = prompt(`Enter new species for ${pet.species} (leave blank to keep current):`) || pet.species;
    const newAge = parseInt(prompt(`Enter new age for ${pet.age} (leave blank to keep current):`)) || pet.age;
    const newWeight = parseFloat(prompt(`Enter new weight for ${pet.weight} (leave blank to keep current):`)) || pet.weight;
    const newHealthStatus = prompt(`Enter new health status for ${pet.healthStatus} (leave blank to keep current):`) || pet.healthStatus;

    pets[index] = { name: newName, species: newSpecies, age: newAge, weight: newWeight, healthStatus: newHealthStatus };
    console.log(`Pet ${name} updated successfully.`);
}
function petByName(name) {
    const pet = pets.find(pet => pet.name === name);
    if (!pet) {
        console.log(`Pet with name ${name} not found.`);
        return;
    }
    console.log(`Pet Details: Name: ${pet.name}, Species: ${pet.species}, Age: ${pet.age}, Weight: ${pet.weight}, Health Status: ${pet.healthStatus}`);
}
function main() {
    while (true) {
        showmenu();
        const choice = parseInt(prompt("Enter your choice:"));
        switch (choice) {
            case 1:
                addPet({});
                break;
            case 2:
                showPets();
                break;
            case 3:
                const removeName = prompt("Enter pet name to remove:");
                removePet(removeName);
                break;
            case 4:
                const updateName = prompt("Enter pet name to update:");
                updatePet(updateName);
                break;
            case 5:
                const searchName = prompt("Enter pet name to search:");
                petByName(searchName);
                break;
            case 6:
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}