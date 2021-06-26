const shield = document.querySelector(".shield__container");
const company = document.querySelector(".company__link");
const bird = document.querySelector(".bird__link");
const globe = document.querySelector(".globe__link");
const text = document.querySelector(".image__text");
company.addEventListener("mouseenter", (e) => {
  bird.classList.add("hover");
  shield.classList.add("hover");
  globe.classList.add("hover");
  text.innerHTML = "Building Services";
  text.classList.add("show");
});
company.addEventListener("mouseleave", (e) => {
  bird.classList.remove("hover");
  shield.classList.remove("hover");
  globe.classList.remove("hover");
  text.innerHTML = " ";
  text.classList.remove("show");
});
bird.addEventListener("mouseenter", (e) => {
  company.classList.add("hover");
  shield.classList.add("hover");
  globe.classList.add("hover");
});
bird.addEventListener("mouseleave", (e) => {
  company.classList.remove("hover");
  shield.classList.remove("hover");
  globe.classList.remove("hover");
});
globe.addEventListener("mouseenter", (e) => {
  company.classList.add("hover");
  shield.classList.add("hover");
  bird.classList.add("hover");
  text.innerHTML = "Travel Services";
  text.classList.add("show");
});
globe.addEventListener("mouseleave", (e) => {
  company.classList.remove("hover");
  shield.classList.remove("hover");
  bird.classList.remove("hover");
  text.innerHTML = " ";
  text.classList.remove("show");
});
