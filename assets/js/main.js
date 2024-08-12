// IMPORTS -----
import { getApi } from "./getProjetos.js";
import { api } from "./getApi.js";

// DOOMs -----
const html = document.querySelector("html");
const imgsProjetos = document.querySelectorAll(".img-projetos");
const ulAPI = document.querySelector(".ul-API");
const inputNome = document.getElementById("input-nome");
const btnEnviar = document.getElementById("btn-enviar");

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
    element.setAttribute("href", `${projetos[index].url}`);
    index++;
  });
}

async function exibeDadosDaApiNaTela() {
  let mensagens = await api.getApi();
  console.log(mensagens);

  mensagens.forEach((mensagem) => {
    ulAPI.insertAdjacentHTML(
      "afterbegin",
      `
      <li class="li-API">
        <h2>${mensagem.nome}</h2>
        <p>${mensagem.mensagem}</p>
      </li>`
    );
  });
}
exibeDadosDaApiNaTela();

btnEnviar.addEventListener("click", () => {
  if (inputNome.value != "") {
    api.postApi(inputNome.value, "Passou por aqui");
    inputNome.value = "";
  }
});
