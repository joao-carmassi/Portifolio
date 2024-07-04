function detectaScroll() {
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("container-nav");
    const iconNav = document.getElementById("iconNav");

    const html = document.querySelector("html");
    if (window.scrollY > 0) {
      html.setAttribute("data-contexto", "white");
      nav.setAttribute("theme", "white");
      iconNav.setAttribute("src", "./assets/imgs/icon-preto.png");
    } else {
      nav.setAttribute("theme", "black");
      html.setAttribute("data-contexto", "black");
      iconNav.setAttribute("src", "./assets/imgs/icon-branco.png");
    }
  });
}
detectaScroll();
