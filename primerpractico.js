function calcular_descuentotarjeta (monto , tarjetas){

let descuentotarjeta = 0;
    
    if (tarjetas == "Santander" || tarjetas == "santander"){
        descuentotarjeta = monto * 0.25
    }
    else if (tarjetas == "Itau" || tarjetas == "itau"){
        descuentotarjeta = monto * 0.20
    }
    else if (tarjetas == "BBVA" || tarjetas == "bbva"){
        descuentotarjeta = monto * 0.15
    } 
    else if (tarjetas == "Scotiabank" || tarjetas == "scotiabank"){
        descuentotarjeta = monto * 0.10
    }
    else{
        console.log("Tarjeta no encontrada");
    }  
    return descuentotarjeta
}

function calcular_interescuotas (monto , cuotas){

let interes = 0;

    if (cuotas == 1){
        interes = 0;
    }
    else if (cuotas == 3){
        interes = monto * 1.1
    }
    else if (cuotas == 6){
        interes = monto * 1.15
    }
    else if (cuotas == 12){
        interes = monto * 1.2
    }
    else{
        console.log("Cuota no aceptada");
    } 
    return interes
}

function mostrar_datos_compra(monto, tarjetas, cuotas, total) {
    console.log("El calzado seleccionado cuesta: ", monto);
    console.log("Con la tarjeta: ", tarjetas);
    console.log("En cuotas: ", cuotas);
    console.log("El costo final de tu compra: ", total);
}

console.log("Bienvenidos a Narciza");
let monto = prompt("Ingrese el monto del producto seleccionado");
monto = parseInt(monto);

let tarjetas = prompt("Ingrese el tipo de tarjeta que posee: BBVA, Santander, Scotiabank o Itau")
let total_uno = calcular_descuentotarjeta(monto, tarjetas);


let cuotas = prompt("En cuantas cuotas: 1, 3, 6 o 12")
let total_dos = calcular_interescuotas(monto, cuotas);

let total = total_dos - total_uno;

mostrar_datos_compra(monto, tarjetas, cuotas, total);



