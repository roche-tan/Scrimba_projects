const getActivityBtn = document.getElementById("get-activity-btn");

getActivityBtn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.getElementById("activity-title").textContent= "🦾 HappyBot🦿"
      document.querySelector("main").classList.add("fun")
    });
});
