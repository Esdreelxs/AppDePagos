/* Declaracion de variables de tipo array*/
var Todo=[];
var Total=[];

/*Creo la funcion para que al tocar el boton se carguen los datos*/
function capturar(){
    var nombre=document.getElementById("Nombre").value;
    let costo=document.getElementById("Costo").value;

    /*declare variables que almacenen los valores de los inputs*/
    Todo.push(nombre+": "+costo+"$");

    /*Almacene las variables en el array Todo*/
    document.getElementById("Mustra").innerHTML = Todo;

    /*Almaceno la variable monto en el array Total y a la vez
    convierto las variables de tipo strings a variables de tipo numbre*/
    Total.push(parseInt(costo));
    /*Creo la funcion para sumar todos los numeros almacenados en el ARRAY Total*/
    function Sumar(Total){
        let suma=0
        for (let i=0;i<Total.length;i++){
            suma+=Total[i];
        }
        let divicion=suma/Total.length;
        /*Muestro los resultados en forma de lista*/
        document.getElementById("Abono").innerHTML ="Cada uno debera abonar: " +divicion+"$";
        document.getElementById("Resultado").innerHTML ="El total a pagar es de: " +suma+"$";
    }
    Sumar(Total)   
}