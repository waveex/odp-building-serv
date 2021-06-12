const moreOne = document.querySelector("#more-1");
const lessOne = document.querySelector("#less-1");
const specialOne = document.querySelector("#special-1");

moreOne.addEventListener("click", (e) => {
  if (moreOne.innerHTML === "View less details") {
    moreOne.innerHTML = "View more details";
  } else {
    moreOne.innerHTML = "View less details";
  }

  specialOne.classList.toggle("show");
});
