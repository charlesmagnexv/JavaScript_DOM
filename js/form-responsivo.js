export default function formResponsivo(url, ancho, alto, probar, fechar) {
  let $link = document.querySelector(url),
    $largura = document.querySelector(ancho),
    $altura = document.querySelector(alto),
    $abrir = document.querySelector(probar),
    $cerrar = document.querySelector(fechar),
    $janela;
  $abrir.addEventListener("click", (e) => {
    e.preventDefault(); //é preciso cancelar a ação por efeito do formulário. a ação por defeito do form é enviar informação
    $janela = window.open(
      $link.value,
      "Janela",
      `innerWidth=${$largura.value}, innerHeight=${$altura.value}`
    );
  });
  $cerrar.addEventListener("click", (e) => {
    e.preventDefault();
    $janela.close();
  });
}
