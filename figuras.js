//Código del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2")

//Código del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del Triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + 
 "cm, " + baseTriangulo + "cm")

 console.log("La altura del triangulo es: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
console.log("El perímetro del triangulo es: "+ perimetroTriangulo )

const areatriangulo = (baseTriangulo * alturaTriangulo) /2;

//Código del Circulo
const radio = 4;
const pi = Math.PI;
const diametro = radio * 2;
const circunferencia = diametro * pi;
const areaCirculo = (radio * radio) * pi; 

console.log("El radio del circulo es: " + radio + "cm " )

 console.log("El diametro del circulo  es: " + diametro +"cm ");

const perimetroCirculo = circunferencia ;
console.log("El perímetro del circulo es: "+ perimetroCirculo  + "cm ")

console.log("El área del circulo es: " + areaCirculo + "cm2")