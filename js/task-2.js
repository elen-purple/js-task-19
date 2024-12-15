const redRadio = document.querySelector(`[value="red"]`);
const whiteRadio = document.querySelector(`[value="white"]`);
const greenRadio = document.querySelector(`[value="green"]`);
const page = document.querySelector("body");

redRadio.addEventListener("focus", () => {
  page.style.backgroundColor = "red";
});
whiteRadio.addEventListener("focus", () => {
  page.style.backgroundColor = "white";
});
greenRadio.addEventListener("focus", () => {
  page.style.backgroundColor = "green";
});
