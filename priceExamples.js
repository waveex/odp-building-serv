const moreOne = document.querySelector("#more-1");
const specialOne = document.querySelector("#special-1");
const plusOne = document.querySelector(".plus-1");
const plusTwo = document.querySelector(".plus-2");
const plusThree = document.querySelector(".plus-3");
const plusFour = document.querySelector(".plus-4");
const plusFive = document.querySelector(".plus-5");

moreOne.addEventListener("click", (e) => {
  if (moreOne.innerHTML === "View less details") {
    moreOne.innerHTML = "View more details";
    plusOne.innerHTML = "+";
  } else {
    moreOne.innerHTML = "View less details";
    plusOne.innerHTML = "-";
  }

  specialOne.classList.toggle("show");
});

const moreTwo = document.querySelector("#more-2");
const specialTwo = document.querySelector("#special-2");

moreTwo.addEventListener("click", (e) => {
  if (moreTwo.innerHTML === "View less details") {
    moreTwo.innerHTML = "View more details";
    plusTwo.innerHTML = "+";
  } else {
    moreTwo.innerHTML = "View less details";
    plusTwo.innerHTML = "-";
  }

  specialTwo.classList.toggle("show");
});

const moreThree = document.querySelector("#more-3");
const specialThree = document.querySelector("#special-3");

moreThree.addEventListener("click", (e) => {
  if (moreThree.innerHTML === "View less details") {
    moreThree.innerHTML = "View more details";
    plusThree.innerHTML = "+";
  } else {
    moreThree.innerHTML = "View less details";
    plusThree.innerHTML = "-";
  }

  specialThree.classList.toggle("show");
});

const moreFour = document.querySelector("#more-4");
const specialFour = document.querySelector("#special-4");

moreFour.addEventListener("click", (e) => {
  if (moreFour.innerHTML === "View less details") {
    moreFour.innerHTML = "View more details";
    plusFour.innerHTML = "+";
  } else {
    moreFour.innerHTML = "View less details";
    plusFour.innerHTML = "-";
  }

  specialFour.classList.toggle("show");
});

const moreFive = document.querySelector("#more-5");
const specialFive = document.querySelector("#special-5");

moreFive.addEventListener("click", (e) => {
  if (moreFive.innerHTML === "View less details") {
    moreFive.innerHTML = "View more details";
    plusFive.innerHTML = "+";
  } else {
    moreFive.innerHTML = "View less details";
    plusFive.innerHTML = "-";
  }

  specialFive.classList.toggle("show");
});
