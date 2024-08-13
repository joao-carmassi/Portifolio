const frases = [
  "Esteve aqui em",
  "Veio por aqui em",
  "Passou neste local em",
  "Passou por este lugar em",
  "Apareceu aqui em",
  "Visualizou esta página em",
  "Acessou esta página em",
  "Observou esta página em",
  "Conferiu esta página em",
  "Checou esta página em",
  "Deu uma conferida aqui em",
  "Olhou aqui em",
  "Verificou aqui em",
  "Checou aqui em",
  "Passou os olhos aqui em",
];

export function fraseAleatoria() {
  const index = Math.floor(Math.random() * frases.length);
  return frases[index];
}
