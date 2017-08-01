// var boton = document.querySelector(".btn");
//
// function saludar(mensaje) {
//   alert(mensaje);
// }
//
// boton.onclick = function () {
//   saludar("Hola!");
// };
//
// // Cambio de color el div cuando ingresa el mouse.
// var contenedor = document.querySelector(".container");
//
// contenedor.addEventListener("mouseenter", function() {
//   contenedor.style.background = "green";
// });
//
// contenedor.addEventListener("mouseout", function() {
//   contenedor.style.background = "transparent";
// });
//
// // Muestro un mensaje cuando hago click sobre el div.
// contenedor.addEventListener("click", function() {
//   saludar("Hola!");
// });
//
// // Obtener coordenadar del evento click.
// contenedor.addEventListener("click", function(){
//   console.log("x:", event.clientX, ", y:");
// });
//
// // Muestra las coordenadas de la tecla que ingresamos.
// document.addEventListener("keypress", function() {
//   console.log("La tecla fue: ", event.key);
// });


// // THIS
// console.log(this); // devuelve window
//
// function Casa() {
//   this.timbre = document.querySelector(".timbre");
//   this.imprimir = function() {
//     console.log(this); // devuelve el objeto Casa
//   }
// }
//
// var casa = new Casa();
//
// casa.timbre.addEventListener("click", function() {
//   console.log("Ring!");
//   console.log(this); // imprime ".timbre" no casa
// })


// Prevenir Eventos
var link = document.querySelector("a");

link.addEventListener("click", function(event) {
  event.preventDefault();
  alert("no funciona");
});
