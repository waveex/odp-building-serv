const moreOne = document.querySelector("#more-1");
const specialOne = document.querySelector("#special-1");

moreOne.addEventListener("click", (e) => {
  if (moreOne.innerHTML === "View less details") {
    moreOne.innerHTML = "View more details";
  } else {
    moreOne.innerHTML = "View less details";
  }

  specialOne.classList.toggle("show");
});

const moreTwo = document.querySelector("#more-2");
const specialTwo = document.querySelector("#special-2");

moreTwo.addEventListener("click", (e) => {
  if (moreTwo.innerHTML === "View less details") {
    moreTwo.innerHTML = "View more details";
  } else {
    moreTwo.innerHTML = "View less details";
  }

  specialTwo.classList.toggle("show");
});

const moreThree = document.querySelector("#more-3");
const specialThree = document.querySelector("#special-3");

moreThree.addEventListener("click", (e) => {
  if (moreThree.innerHTML === "View less details") {
    moreThree.innerHTML = "View more details";
  } else {
    moreThree.innerHTML = "View less details";
  }

  specialThree.classList.toggle("show");
});

const moreFour = document.querySelector("#more-4");
const specialFour = document.querySelector("#special-4");

moreFour.addEventListener("click", (e) => {
  if (moreFour.innerHTML === "View less details") {
    moreFour.innerHTML = "View more details";
  } else {
    moreFour.innerHTML = "View less details";
  }

  specialFour.classList.toggle("show");
});

const moreFive = document.querySelector("#more-5");
const specialFive = document.querySelector("#special-5");

moreFive.addEventListener("click", (e) => {
  if (moreFive.innerHTML === "View less details") {
    moreFive.innerHTML = "View more details";
  } else {
    moreFive.innerHTML = "View less details";
  }

  specialFive.classList.toggle("show");
});
