import { bikes } from "./bikes.js";
// dom js
function displayBikes(bikesToDisplay) {
  const bikesSectionEl = document.getElementById("bikes");
  bikesSectionEl.innerHTML = ""; // clearing section before rendering bikes
  bikesToDisplay.forEach((bike) => {
    const bikeDivEl = document.createElement("div");
    bikeDivEl.setAttribute("class", "bike bike-div");
    bikeDivEl.setAttribute("id", bike.id);
    bikeDivEl.innerHTML = `
        <h2> ${bike.brand} </h2>
        <p> Model: ${bike.model} </p>
        <p> Price: ${bike.price} </p>
        <p> Engine Type: ${bike.specifications.engine.type} </p>  
  `;
    bikesSectionEl.appendChild(bikeDivEl);
  });
}
displayBikes(bikes); // when the page loads
document.getElementById("filter-one").addEventListener("click", () => {
  const filteredBikes = bikes.filter((b) => b.price < 10000);
  console.log(filteredBikes);
  displayBikes(filteredBikes);
});
document.getElementById("filter-two").addEventListener("click", () => {
  const filteredBikes = bikes.filter((b) => b.price > 15000);
  console.log(filteredBikes);
  displayBikes(filteredBikes);
});
document.getElementById("filter-three").addEventListener("click", () => {
  const filteredBikes = bikes.filter((b) => b.price < 15000 && b.price > 10000);
  console.log(filteredBikes);
  displayBikes(filteredBikes);
});
document.getElementById("filter-four").addEventListener("click", () => {
  displayBikes(bikes);
});
