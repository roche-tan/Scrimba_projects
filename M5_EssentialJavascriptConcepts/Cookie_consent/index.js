const displayModal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  displayModal.style.display = "inline";
  // displayModal.style.display = "block";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  displayModal.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalText.innerHTML = `
  <div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading">
  <p id="upload-text">Uploading your data to the dark web...</p>
      </div>`;

  // uploadText.innerHTML = `Making the sale...`;
  setTimeout(function () {
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  },3000);
});
