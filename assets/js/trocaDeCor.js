// DOOMs -----
const html = document.querySelector("html");

// FUNCOES -----
window.addEventListener("scroll", trocaCorPagina);

function trocaCorPagina() {
  const iconNav = document.getElementById("iconNav");

  if (window.scrollY > 0) {
    html.setAttribute("data-contexto", "white");
    iconNav.setAttribute("src", "./assets/imgs/icons/icon-preto.png");
  } else {
    html.setAttribute("data-contexto", "black");
    iconNav.setAttribute("src", "./assets/imgs/icons/icon-branco.png");
  }
}
trocaCorPagina();
