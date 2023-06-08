///////////////////////////////////////////////////

// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

// 1. Calcular el cuadrado de un número.

function cuadrado (pcuadrado){
    return "El cuadrado del numero es: " + pcuadrado * pcuadrado;
}


const fcuadrado = (pcuadrado) => {
    return "El cuadrado del numero es: " + pcuadrado * pcuadrado;
}

// 2. Escribir un código que convierta de grados celsius a grados farenheit

function gradosc (grados){
    console.log ("Introduzca los grados celcius" + grados);
    farenheit = (grados *(9/5))+ 32;
    return "La conversion es: " + farenheit;
}

const fgradosc = (fgrados) => {
    return "La conversion es: " + ((fgrados *(9/5))+ 32 );
}

// 3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

function vol (resistecia,corriente){
    console.log ("La resistencia es: " + resistecia);
    console.log ("La corriente es: " + corriente);
    voltaje = resistecia* corriente;
    return "El voltaje es: " + voltaje;
}

const fvol =(resistecia,corriente) => {
    return "El voltaje es: " + resistecia* corriente;
}

// 4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

function cubo (lado){
    volu = lado*lado*lado;
    return "El volumen del cubo es: " + volu;
}

const fcubo =(lado) => {
    return "El volumen del cubo es: " + (lado*lado*lado);
}

//5. Calcular el área de un triángulo

function triangulo (base,altura){
    console.log("La base es: "+ base);
    console.log("La altura es: " + altura);
    area = (base * altura) / 2
    return "La altura es: " + area;
}

const ftriangulo = (base,altura) =>{
    return "La altura es: " + (base * altura) / 2;
}

// 6. Calcular el volumen de una esfera

function esfera (radio) {
    v = (3/4)*(3.1416)*(radio*radio*radio);
    return "El volumen de la esfera es: " + v;
}

const fesfera = (radio) => {
    return "El volumen de la esfera es: " +(3/4)*(3.1416)*(radio*radio*radio);
}

// 7. Convertir una cadena de texto a mayúsculas
let texto="Una vez estaba viendo como cambiar un texto a mayusculas en javascript y lo aprendi ahora dudo que se me olvide".toUpperCase();
console.log(texto);
