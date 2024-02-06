// share button click

const shareButtons = document.querySelectorAll(".share-buttons");
const buttonClick = document.getElementById("button-click");
const buttonClicked = document.getElementById("button-clicked");

shareButtons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonClick.classList.toggle("hidden");
    buttonClick.classList.toggle("block");

    buttonClicked.classList.toggle("block");
    buttonClicked.classList.toggle("hidden");
  });
});
