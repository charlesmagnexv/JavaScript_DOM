const d = document,
  n = navigator;
export default function conexao() {
  const isOnLine = () => {
    const $div = d.createElement("div");
    if (n.onLine) {
      /*$div.textContent = "Conexão Reestabelecida"
            $div.classList.add("online")
            $div.classList.remove("offline")*/
    } else {
      /*$div.textContent = "Conexão Perdida"
            $div.classList.add("offline")
            $div.classList.remove("online")*/
    }
    /*d.body.insertAdjacentElement("afterbegin", $div)
        setTimeout(() => d.body.removeChild($div),2000)*/
  };
  window.addEventListener("online", isOnLine());
  window.addEventListener("offline", isOnLine());
  window.addEventListener("online", (e) => console.log(n.onLine));
  window.addEventListener("offline", (e) => console.log(n.onLine));
}
