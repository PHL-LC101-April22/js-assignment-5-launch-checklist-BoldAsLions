// Write your helper functions here!

require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  //Here is the HTML formatting for our mission target div.
  let div = document.getElementById("missionTarget");

  let destination = `
               <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
  div.innerHTML = destination;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty"
  } else if (isNaN(Number(testInput))) {
    return "Not a number"
  } else if (isNaN(Number(testInput)) === false) {
    return "Is a number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
  } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
    alert("Make sure to enter valid information for each field!");
  } else {
    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);
    list.style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let launchStatus = document.getElementById("launchStatus")
    if (fuelLevel < 10000) {
      document.getElementById("faultyItems").innerHTML += "There is not enough fuel for the journey.";
    }
    if (cargoLevel > 10000) {
      document.getElementById("faultyItems").innerHTML += "There is too much mass for the shuttle to take off.";

    }

    if (fuelLevel < 10000 || cargoLevel > 10000) {
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      list.style.visibility = "visible"
    } else {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
      list.style.visibility = "hidden"
    }
  }
}


async function myFetch() {

  return await fetch("https://handlers.education.launchcode.org/static/planets.json").then(res => res.json())
}


// let planetsReturned;

// planetsReturned = await fetch().then(function (response) {
// });

// return planetsReturned;
// }

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
