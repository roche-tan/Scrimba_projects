const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Generates two random passwords when the user clicks the button

// Each password should be 15 characters long

let passwordBtn = document.getElementById("btn-password");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

passwordBtn.addEventListener("click", function () {
  let randomPasswordOne = "";
  let randomPasswordTwo = ""

  
  for (let i = 0; i < 15; i++ ){
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    // console.log(characters[randomIndex]);
    randomPasswordOne += characters[randomIndexOne]
    randomPasswordTwo += characters[randomIndexTwo]
  }
  passwordOne.textContent = randomPasswordOne
  passwordTwo.textContent = randomPasswordTwo

});
