var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var espacio = d.width/lineas;
var xi = 1;
var yi = 1;
var xf = 1;
var yf = 299;
var color = "blue";

dibujarlinea("blue", 1, 1, 1, 299);
dibujarlinea("blue", 1, 299, 299, 299);


while (xf < d.width) {
  dibujarlinea(color, xi, yi, xf, yf);
  yi = yi + espacio;
  xf = xf + espacio;
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
