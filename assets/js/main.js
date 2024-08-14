// IMPORTS -----
import { getApi } from "./getProjetos.js";
import { api } from "./getApi.js";
import { fraseAleatoria } from "./escolheFrase.js";

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

  mensagens.forEach((mensagem) => {
    adicionaHTML(mensagem.nome, mensagem.mensagem, mensagem.dia);
  }); // Fechando o forEach corretamente
}

exibeDadosDaApiNaTela();

function adicionaHTML(nome, mensagem, dia) {
  const localNome = localStorage.getItem("nome");
  nome = nome == localNome ? nome + " (você)" : nome;
  ulAPI.insertAdjacentHTML(
    "afterbegin",
    `
      <li class="li-API">

        <h2>${nome}</h2>
        <p>${mensagem} ${dia}</p>
      </li>`
  );
}

btnEnviar.addEventListener("click", () => {
  enviaAPI();
});
inputNome.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    enviaAPI();
  }
});
inputNome.focus();

function enviaAPI() {
  const mensagem = fraseAleatoria();

  function validarNome(nome) {
    const maxLength = 30;
    const regex = /^[a-zA-ZÀ-ÿ ]+$/;

    if (nome.length > maxLength) {
      alert(`O nome não pode ter mais de ${maxLength} caracteres.`);
      return false;
    }

    if (!regex.test(nome)) {
      alert("O nome contém caracteres inválidos.");
      return false;
    }

    return true;
  }

  let nome = inputNome.value;

  if (nome != "" && validarNome(nome)) {
    const dia = new Date().toLocaleDateString();
    localStorage.setItem("nome", nome);
    api.postApi(nome, mensagem, dia);
    adicionaHTML(nome, mensagem, dia);
    inputNome.value = "";
  }
}
