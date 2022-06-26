export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      //"e.target.matches" significa: Se o objeto que originou o evento, seu seletor coincide com o que vem na variável "menuLink"//
      /*O asterisco faz com que seja selecionado todos os filhos do botão*/
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
