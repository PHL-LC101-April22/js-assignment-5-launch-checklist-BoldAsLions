// Write your JavaScript code here!


window.addEventListener("load", function () {

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch() 
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
  }).then(function () {
    let selectPlanet = pickPlanet(listedPlanets);

    addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image);
    console.log(listedPlanets);
  });

  let form = document.querySelector("form");
  let list = document.getElementById("faultyItems");
  form.addEventListener("submit", function () {

    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value;

    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = copilotName.value;

    let fuelLevelNum = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelNum.value);

    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoMass.value);
    event.preventDefault();

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});

// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.





async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return response.json()
  });

  return planetsReturned;
}

