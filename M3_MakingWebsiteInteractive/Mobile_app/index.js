import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-23ffe-default-rtdb.europe-west1.firebasedatabase.app/",
  // projectId: "playground-database-23ffe"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  push(shoppingListInDB, inputValue);

  cleanInputElement();

  // newLi.textContent = inputValue;
  // shoppingListEl.appendChild(newLi);
});

onValue(shoppingListInDB, function (snapshot) {
if(snapshot.exists()){

  
  // convert snapshot.val() from an Object to an Array
  let itemsArray = Object.entries(snapshot.val());
  
  clearShoppingListEl();
  
  for (let i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i];
    // let currentID = currentItem[0];
    // let currentItemValue = currentItem[1]
    
    // append item to the shopping list element for each iteration.
    appendItemToShoppingList(currentItem);
  }
}else{
  shoppingListEl.innerHTML= "No items here yet"
}
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function cleanInputElement() {
  inputFieldEl.value = "";
}

function appendItemToShoppingList(item) {
  let itemID = item[0];
  let itemValue = item[1];

  const newEl = document.createElement("li");
  newEl.textContent = itemValue;

  newEl.addEventListener("click", function () {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
    remove(exactLocationOfItemInDB);
  });

  shoppingListEl.appendChild(newEl);
  // shoppingListEl.innerHTML += `<li>${inputValue}</li>`
}
