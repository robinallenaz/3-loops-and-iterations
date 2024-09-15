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
  if (plantCount > 0.8 * maxCapacity) {
    console.log("Recommendation: Prune the plants.");
  } else if (plantCount > 0.5 * maxCapacity) {
    console.log("Recommendation: Monitor the plants.");
  } else {
    console.log("Recommendation: Plant more plants.");
  }
}

// Predict growth for 1, 2, and 3 weeks
willPlantGrow(1);
willPlantGrow(2);
willPlantGrow(3);

//Part 2: If starting with 100 plants

const startingPlants2 = 100;

function calculateSpaceAndRadius(weeks, startingPlants) {
  const plantCount = startingPlants * Math.pow(2, weeks);
  const requiredSpace = plantCount * minSpacePerPlant;
  const newRadius = Math.sqrt(requiredSpace / PI);

  console.log(
    `After ${weeks} weeks, you will need ${requiredSpace.toFixed(
      2
    )} square meters of space.`
  );
  console.log(
    `The expanded garden would need a radius of ${newRadius.toFixed(2)} meters.`
  );
}

// Predict growth for 10 weeks
calculateSpaceAndRadius(10, startingPlants2);

//Part 3: error handling with try-catch block

// Part 3: Error handling with try-catch

function checkGardenCapacity(startingPlants, radius, weeks) {
  const gardenArea = PI * radius * radius;
  const plantCount = startingPlants * Math.pow(2, weeks);

  try {
    if (plantCount > maxCapacity) {
      throw new Error("Garden capacity exceeded!");
    }
    console.log(`After ${weeks} weeks, the garden can still hold the plants.`);
  } catch (error) {
    console.error(`Error: ${error.message}. You need a bigger garden!`);
  }
}

// Check for 100 plants in a garden with a radius of 5 meters after 10 weeks
checkGardenCapacity(100, 5, 10);
