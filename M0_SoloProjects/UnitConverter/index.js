/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
// inputEl = 20;
let meterEl = document.getElementById("p-length")

convertBtn.addEventListener("click", function () {
  console.log("clicked");
  render(inputEl.value);
});

function render(conversion) {
  let result = conversion * 3.281
  meterEl.innerHTML= `${conversion} meters = ${result} feet | ${conversion} feet = ${result} meters`
}
