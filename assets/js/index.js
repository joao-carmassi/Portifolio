function detectaScroll() {
  window.addEventListener("scroll", function () {
    const iconNav = document.getElementById("iconNav");
    const html = document.querySelector("html");

    if (window.scrollY > 0) {
      html.setAttribute("data-contexto", "white");
      iconNav.setAttribute("src", "./assets/imgs/icon-preto.png");
    } else {
      html.setAttribute("data-contexto", "black");
      iconNav.setAttribute("src", "./assets/imgs/icon-branco.png");
    }
  });
}
detectaScroll();
