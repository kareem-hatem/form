function myFunction() {
  alert("Your answers will be sent to the creator");
}

const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

const more = document.querySelector(".more");

function openModalForMore() {
  more.style.display = "flex";
}

function closeModalForMore() {
  more.style.display = "none";
}