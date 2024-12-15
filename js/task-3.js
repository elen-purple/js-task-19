const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = input.value;
  }
});

const inputELement = document.querySelector("#validation-input");

inputELement.addEventListener("blur", (event) => {
  if (event.target.value.length > event.target.dataset.length) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
});
