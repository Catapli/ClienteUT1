function letras(cadena){
    return cadena.length
}

function palabras(cadena){
    let array = cadena.split(' ')
    return array.length
}

function maysc(cadena){
    let mayus = cadena.toLocaleUpperCase()
    return mayus
}

function titulo(cadena){
    let separar = cadena.split(' ');
    return separar.map(frase => frase[0].toUpperCase() + frase.slice(1)).join(' ');
}

function letrasReves(frase) {
    return frase.split("").reverse().join("");
}

function palabrasReves(frase) {
    let separar = frase.split(' ');
    return separar.reverse().join(" ");
}

function palindromo(frase){
    let minuscula = frase.toLocaleLowerCase();
    if(minuscula.endsWith(minuscula.charAt(0))){
        return 'Si es un palindromo'
    } else {
        return 'No es un palindromo'
    }
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}

