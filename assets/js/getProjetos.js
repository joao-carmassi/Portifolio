export async function getApi() {
  const response = await fetch("./assets/projetos.json");
  const data = await response.json();

  return data.projetos;
}
