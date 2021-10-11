// 1) Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
// const nombre = prompt("ingrese su nombre");
// alert("hola "+ nombre + ", que tal");
// alert(nombre.toUpperCase());
// alert(nombre.toLowerCase());

// 2)  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.
// var num1 = parseInt(prompt("ingrese el primer numero"));
// var num2 = parseInt(prompt("Ingrese el segundo numero"));

// var suma = num1 + num2;
// var resta;
// if (num1 <= num2){
//     resta = num2 - num1;
// }else{
//     resta = num1 - num2;
// }

// alert("la suma es: " + suma);
// alert("la resta es: " + resta);

// 3) Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

// var texto = prompt("ingrese un texto");

// var resultado = prompt("por donde quiere ver el resultado? por CONSOLA o en PANTALLA");

// if (resultado !== "consola" && resultado !== "pantalla"){
//     alert("no es valido, ingrese consola o pantalla");
// }if (resultado == "pantalla") {
//     alert(texto.toUpperCase());
// } else {
//     console.log(texto.toUpperCase());
// }

// 4) Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

// const num1 = parseInt(prompt("ingrese un numero"));
// const num2 = parseInt(prompt("ingrese otro numero"));

// var operacion = prompt("ingrese un operacion, SUMA/RESTA/MULTI/DIV/POTENCIA");

// switch (operacion) {
//     case "SUMA":
//       let suma = num1 + num2;
//       alert(suma);
//       break;
//     case "RESTA":
//         const resta = parseInt(resta);
//         if (num1 <= num2){
//                   resta = num2 - num1;
//             }else{
//                   resta = num1 - num2;
//             }  
//       alert(resta)
//       break;
//     case "MULTI":
//       let multi = num1 * num2;
//       alert(multi);
//       break;
//     case "DIV":
//       let div = num1 / num2;
//       alert (div);
//       break;
//     case "POTENCIA":
//       let pot = Math.pow(num1, num2);
//       alert(pot);
//       break;
//     default:
//       alert("las operaciones no son correctas");
//       break;
// }

// 5)  Vamos reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar. Extra: investigar/googlear la función de Javascript "confirm"

// do {
//     const num1 = parseInt(prompt("ingrese un numero"));
//     const num2 = parseInt(prompt("ingrese otro numero"));

//     var operacion = prompt("ingrese un operacion, SUMA/RESTA/MULTI/DIV/POTENCIA");

// switch (operacion) {
//     case "SUMA":
//       let suma = num1 + num2;
//       alert(suma);
//       break;
//     case "RESTA":
//         let resta;
//         if (num1 <= num2){
//                   resta = num2 - num1;
//             }else{
//                   resta = num1 - num2;
//             }  
//       alert(resta)
//       break;
//     case "MULTI":
//       let multi = num1 * num2;
//       alert(multi);
//       break;
//     case "DIV":
//       let div = num1 / num2;
//       alert (div);
//       break;
//     case "POTENCIA":
//       let pot = Math.pow(num1, num2);
//       alert(pot);
//       break;
//     default:
//       alert("las operaciones no son correctas");
//       break;
// }
//     continuar = confirm("Desea continuar?");
// } while (continuar == true);

// 6) Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla. 

// const alumnos = [];
// do {
//     var nuevoalumn = prompt("ingrese un nuevo alumno");
//     alumnos.push(nuevoalumn);
//     continuar = prompt("ingrese 'SALIR' si no desea continuar")
// } while (continuar != "SALIR");
// console.log(alumnos);
// alert(alumnos);

// 7) Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

/*const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia",”homero”];*/

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia", "homero"];
// var i=0;
// var i2=1
// var length = ej7Nombres.length;
// for (i=0; i < length; i++){
//     nombre = (ej7Nombres[i])
//     Nombre = nombre[0].toUpperCase() + nombre.slice(1);
//     alert(i2  +  Nombre);
//     i2++;
// }

// 8)  Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"

