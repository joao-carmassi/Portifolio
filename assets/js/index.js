// DOOMS -----
const imgsProjetos = document.querySelectorAll(".img-projetos");

// VARS -----
const projetos = [
  (projeto = {
    nome: "Alura Book",
    url: "Alura-Book",
    descricao: "Página de busca dos livros.",
    site: "https://joao-carmassi.github.io/Alura-Books/pagina%201/index.html",
  }),
  (projeto = {
    nome: "Calmaria Spa",
    url: "Calmaria-Spa",
    descricao: "Site de um Spa",
    site: "https://joao-carmassi.github.io/Calmaria-Spa/",
  }),
  (projeto = {
    nome: "D&D",
    url: "RPG",
    descricao: "Site que simula combate de personagens de RPG.",
    site: "https://joao-carmassi.github.io/Cartas-Personagens/",
  }),
  (projeto = {
    nome: "Lista de Compras",
    url: "Lista-de-Compras",
    descricao: "Página de uma lista de compras.",
    site: "https://joao-carmassi.github.io/Lista-de-compras/",
  }),
];
// "Alura-Book", "Calmaria-Spa", "RPG", "Lista-de-Compras";

// FUNCOES -----
adicionaDadosProjetos();
function adicionaDadosProjetos() {
  let index = 0;
  imgsProjetos.forEach((element) => {
    element.style.backgroundImage = `url('./assets/imgs/projetos/${projetos[index].url}.png')`;
    element.querySelector("h2").textContent = projetos[index].nome;
    element.querySelector("p").textContent = projetos[index].descricao;
    element.setAttribute("href", `${projetos[index].site}`);
    index++;
  });
}
