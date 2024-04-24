let myLeads = [];
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLead();
  inputEl.value = "";
});

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
//     /* const li = document.createElement("li");
//     li.textContent = myLeads[i]
//     ulEl.append(li)
//     */
//     listItems += `<li>${myLeads[i]}</li>`;
//   }
//   ulEl.innerHTML = listItems;
// }

// more eficient method
function renderLead() {
  let listItem = `
    <li>
      <a href="${inputEl.value}" target="_blank">
        ${inputEl.value}
      </a>
    </li>`;
  ulEl.innerHTML += listItem;
  console.log(listItem);
}
