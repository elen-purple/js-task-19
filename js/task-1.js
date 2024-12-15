const page = document.querySelector("body");
const backdrop = document.querySelector(`.js-backdrop`);
const openBtn = document.querySelector(`[data-action="open-modal"]`);
const closeBtn = document.querySelector(`[data-action="close-modal"]`);

openBtn.addEventListener("click", toogleClass);
closeBtn.addEventListener("click", toogleClass);
backdrop.addEventListener("click", toogleClass);

function toogleClass(event) {
  if (
    event.currentTarget === backdrop &&
    event.target !== event.currentTarget
  ) {
    return;
  }
  page.classList.toggle("show-modal");
}
