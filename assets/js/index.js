function detectaScroll() {
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("container-nav");
    if (window.scrollY > 0) {
      nav.setAttribute("theme", "white");
    } else {
      nav.setAttribute("theme", "black");
    }
  });
}
detectaScroll();
