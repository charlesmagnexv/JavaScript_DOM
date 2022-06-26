const d = document,
  n = navigator;
export default function uAgent(user) {
  let usuario = n.userAgent,
    sistemaNavigator = n.appVersion,
    navegadorNavigator = n.appCodeName,
    $user = d.querySelector(user);
  const isMobile = {
      android: () => n.userAgent.match(/android/i), //em "userAgent" a função vai procurar, com uma expressão regular, se há a palavra "android"
      ios: () => n.userAgent.match(/iphone|ipad|ipod/i),
      windows: () => n.userAgent.match(/windows phone/i),
      any: function () {
        //este existe para caso o dispositivo específico não faça caso do tipo de mobile,o que importa é que seja mobile
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => n.userAgent.match(/linux/i),
      mac: () => n.userAgent.match(/mac os/i),
      windows: () => n.userAgent.match(/windows nt/i),
      any: function () {
        return this.linux() || this.windows() || this.mac();
      },
    },
    isBrowser = {
      chrome: () => n.userAgent.match(/chrome/i),
      safari: () => n.userAgent.match(/safari/i),
      firefox: () => n.userAgent.match(/firefox/i),
      opera: () => n.userAgent.match(/opera|opera mini/i),
      ie: () => n.userAgent.match(/msie|iemobile/i),
      edge: () => n.userAgent.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  $user.innerHTML = `
  <ul>
    <li>User Agente: <b> ${n.userAgent}</b></li>
    <li>Plataforma: <b> ${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Navegador: <b> ${isBrowser.any()}</b></li>
  </ul>`;

  /*Conteúdo exclusivo*/
  if (isBrowser.chrome()) {
    $user.innerHTML += `<p>Este conteúdo só se vê em Chrome</p>`;
  }
  if (isBrowser.firefox()) {
    $user.innerHTML += `<p>Este coteúdo só se vê em Firefox</p>`;
  }
  /*console.log(navigator);
  console.log(isMobile.android());
  console.log(isBrowser.any());
  $user.innerHTML = `<p><b>User Agent:</b> ${usuario}</p>`;
  $user.innerHTML += `<p>Plataforma: ${sistemaNavigator}</p>`;
  $user.innerHTML += `<p>Navegador: ${navegadorNavigator}</p>`;*/
  /*if (isMobile.android()) {
    window.location.href = "https://www.google.com.br/";//para web design adaptativo
  }*/
}
