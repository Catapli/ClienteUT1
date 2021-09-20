'use strict'

let frase = prompt("Dime una frase")
let cantidad = letras(frase)
console.log(cantidad)
let cantidadPalabras = palabras(frase)
console.log(cantidadPalabras)
let mayus = maysc(frase)
console.log(mayus)
let inicialMayus = titulo(frase)
console.log(inicialMayus);
let letrasInvertidas = letrasReves(frase)
console.log(letrasInvertidas) 
let palabrasInvertidas = palabrasReves(frase)
console.log(palabrasInvertidas)
let ispalindromo = palindromo(frase)
console.log(ispalindromo)
