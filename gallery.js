// const compare = document.querySelector(".compare__input--js");
// const after = document.querySelector(".compare__after--js");

// compare.addEventListener("input", function (e) {
//   after.style.width = e.target.value + "px";
// });
// const compareTwo = document.querySelector(".compare__input-two--js");
// const afterTwo = document.querySelector(".compare__after-two--js");
// compareTwo.addEventListener("input", function (e) {
//   afterTwo.style.width = e.target.value + "px";
// });
const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector(
  "#image-comparison-slider .img-wrapper"
);
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {
  if (isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 0) mouseX = 0;
  else if (mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX / sliderWidth) * 100).toFixed(
    4
  )}%`;
  sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
    4
  )}% - ${sliderHandleWidth / 2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseMove(event) {
  if (isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 0) mouseX = 0;
  else if (mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX / sliderWidth) * 100).toFixed(
    4
  )}%`;
  sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
    4
  )}% - ${sliderHandleWidth / 2}px)`;
}

function sliderMouseDown(event) {
  if (isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if (!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if (isSliderLocked) isSliderLocked = false;
}
///////////////////////////////////////////////////////////////////////////

const sliderTwo = document.querySelector(".image-comparison-slider-two");
const sliderTwoImgWrapper = document.querySelector(
  ".image-comparison-slider-two .img-wrapper"
);
const sliderTwoHandle = document.querySelector(
  ".image-comparison-slider-two .handle"
);

sliderTwo.addEventListener("mousemove", sliderTwoMouseMove);
sliderTwo.addEventListener("touchmove", sliderTwoMouseMove);

function sliderTwoMouseMove(event) {
  if (isSliderTwoLocked) return;

  const sliderTwoLeftX = sliderTwo.offsetLeft;
  const sliderTwoWidth = sliderTwo.clientWidth;
  const sliderTwoHandleWidth = sliderTwoHandle.clientWidth;

  let mouseTwoX = (event.clientX || event.touches[0].clientX) - sliderTwoLeftX;
  if (mouseTwoX < 0) mouseTwoX = 0;
  else if (mouseTwoX > sliderTwoWidth) mouseTwoX = sliderTwoWidth;

  sliderTwoImgWrapper.style.width = `${(
    (1 - mouseTwoX / sliderTwoWidth) *
    100
  ).toFixed(4)}%`;
  sliderTwoHandle.style.left = `calc(${(
    (mouseTwoX / sliderTwoWidth) *
    100
  ).toFixed(4)}% - ${sliderTwoHandleWidth / 2}px)`;
}

let isSliderTwoLocked = false;

sliderTwo.addEventListener("mousedown", sliderMouseTwoDown);
sliderTwo.addEventListener("touchstart", sliderMouseTwoDown);
sliderTwo.addEventListener("mouseup", sliderMouseTwoUp);
sliderTwo.addEventListener("touchend", sliderMouseTwoUp);
sliderTwo.addEventListener("mouseleave", sliderMouseTwoLeave);

function sliderMouseTwoMove(event) {
  if (isSliderTwoLocked) return;

  const sliderLeftTwoX = sliderTwo.offsetLeft;
  const sliderWidthTwo = sliderTwo.clientWidth;
  const sliderHandleTwoWidth = sliderTwoHandle.clientWidth;

  let mouseTwoX =
    (event.clientTwoX || event.touches[0].clientTwoX) - sliderLeftTwoX;
  if (mouseTwoX < 0) mouseTwoX = 0;
  else if (mouseTwoX > sliderWidthTwo) mouseTwoX = sliderWidthTwo;

  sliderTwoImgWrapper.style.width = `${(
    (1 - mouseTwoX / sliderWidthTwo) *
    100
  ).toFixed(4)}%`;
  sliderTwoHandle.style.left = `calc(${(
    (mouseTwoX / sliderWidthTwo) *
    100
  ).toFixed(4)}% - ${sliderHandleTwoWidth / 2}px)`;
}

function sliderMouseTwoDown(event) {
  if (isSliderTwoLocked) isSliderTwoLocked = false;
  sliderMouseTwoMove(event);
}

function sliderMouseTwoUp() {
  if (!isSliderTwoLocked) isSliderTwoLocked = true;
}

function sliderMouseTwoLeave() {
  if (isSliderTwoLocked) isSliderTwoLocked = false;
}
