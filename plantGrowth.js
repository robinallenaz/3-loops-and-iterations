//Defining variables
const PI = 3.1415;
const minSpacePerPlant = 0.8;
const startingPlants = 20;
const radius = 5;
let week = 0;

//Calculates the area of the garden
const area = PI * radius * radius;
const maxCapacity = Math.floor(area / minSpacePerPlant);
