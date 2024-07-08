// IMPORTS -----
import { Projeto } from "./modules/cardProjetos.js";

// DOOMs -----
const html = document.querySelector("html");
const imgsProjetos = document.querySelectorAll(".img-projetos");

// VARS -----
let projetos = [];

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

juntarProjetos(
  "Alura Book",
  "Alura-Book",
  "Página de busca dos livros.",
  "https://joao-carmassi.github.io/Alura-Books/pagina%201/index.html"
);
juntarProjetos(
  "Calmaria Spa",
  "Calmaria-Spa",
  "Site de um informativo de um Spa.",
  "https://joao-carmassi.github.io/Calmaria-Spa/"
);
juntarProjetos(
  "D&D",
  "RPG",
  "Site que simula combate de personagens de RPG.",
  "https://joao-carmassi.github.io/Cartas-Personagens/"
);
juntarProjetos(
  "Lista de Compras&D",
  "Lista-de-Compras",
  "Página de uma lista de compras.",
  "https://joao-carmassi.github.io/Lista-de-compras/"
);

function juntarProjetos(nome, imagem, descricao, link) {
  projetos.push(new Projeto(nome, imagem, descricao, link));
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
