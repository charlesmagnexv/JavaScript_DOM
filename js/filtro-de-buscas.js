const d = document;
export default function buscar(input, seletor) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //se o elemento que disparou o evento for o input, executa o código abaixo
      //console.log(e.key);//me dá a tecla que foi pressionada
      console.log(e.target.value); //pega tudo o que está sendo digitado no input
      console.log(e);
      if (e.key === "Escape") {
        e.target.value = "";
      }
      d.querySelectorAll(seletor).forEach((el) => {
        //o for each faz com que o código abaixo seja executado em cada um dos elementos HTML
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter"); //todo o elemento textual do elemento "el", em minúsculo, está de acordo com o "includes", ou seja, com o que o usuário escreveu, se verdadeiro, tira a classe filtro, se falso, coloca a classe filter
      });
    }
  });
}
