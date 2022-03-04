/*1. Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma, Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
ingresados por el usuario.*/ //OK

/*2. Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente: Suma, Resta, División, Multiplicación Y Módulo*/

//Solicitud de ingreso al usuario:2 números diferentes y mayores a cero.

alert("Bienvenido, te invitamos a probar nuestra ¡Super Calculadora!...Una serie de operatorias tan solo ingresando 2 números...");
alert("Vamos intentalo, solo deben ser diferentes entre sí y mayores a cero.!");

//Ingreso y captura número 1
var num1 = parseInt(prompt("Ingresa tu primer número, no lo olvides mayor que 0"));
//Ingreso y captura número 2
var num2 = parseInt(prompt("Seguimos, ahora tu segundo número distinto al anterior y mayor que 0"));

//Mostrar los resultados en documento
alert("Y tus resultados son....................!!")
alert("Voila, tenemos nuevos desafios y necesitamos de tu ayuda...acompañanos!!")

document.write("Super Calculadora :");
document.write("<br>")
document.write("Los números ingresados fueron " + num1 + " y " + num2);
document.write("<br>")
    //Mostrar la suma
document.write("La sumatoria de ambos números es " + (num1 + num2));
document.write("<br>");
//Mostrar la resta
document.write("La resta de ambos números es " + (num1 - num2));
document.write("<br>");
//Mostrar la división
document.write("La división de los números corresponde a " + (num1 / num2));
document.write("<br>");
//Mostrar la multiplicación
document.write("La multiplicación de tus números es " + (num1 * num2));
document.write("<br>");
//Mostrar el módulo
document.write("El módulo de los números  ingresados es " + (num1 % num2));
document.write("<br>");
document.write("<br>");
document.write("<hr>");

/*3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura: ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K  ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F*/

alert("Uff que calor de locos, no crees?..Te invito a averiguar nuestra temperatura actual en grados Kelvin y Fahrenheit, te animas?");
alert("Dale, dime que temperatura tenemos!!")
    //Solicitud ingreso y captura de temperatura
var temperatura = parseFloat(prompt("Ingresa un aproximado en grados Celcius"))
alert("Listo, continuemos con el siguiente desafio, los resultados los tendremos al final de la ronda")


//Mostrar los resultados en documento
document.write("<br>");
document.write("Mega Termómetro :");
document.write("<br>");
document.write("La temperatura ingresada es " + temperatura + " grados Celsius");
document.write("<br>");
//Grados Kelvin
document.write("Los " + temperatura + " grados Celsius ingresados corresponden a " + (temperatura + 273.15) + " grados Kelvin");
document.write("<br>");
//Grados Fahrenheit
document.write("Los " + temperatura + " grados Celsius ingresados corresponden a " + ((temperatura * 9 / 5) + 32) + " grados Fahrenheit");
document.write("<br>");
document.write("<br>");
document.write("<hr>");

/*4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días.Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. Se debe considerar lo siguiente:  - 1 año tiene 365 días  - 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.*/


//Para el calculo se crea la constante año y semana
const anio = 365;
const semana = 7;

alert("Un año tiene 365 días, aproximadamente 52 semanas y una semana 7 días...¿A cuánto equivaldría el número 2540 en años y días?¿Se podrá saber? ");

//Solcitud ingreso y captura de equivalencia
var equivalencia = parseInt(prompt("Te invito averiguarlo, indicame un número!"));
alert("Datos guardados correctamente...Ya nos queda poco para conocer los resultados!!")

//Mostrar los resultados en documento
document.write("<br>");
document.write("Equivalencia en años : ");
document.write("<br>");
document.write("El número ingresado para obtener la equivalencia fue " + equivalencia);
document.write("<br>");
document.write(`Tu número ingresado ${equivalencia} equivale a ${Math.floor(equivalencia/anio)} años, ${Math.floor((equivalencia%anio)/semana)} semanas, ${Math.floor(((equivalencia%anio)/semana)%semana)} días.`);
document.write("<br>");
document.write("<br>");
document.write("<hr>");

/*5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.
●La suma de todos los números.●El promedio de los 5 números ingresados.*/


alert("Y llegamos al final de este viaje");
alert("Por último ingresa 5 números, los que quieras y con ellos te entregaremos la sumatoria total y el promedio como resultado");
//Solicitar ingreso y capturar los 5 números correspondientes
var numero1 = parseInt(prompt("Ingresa el primer número"));
var numero2 = parseInt(prompt("Ingresa el segundo número"));
var numero3 = parseInt(prompt("Ingresa el tercero número"));
var numero4 = parseInt(prompt("Ingresa el cuarto número"));
var numero5 = parseInt(prompt("Ingresa el quinto número"));
alert("Y eso ha sido todo, cargando resultados.....!!!");

//Mostrar los resultados finales consolidados
document.write("<br>");
document.write("Calculo SumaProm : ");
document.write("<br>");
document.write("Los números ingresados son: " + numero1 + ", " + numero2 + ", " + numero3 + ", " + numero4 + ", " + numero5);
document.write("<br>");
document.write("La sumatoria total corresponde a: " + (numero1 + numero2 + numero3 + numero4 + numero5));
document.write("<br>");
document.write("El promedio de los números ingresados es: " + ((numero1 + numero2 + numero3 + numero4 + numero5) / 5));
document.write("<br>");
document.write("<br>");