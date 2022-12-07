function myFunction1() {
  alert("Your answers will be sent to the creator");
}

const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "flex";
  modal.classList.add("fade-in");
  modal.classList.remove("fade-out");
}

function closeModal() {
  modal.classList.add("fade-out");
  modal.classList.remove("fade-in");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

const more = document.querySelector(".more");

function openModalForMore() {
  more.style.display = "flex";
  more.classList.add("fade-in");
  more.classList.remove("fade-out");
}

function closeModalForMore() {
  more.classList.add("fade-out");
  more.classList.remove("fade-in");
  setTimeout(() => {
    more.style.display = "none";
  }, 500);
}

const loader = document.querySelector(".loader");

const topContainer = document.querySelector(".top-container");
const loaderContainer = document.querySelector(".loader-container");
const loaderText = document.querySelector(".loader-text");

function showPage() {
  topContainer.style.display = "unset";
  loaderContainer.style.display = "none";
}
function displayText() {
  loaderText.innerHTML = "Finished Loading";
}
function displayText2() {
  loaderText.innerHTML = "Opening website...";
}

setTimeout(showPage, 5300);

setTimeout(displayText, 4600);

setTimeout(displayText2, 5000);

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the URL to clipboard successfully");
}
