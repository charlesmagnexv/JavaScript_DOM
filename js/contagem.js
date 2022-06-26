export function contagem(seletor, limite, mensagem) {
  //o getTime() pega milissegundos de acordo com o horário universal
  //para que haja a atualização no HTML, é preciso colocar as declarações de variaveis dentro do setInterval
  let tempo;
  let $escreverContagem = document.querySelector(seletor);
  //console.log(data);
  //console.log(dataFinal);
  //console.log(Math.ceil(contagem / Math.floor(1000 * 60 * 60 * 24)));
  tempo = setInterval(() => {
    let dataFinal = new Date(2023, 0, 26).getTime(),
      data = new Date().getTime(),
      contagem = dataFinal - data;
    //console.log(Math.ceil(contagem/Math.floor(1000 * 60 * 60 * 24)));
    $escreverContagem.innerHTML = `${Math.floor(
      contagem / Math.floor(1000 * 60 * 60 * 24)
    )} dias, ${Math.floor(
      contagem / Math.floor(1000 * 60 * 60)
    )} horas, ${Math.floor(
      contagem / Math.floor(1000 * 60)
    )} minutos, ${Math.floor(contagem / Math.floor(1000))} segundos`;
    if (Math.floor(contagem / Math.floor(1000)) <= 0) {
      clearInterval(tempo);
      $escreverContagem.classList.add("feliz-ano-novo");
      $escreverContagem.innerHTML = `<h1>FELIZ ANO NOVO<h1>`;
    }
  }, 1000);
}
