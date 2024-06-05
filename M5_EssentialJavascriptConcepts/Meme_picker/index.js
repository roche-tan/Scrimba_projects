import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

emotionRadios.addEventListener("change", highlightCheckedOption);
getImageBtn.addEventListener("click", getMatchingCatsArray);
gifsOnlyOption.addEventListener("change", getMatchingCatsArray);

function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnlyOption.checked;

    const matchingCatsArray = catsData.filter(function (catEmotion) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
    } else {
        return cat.emotionTags.includes(selectedEmotion);
    }
});

console.log(matchingCatsArray);
}
}

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let htmlContent = "";

  for (let emotion of emotions) {
    htmlContent += ` <div class="radio">
                        <label for =${emotion}">${emotion}</label>
                        <input
                            type = "radio"
                            id = ${emotion}
                            value = ${emotion}
                            name = "emotions"
                        >
                    </div>`;
  }

  emotionRadios.innerHTML = htmlContent;
}

renderEmotionsRadios(catsData);
