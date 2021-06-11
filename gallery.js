const compare = document.querySelector(".compare__input--js");
const after = document.querySelector(".compare__after--js");
compare.addEventListener("input", function (e) {
  after.style.width = e.target.value + "px";
});
const compareTwo = document.querySelector(".compare__input-two--js");
const afterTwo = document.querySelector(".compare__after-two--js");
compareTwo.addEventListener("input", function (e) {
  afterTwo.style.width = e.target.value + "px";
});