// const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];
// var i=0;
// var length = ej8Mascotas.length;
// for (i=0; i < length; i++){
//     nombre = (ej8Mascotas[i])
//     if ((nombre.length) > 6) {
//         alert(nombre + " tiene nombre largo");
//     }if ((nombre.lenght) <= 3) {
//         alert(nombre + " tiene nombre corto");
//     }if (nombre == "Fido" || nombre == "Gertrudis") {
//         alert("Hay que vacunar contra la rabia a :" + nombre);
//     }if (nombre == "Tuerca") {
//         alert("Entregar alimento balanceado a: " + nombre);
//     }
// }

// 9) Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 

// const ej9restaurant = [25,17,18,44,12,9,36,50];

// var i = 0;
// var largo = ej9restaurant.length;
// var cantMenores = 0;
// var cantMayores = 0;
// var cuenta = 0;
// for (i=0; i < largo; i++){
//     console.log(ej9restaurant[i])
//     if ((ej9restaurant[i])<18){
//         cantMenores++;
//     } else{
//         cantMayores++;
//     }
// }

// cuenta = cantMayores*700 + cantMenores*450;
// if (cantMayores>4) {
//     cuenta = cuenta - ((cuenta*10)/100);
// }
// alert("para "+ cantMenores +" menores, y "+ cantMayores +" mayores, la cuenta es de: "+ cuenta);

// 10) De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
//   Para ello:
//   - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
//   - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//     - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
//     - Agregar el código de paciente adelante en la cola (array) de turnos
//   - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//     - Agregar el código de paciente al final de la cola (array) de turnos
//   - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//     - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
//     - Agregar el código de paciente al final de la cola (array) de turnos
    
//   - Si todos los pacientes fueron ingresados, informar en pantalla:
//     - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//     - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//     - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP
  
//   - Nota: Escribir código con funciones para facilitar su lectura.

// const colaDeTurnos = [];
// const ordenDeIngreso = []; 
// const pasarseVip = []; // array con los nuevos pacientes que quieren pasarse a vip
// var valoracionVipMin = 10;
// var valoracionVipMax = 0;
// var valoracionesVip = 0;  // Para calcular el promedio primero sumo todas las valoraciones, y despues las divido por su cantidad
// var valoracionVipProm; // Para calcular el promedio primero sumo todas las valoraciones, y despues las divido por su cantidad
// for (let i = 0; i < 999; i++) {
//     codigoPaciente = parseInt(prompt("Ingrese el codigo de paciente"));
//     if (codigoPaciente >= 1 && codigoPaciente <= 99){
//         vips()
//     }if (codigoPaciente >=100 && codigoPaciente <=500) {
//         prepagas()
//     }if (codigoPaciente >=501 && codigoPaciente <=999) {
//         pacienteNuevo()
//     }
// }
// valoracionVipProm = valoracionesVip / 99;
// alert(valoracionVipProm);
// alert(valoracionVipMin);
// alert(valoracionVipMax);
// alert(ordenDeIngreso);
// alert(pasarseVip);

// // a partir de aca van las funciones 

// function vips(){
//     let valoracionVip = parseInt(prompt("Como valoran la calidad del servicio? (1..10)"));
//     colaDeTurnos.unshift(codigoPaciente);
//     if (valoracionVip < valoracionVipMin){
//         valoracionVipMin = valoracionVip;
//     }if (valoracionVip >= valoracionVipMax){
//         valoracionVipMax = valoracionVip
//     }
//     valoracionesVip += valoracionVip;
//     ordenDeIngreso.push(codigoPaciente);
// }

// function prepagas() {
//     colaDeTurnos.push(codigoPaciente);
//     ordenDeIngreso.push(codigoPaciente);
// }

// function pacienteNuevo() {
//     let pasarseVIP = confirm("¿Desea pasarse a vip?") // pasarseVIP = boolean para confirmar si desea ser vip
//     if (pasarseVIP == true){
//         pasarseVip.push(codigoPaciente);
//     }
//     ordenDeIngreso.push(codigoPaciente);
// }


