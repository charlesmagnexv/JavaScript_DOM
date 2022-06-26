const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  //console.log(e.keyCode);
  //console.log(e.code);
  //console.log(limitsBall, limitsStage);
  //const move = (direction) => {};
  switch (e.keyCode) {
    case 37:
      //move("left");
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault(); //faz com que a tela não se mova ao mover as setinhas do teclado
        x--;
      }
      $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault(); //faz com que a tela não se mova ao mover as setinhas do teclado
        y--;
      }
      //move("up");
      $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault(); //faz com que a tela não se mova ao mover as setinhas do teclado
        x++;
      }
      //move("right");
      $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault(); //faz com que a tela não se mova ao mover as setinhas do teclado
        y++;
      }
      //move("down");
      $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
      break;
    default:
      break;
  }
}
export function shortcuts(e) {
  /*console.log(e);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e);
  console.log(`alt: ${e.altKey}`); //isto resultará em true ou false
  if (e.key === "a" && e.altKey) {
    alert("Alerta com alt+a...");
  }*/
}
