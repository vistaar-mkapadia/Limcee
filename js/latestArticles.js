const latestArticles = document.querySelectorAll(
  "#latestArticles .carousel-item"
);

function isDesktop() {
  return window.matchMedia("(min-width: 992px)").matches;
}

function toggleSlider() {
  if (isDesktop()) {
    latestArticles.forEach(item => {
      item.classList.add("active");
      item.style.width = "33%";
      item.style.marginRight = "0";
    });

    document.querySelector("#latestArticles .circles-container").style.display =
      "None";
  } else {
    latestArticles.forEach(item => {
      item.classList.remove("active");
      item.style.width = "100%";
      item.style.marginRight = "-100%";
    });

    latestArticles[0].classList.add("active");

    document.querySelector("#latestArticles .circles-container").style.display =
      "flex";
  }
}

toggleSlider();

window.addEventListener("resize", toggleSlider);
