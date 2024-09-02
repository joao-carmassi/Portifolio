const ApiLink = "https://joao-vitor-carmassi.loca.lt/data/mensagens";

async function getApi() {
  try {
    const response = await fetch(ApiLink);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter mensagens:", error);
  }
}

async function postApi(nome, mensagem, dia, id) {
  try {
    const response = await fetch(ApiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome, mensagem: mensagem, dia: dia, id }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
}

export const api = {
  getApi,
  postApi,
};
