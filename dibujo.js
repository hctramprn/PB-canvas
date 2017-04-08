var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarlinea("pink", 10, 300, 220, 10);
dibujarlinea("blue", 30, 50, 40, 250);
