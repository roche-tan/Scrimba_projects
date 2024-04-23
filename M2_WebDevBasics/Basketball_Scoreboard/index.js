let homeSum = 0;
let guestSum = 0;

document.getElementById("home-sum-el").textContent = homeSum;
document.getElementById("guest-sum-el").textContent = guestSum;

const homeAdd1 = document.querySelector(".home-sum1");
const homeAdd2 = document.querySelector(".home-sum2");
const homeAdd3 = document.querySelector(".home-sum3");
const guestAdd1 = document.querySelector(".guest-sum1");
const guestAdd2 = document.querySelector(".guest-sum2");
const guestAdd3 = document.querySelector(".guest-sum3");

homeAdd1.addEventListener("click", () => {
  homeSum += 1;
  document.getElementById("home-sum-el").textContent = homeSum;
});
homeAdd2.addEventListener("click", () => {
  homeSum += 2;
  document.getElementById("home-sum-el").textContent = homeSum;
});

homeAdd3.addEventListener("click", () => {
  homeSum += 3;
  document.getElementById("home-sum-el").textContent = homeSum;
});

guestAdd1.addEventListener("click", () => {
  guestSum += 1;
  document.getElementById("guest-sum-el").textContent = guestSum;
});
guestAdd2.addEventListener("click", () => {
  guestSum += 2;
  document.getElementById("guest-sum-el").textContent = guestSum;
});

guestAdd3.addEventListener("click", () => {
  guestSum += 3;
  document.getElementById("guest-sum-el").textContent = guestSum;
});
