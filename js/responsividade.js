export default function responsive(id, mq, mobileContent, desktopContent) {
  let breakpoint = window.matchMedia(mq);
  const responsivo = (e) => {
    if (e.matches) {
      document.getElementById(id).innerHTML = desktopContent;
    } else {
      document.getElementById(id).innerHTML = mobileContent;
    }
    //console.log(e.matches);
  };
  breakpoint.addListener(responsivo);
  responsivo(breakpoint); //isto faz com que a responsividade seja ativada assim que a página se carrega
}
