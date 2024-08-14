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
const errorApiP = document.querySelector(".error-API-p");

// VARS -----
let projetos = await getApi();
let mensagens;
const maxLengthNome = 30;

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
  mensagens = await api.getApi();
  mensagens.forEach((mensagem) => {
    adicionaHTML(mensagem.nome, mensagem.mensagem, mensagem.dia, mensagem.id);
  }); // Fechando o forEach corretamente
}

exibeDadosDaApiNaTela();

function adicionaHTML(nome, mensagem, dia, id) {
  const localId = localStorage.getItem("id");

  nome = checaSeOUsuarioJaColocouSeuNome(nome, localId, id);

  ulAPI.insertAdjacentHTML(
    "afterbegin",
    `
      <li class="li-API">

        <h2>${nome}</h2>
        <p>${mensagem} ${dia}</p>
      </li>`
  );
}

function removeInputNome() {
  const inputElement = document.querySelector(".apiPostInput");
  const errorDiv = document.querySelector(".error-div-API");

  if (inputElement) {
    inputElement.style.display = "none";
    inputElement.remove();
  }

  if (errorDiv) {
    errorDiv.style.display = "none";
    errorDiv.remove();
  }
}

btnEnviar.addEventListener("click", () => {
  enviaAPI();
});
inputNome.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    enviaAPI();
    inputNome.focus();
  }
});

inputNome.addEventListener("input", checaCaracteresFaltado);

function checaSeOUsuarioJaColocouSeuNome(nome, localId, id) {
  if (id == localId) {
    nome = nome + " (você)";
    removeInputNome();
  } else {
    nome = nome;
  }
  return nome;
}

function checaCaracteresFaltado() {
  let caracteresFaltando = maxLengthNome - inputNome.value.length;
  errorApiP.textContent = caracteresFaltando;
  if (caracteresFaltando < 0) {
    errorApiP.style.color = "red";
  } else {
    errorApiP.style.color = "gray";
  }
}
checaCaracteresFaltado();

function enviaAPI() {
  const mensagem = fraseAleatoria();
  let nome = inputNome.value;

  function validarNome(nome) {
    if (nome.length > maxLengthNome) {
      return false;
    }
    return true;
  }

  if (nome != "" && validarNome(nome)) {
    const dia = new Date().toLocaleDateString();
    const id = geraID();
    localStorage.setItem("id", id);
    api.postApi(nome, mensagem, dia, id);
    adicionaHTML(nome, mensagem, dia, id);
    inputNome.value = "";
  }
  checaCaracteresFaltado();
}

function geraID() {
  // Gera numero e letras aleatorias
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}
