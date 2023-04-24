const number = document.querySelectorAll(".numbers");
const result = document.querySelector(".result");

function myFunction() {
  const rating = document.getElementById("rating");
  const thanks = document.getElementById("thanks");

  if (rating.style.display !== "block" && result.childNodes.length !== 0) {
    rating.style.display = "none";
    thanks.style.display = "block";
  }
}

let checked = false;
number.forEach((element) => {
  element.addEventListener("click", () => {
    if (checked === false) {
      result.innerText = element.innerText;
      element.style.backgroundColor = "hsl(25, 97%, 53%)";
      element.style.color = "hsl(0, 0%, 100%)";
    }
    checked = true;
  });
});
