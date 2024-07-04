function detectaScroll() {
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("container-nav");
    const html = document.querySelector("html");
    if (window.scrollY > 0) {
      html.setAttribute("data-contexto", "white");
      nav.setAttribute("theme", "white");
    } else {
      nav.setAttribute("theme", "black");
      html.setAttribute("data-contexto", "black");
    }
  });
}
detectaScroll();
