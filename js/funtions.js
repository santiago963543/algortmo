
function suma(){
    var v1 = 0;
    var v2 = 0;
    var suma = 0;
    
    
    v1 = parseInt(prompt("Ingresa un numero: "));
    
    v2 = parseInt(prompt("Ingresa Segundo numero: "));
    suma = v1 + v2;
    alert ("La suma es: " + suma)

}

function operaciones(){

    var n1 = 0;
    var n2 = 0;

    var resta = 0; var multiplicacion=0; var division = 0;

    n1 = parseInt(prompt("Ingresa el primer Numero: "));
    n2 = parseInt(prompt("Ingresa el segundo Numero: "));

    suma=n1+n2;
    resta=n1-n2;
    multiplicacion=n1*n2;
    division=n1/n2;

    alert("La resta es: " +resta) ;
    alert("la multiplicacion es: "+multiplicacion);
    alert ("la division es: "+division) ;
}

function numeroMayor(){
    var n1=0;  var n2=0;

    n1 = parseInt(prompt("Ingresa el primer Numero: "));
    n2 = parseInt(prompt("Ingresa el segundo Numero: "));

    if (n1==n2) {
        alert("Los valores ingresados son iguales")
    }
    else if (n1>n2) {
        alert (n1+ " es mayor que " + n2)
    }
    else {
        alert (n2+ " es mayor que "+n1)
    }
}

function cuadrado (){

    var n1=0; var cuadrado=0;
    n1 = parseInt(prompt("Ingresa el primer Numero: "));

    cuadrado=n1*n1;

    alert ("El cuadrado del numero es; "+cuadrado);
}

function areaTriangulo (){
    var base=0; var altura=0; var area =0;

    base = parseInt(prompt("Ingresa la base : "));
    altura = parseInt(prompt("Ingresa la altura : "));

    area=base*altura/2;

    alert ("El area del triangulo es "+area);
}

function fruteria(){
    var kilos1=4500; TotalPrecio=0; var Kilos2=0; var manzanas1Kilo=0; var Total=0;

    Kilos2 = parseInt(prompt("Ingresa cuantos Kilos de manzanas Vas a LLevar : "));

    if (Kilos2<=2) {
        TotalPrecio=Kilos2*kilos1;
        manzanas1Kilo=Kilos2*kilos1;
        Total=manzanas1Kilo-TotalPrecio;
        alert("Los Kilos son menores a 2 No hay Descuento: " 
        +TotalPrecio+ " El Precio Total X Kilos es: "+manzanas1Kilo+" Total Descuento: "+Total);
    }

    else if (Kilos2<=5 || Kilos2==3) {
        TotalPrecio=Kilos2*kilos1/10;
        manzanas1Kilo=Kilos2*kilos1;
        Total=manzanas1Kilo-TotalPrecio;
        alert("Los Kilos son menor o igual a 5 o Igual 3 Descuento 10%: " 
        +TotalPrecio+ " El Precio Total X Kilos es: "+manzanas1Kilo+" Total Descuento: "+Total);
    }

    else if (Kilos2<=10 || Kilos2==6) {
        TotalPrecio=Kilos2*kilos1/15;
        manzanas1Kilo=Kilos2*kilos1;
        Total=manzanas1Kilo-TotalPrecio;
        alert("Los Kilos son menor o igual a 10 o Igual 6 Descuento 15%: "
        +TotalPrecio+ " El Precio Total X Kilos es: "+manzanas1Kilo+" Total Descuento: "+Total);
    }

    else if (Kilos2>10) {
        TotalPrecio=Kilos2*kilos1/20;
        manzanas1Kilo=Kilos2*kilos1;
        Total=manzanas1Kilo-TotalPrecio;
        alert("Los Kilos son mayor a 10 Descuento 20%: "
        +TotalPrecio+ " El Precio Total X Kilos es: "+manzanas1Kilo+" Total Descuento: "+Total);
    }
}
