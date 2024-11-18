document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".load-animate");
  const animatedElementsXl = document.querySelectorAll(".load-animate-xl");
  const animatedElementsXr = document.querySelectorAll(".load-animate-xr");

  animatedElements.forEach((item) => {
    item.classList.add("animated");
  });
  animatedElementsXl.forEach((item) => {
    item.classList.add("animated-x");
  });
  animatedElementsXr.forEach((item) => {
    item.classList.add("animated-x");
  });
  const windowHeight = window.innerHeight;
  console.log(windowHeight);
});

const animatedElements = document.querySelectorAll(".scroll-animate");

document.addEventListener("scroll", () => {
  animatedElements.forEach((item) => {
    const elementsLocation = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementsLocation < windowHeight * 1.15) {
      item.classList.add("animated");
    }
  });
  const windowHeight = window.innerHeight;
  console.log(windowHeight);
});