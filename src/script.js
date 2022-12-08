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

const loader = document.querySelector(".loader");

const topContainer = document.querySelector(".top-container");
const loaderContainer = document.querySelector(".loader-container");
const loaderText = document.querySelector(".loader-text");
const body = document.querySelector("body")

function showPage() {
  topContainer.style.display = "unset";
  loaderContainer.style.display = "none";
  body.style.backgroundColor = "#05c46b"
}
function displayText() {
  loaderText.innerHTML = "Finished Loading";
}
function displayText2() {
  loaderText.innerHTML = "Opening website...";
}


function test(){
  if (confirm ('You seem to like this website, would you like to contact the creator feedback?')) 
  if(confirm(window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHwQlmCSsdTSkpxxtRhkMvhfXZmWxKwZbCRPzfKKlrQLnqxsdBmJZBQTmXxlsfNrSGrxCJG')))
  alert("");
 else{
  alert("Thanks for your feedback!")
 }
}
setTimeout(displayText, 2800);

setTimeout(displayText2, 3000);

setTimeout(showPage, 3100);

setTimeout(test, 220000);

function copy() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the URL to clipboard successfully")
}
