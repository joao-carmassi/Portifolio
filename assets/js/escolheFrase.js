const frases = [
  "Esteve aqui em",
  "Passou neste local em",
  "Passou por este lugar em",
  "Visualizou esta página em",
  "Acessou esta página em",
  "Conferiu esta página em",
  "Checou esta página em",
  "Deu uma conferida aqui em",
  "Checou aqui em",
  "Consultou esta página em",
  "Visitou esta página em",
  "Verificou esta página em",
  "Abriu esta página em",
  "Realizou o acesso em",
  "Fez a consulta em",
  "Registrou o acesso em",
];

export function fraseAleatoria() {
  const index = Math.floor(Math.random() * frases.length);
  return frases[index];
}
