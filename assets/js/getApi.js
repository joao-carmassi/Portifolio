const ApiLink = "http://localhost:3000/mensagens";

async function getApi() {
  try {
    const response = await fetch(ApiLink);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter mensagens:", error);
  }
}

async function postApi(nome, mensagem) {
  try {
    const response = await fetch(ApiLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome, mensagem: mensagem }),
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
