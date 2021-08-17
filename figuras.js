//Código del cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return Math.pow(lado, 2);
} 

//Código del triangulo

function perimetroTriangulo (lado1, lado2, base ) {
    const resultado = parseInt(base) + parseInt(lado1) + parseInt(lado2) 
    return resultado
}
function areaTriangulo (altura, base ) {
    return (base * altura) /2
}

//Código del Circulo

const pi = Math.PI;

 function diametroCirculo ( radio ){
    return radio * 2;
}

function perimetroCirculo ( radio ){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo ( radio ){
    return Math.pow(radio, 2) * pi; 
}
// funciones input

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputLado")
    const  value = input.value
    console.log(perimetroCuadrado(value))
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputLado")
    const  value = input.value
    console.log(areaCuadrado(value))
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1")    
    const input2 = document.getElementById("inputLado2")    
    const input3 = document.getElementById("inputBase")
    const  value1 = input1.value
    const  value2 = input2.value
    const  value3 = input3.value
    console.log(perimetroTriangulo(value1, value2, value3))
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputBase")
    const input2 = document.getElementById("inputAltura") 
    const  value1 = input1.value
    const  value2 = input2.value 
    console.log(areaTriangulo(value1,value2))
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadio")
    const  value = input.value
    console.log(perimetroCirculo(value))
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputRadio")
    const  value = input.value
    console.log(areaCirculo(value))
}