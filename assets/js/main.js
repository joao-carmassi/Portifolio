// IMPORTS -----
import { getApi } from "./getApi.js";

// DOOMs -----
const html = document.querySelector("html");
const imgsProjetos = document.querySelectorAll(".img-projetos");

// VARS -----
let projetos = await getApi();

// FUNCOES -----
trocaCorPagina();
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

adicionaDadosProjetos();
function adicionaDadosProjetos() {
  let index = 0;
  imgsProjetos.forEach((element) => {
    element.style.backgroundImage = `url('./assets/imgs/projetos/${projetos[index].imagem}.png')`;
    element.querySelector("h2").textContent = projetos[index].nome;
    element.querySelector("p").textContent = projetos[index].descricao;
    element.setAttribute("href", `${projetos[index].link}`);
    index++;
  });
}
