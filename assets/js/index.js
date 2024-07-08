// DOOMS -----
const imgsProjetos = document.querySelectorAll(".img-projetos");

// VARS -----
const projetos = [
  (projeto = {
    nome: "Alura Book",
    imagem: "Alura-Book",
    descricao: "Página de busca dos livros.",
    link: "https://joao-carmassi.github.io/Alura-Books/pagina%201/index.html",
  }),
  (projeto = {
    nome: "Calmaria Spa",
    imagem: "Calmaria-Spa",
    descricao: "Site de um Spa",
    link: "https://joao-carmassi.github.io/Calmaria-Spa/",
  }),
  (projeto = {
    nome: "D&D",
    imagem: "RPG",
    descricao: "Site que simula combate de personagens de RPG.",
    link: "https://joao-carmassi.github.io/Cartas-Personagens/",
  }),
  (projeto = {
    nome: "Lista de Compras",
    imagem: "Lista-de-Compras",
    descricao: "Página de uma lista de compras.",
    link: "https://joao-carmassi.github.io/Lista-de-compras/",
  }),
];
// "Alura-Book", "Calmaria-Spa", "RPG", "Lista-de-Compras";

// FUNCOES -----
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
