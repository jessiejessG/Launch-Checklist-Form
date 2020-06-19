// Write your JavaScript code here!

         

/* This block of code shows how to format the HTML once you fetch some planetary JSON!*/
// let missionTarget = document.getElementById("missionTarget");   
window.addEventListener("load", function() {
   fetch("https:handlers.education.launchcode.org/static/planets.json").then(function(response) { 
      response.json().then(function(json) { 
          const missionTarget = document.getElementById("missionTarget");
          let index = 0
          missionTarget.addEventListener("click", function() {
              missionTarget.innerHTML =
              `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
              </ol>
              <img src="${json[index].image}">`
              index = (index + 1) % json.length;
          });
      });
   } )
   let list = document.getElementById("faultyItems");
      list.style.visibility = "hidden";

   let form = document.getElementById("formSubmit");
      form.addEventListener("click", function(event) {
      event.preventDefault();

   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");

   let pilotInput = document.querySelector("input[name=pilotName]");
   let pilot = pilotInput.value;
   let pilotTest = Number(pilot);

   let copilotInput = document.querySelector("input[name=copilotName]")
   let copilot = copilotInput.value;
   let copilotTest = Number(copilot);

   let fuelInput = document.querySelector("input[name=fuelLevel]");
   let fuelLevel = Number(fuelInput.value);


   let cargoInput = document.querySelector("input[name=cargoMass]");
   let cargoLevel = Number(cargoInput.value);

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("all fields are required!");


      } else if (!isNaN(pilotTest) || !isNaN(copilotTest) || isNaN(fuelLevel) || isNaN(cargoLevel)) {
         alert("Make sure to enter valid information for each");


      } else {
         list.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;
         let launchStatus = document.getElementById("launchStatus")
         if (fuelLevel < 10000 && cargoLevel <= 10000 ) {
            fuel.innerHTML = "Fuel level too low for launch";
            cargo.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color='red';

         } else if (fuelLevel >= 10000 && cargoLevel < 10000) {
            fuel.innerHTML = "Fuel level high enough for launch"
            cargo.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color='green';


         } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "Fuel level high enough for launch"
            cargo.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color='red';

         } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuel.innerHTML = "Fuel level too low for launch";
            cargo.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color='red';

         } else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color='green';
         }
      }
   });
});