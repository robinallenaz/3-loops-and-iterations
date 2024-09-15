//Defining variables
const PI = 3.1415;
const minSpacePerPlant = 0.8;
const startingPlants = 20;
const radius = 5;
let week = 0;

//Calculates the area of the garden
const area = PI * radius * radius;
const maxCapacity = Math.floor(area / minSpacePerPlant);

//Calculates plant growth after a given number of weeks
function willPlantGrow(weeks) {
    let plantCount = startingPlants * Math.pow(2, weeks);
}

 // Log a different statement to the console depending on plantCount
 if (plantCount > 0.8 * maxCapacity) {
    console.log("Recommendation: Prune the plants.");
  } else if (plantCount > 0.5 * maxCapacity) {
    console.log("Recommendation: Monitor the plants.");
  } else {
    console.log("Recommendation: Plant more plants.");
  }

// Predict growth for 1, 2, and 3 weeks
predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

//Part 2: If starting with 100 plants