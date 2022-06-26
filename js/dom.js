import hamburguerMenu from "./menu-hamburguer.js";
import { digitalClock, alarma } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import { contagem } from "./contagem.js";
import { botaoScroll } from "./botao.js";
import botaoEscuro from "./tema-escuro.js";
import responsive from "./responsividade.js";
import formResponsivo from "./form-responsivo.js";
import uAgent from "./user-agent.js";
import conexao from "./conexao.js";
import webCam from "./deteccaowebcam.js";
import buscar from "./filtro-de-buscas.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //sempre que o documento é carregado, tal eventos são disparados, dentro deste evento há várias funções que são executadas.
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma(
    "assets/alarme.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  ); /*pego os parâmetros diretamente do HTML, sem nenhum outro seletor*/
  contagem(".contagem-regressiva");
  botaoScroll(".botao-scroll");
  responsive(
    "video",
    "(min-width:1024px)",
    `<a href="https://youtu.be/X9Dh43kVL1Q" target="_blank">Música Barroca</a>`,
    `<iframe
            class="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X9Dh43kVL1Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`
  );
  responsive(
    "maps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/Nu2MWMX7Q5Fd4AHe9" target="_blank">San Pietro</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.106219448632!2d12.451748014832459!3d41.90217067188752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6061b7149b59%3A0x724bf077cd875283!2sBas%C3%ADlica%20de%20S%C3%A3o%20Pedro!5e1!3m2!1spt-BR!2sbr!4v1644069286209!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  formResponsivo("#url", "#ancho", "#alto", "#probar", "#fechar");
  uAgent("#user-agent", "sistema", "navegador");
  webCam("webcam");
  buscar(".card-filter", ".card");
});
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
botaoEscuro(".tema-escuro", "dark-mode");
conexao();
