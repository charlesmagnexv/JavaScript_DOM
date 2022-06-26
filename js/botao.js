const d = document,
  w = window;
export function botaoScroll(botao) {
  const $botao = d.querySelector(botao);
  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    console.log(w.pageYOffset, d.documentElement.scrollTop); //distância entre top e barra de scroll
    if (scrollTop > 600) {
      $botao.classList.remove("hidden");
    } else {
      $botao.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    //para levar para o topo
    if (e.target.matches("btn")) {
      w.scrollTop({
        behavior: "smooth",
        top:0
      });
    }
  });
  $botao.addEventListener("mouseover", (e) => {
    $botao.classList.add("botao-scroll-mouse-em-cima");
  });
  $botao.addEventListener("mouseout", (e) => {
    $botao.classList.remove("botao-scroll-mouse-em-cima");
    $botao.classList.add("botao-scroll");
  });
}
