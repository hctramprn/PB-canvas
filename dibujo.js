var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 50;
var espacio = d.width/lineas;
var xi = 1;
var yi = 1;
var xf = 1;
var yf = 299;

dibujarlinea("blue", 1, 1, 1, 299);
dibujarlinea("blue", 1, 299, 299, 299);
dibujarlinea("red", 1, 1, 299, 1);
dibujarlinea("red", 299, 1, 299, 299);


while (xf < d.width) {
  dibujarlinea("blue", xi, yi, xf, yf);
  dibujarlinea("red", xi + 298, yi * -1 + 300, xf * -1 + 300 , yf - 298);
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
