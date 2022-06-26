export default function botaoEscuro(botao, dataDark) {
  const $themeBtn = document.querySelector(botao),
    $seletor = document.querySelectorAll("[data-dark]"); //faz com que todos so elementos que tenham o atributo "data-dark" mudem-se
  console.log($seletor);
  let lua = "🌙",
    sol = "☀️";
  const lightMode = () => {
    $seletor.forEach((el) => el.classList.remove("dark-mode"));
    $themeBtn.textContent = lua;
    localStorage.setItem("theme","light")
  };
  const darkMode = () => {
    $seletor.forEach((el) => el.classList.add("dark-mode"));
    $themeBtn.textContent = sol;
    localStorage.setItem("theme","dark")
  };
  document.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.matches(botao)) {
      console.log($themeBtn.textContent);
      if ($themeBtn.textContent === lua) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  document.addEventListener("DOMContentLoaded", (e) => {
    //alert("Olá, desde a fnção DarkTheme")
    if (localStorage.getItem("theme") === null) {
      //primeira vez em que o usuário entrou na página, variável "theme" é nula, devemos assinalar um valor para ela, atribuimos o valor padrão
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") === "light") {
      lightMode();
    }
    if (localStorage.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
