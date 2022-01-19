
// Codigo cuadrado

console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");

function perimetroCuadrado(lado){
return lado*4;
} 


//const areaCuadrado = ladoCuadrado * ladoCuadrado
//console.log("El area del cuadrado es: "+ areaCuadrado + "cm^2");

function areaCuadrado(lado){
    return lado*lado;
}

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");
//const ladoTriangulo1 = 6;

//const ladoTriangulo2 = 6;

//const baseTriangulo = 4;

//console.log("los lados del triangulo miden: "+ ladoTriangulo1 + "cm ," + 
//ladoTriangulo2 + "cm ," + baseTriangulo + "cm");
 function perimetroTriangulo(lado1,lado2,base){
     return lado1+lado2+base;
 }

 function areaTriangulo(altura,base){
    return (altura*base)/2;

}

console.groupEnd();

function diametroCirculo(radio){

    return radio*2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
  diametro = diametroCirculo(radio);
  return diametro*PI;
}

function areaCirculo (radio){
    return (radio*radio)*PI;
}


function calculaPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calculaAreaCuadrado(){
const input = document.getElementById("InputCuadrado")
const value = input.value
const area = areaCuadrado(value);
alert(area);
}
function calculaAlturaTrianguloI(){         
    const inputli =document.getElementById("InputTrianguloL")
    const inputld =document.getElementById("InputTrianguloD")
    const altura = Math.sqrt((Math.pow(inputli.value,2))-(Math.pow((inputld.value/2),2)));
    alert (altura);
}