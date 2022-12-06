function myFunction() {
  alert("Your answers will be sent to the creator");
}

const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "flex";
  modal.classList.add('fade-in');
  modal.classList.remove('fade-out');
}

function closeModal() {
  modal.classList.add('fade-out');
  modal.classList.remove('fade-in');
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

const more = document.querySelector(".more");

function openModalForMore() {
  more.style.display = "flex";
  more.classList.add('fade-in');
  more.classList.remove('fade-out');
}

function closeModalForMore() {
  more.classList.add('fade-out');
  more.classList.remove('fade-in');
  setTimeout(() => {
    more.style.display = "none";
  }, 500);
}

const loader = document.querySelector(".loader")

const topContainer = document.querySelector(".top-container");
const loaderContainer = document.querySelector(".loader-container");

function showPage() {
  topContainer.style.display = 'unset';
  loaderContainer.style.display = 'none';
}

setTimeout(showPage, 2000);
