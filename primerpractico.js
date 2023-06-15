/*function calcular_descuentotarjeta (monto , tarjetas){

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
}*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*function compra_calzado (){
    let ingreso_modelo = prompt("Ingresar modelo: Venecia, Roma, Berlin, Amsterdam, Milan, Madrid, Budapest, Londres, Paris, Miami, California, Lisboa, Praga, Munich, Buenos");
    let cantidad = prompt("Ingrese cantidad")
    lista_objetos.forEach((item)=>{
        if (item.modelo == ingreso_modelo){
            if (item.stock >= cantidad){   
                item.stock = item.stock - parseInt(cantidad)
                console.log("Gracias por tu compra! Espero que los disfrutes! <3");
            }else{
                console.log("No hay stock suficiente, solo quedan ", item.stock);
            }
        }
    })
}

function fabricacion_faltastock (obj_lista) {
    return obj_lista.stock <= 2 
}

class Cliente {
    constructor(nombre,apellido,edad,email,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }
}

let lista_clientes = [];

for (let i=0 ; i<3 ; i++){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad");
    let email = prompt("Ingrese su email");
    let telefono = prompt("Ingrese su telefono")

    let nuevo_cliente = new Cliente (nombre,apellido,edad,email,telefono);

    lista_clientes.push(nuevo_cliente)
}

class Modelo {
    
    constructor(modelo,precio,stock){
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("<----------DATOS DEL PRODUCTO----------->");
        console.log("Modelo: ", this.modelo);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }
    get_stock(){
        if (this.stock > 0){
            return true
        }
        else{
            return false
        }
    }
}

let modelo_uno = new Modelo ("Venecia", 6500, 1);
let modelo_dos = new Modelo ("Roma", 7900, 5);
let modelo_tres = new Modelo ("Berlin", 5800, 4);
let modelo_cuatro = new Modelo ("Amsterdam", 6570, 10);
let modelo_cinco = new Modelo ("Milan", 6800, 3);
let modelo_seis = new Modelo ("Madrid", 5500, 3);
let modelo_siete = new Modelo ("Budapest", 8500, 1);
let modelo_ocho = new Modelo ("Londres", 9500, 0);
let modelo_nueve = new Modelo ("Paris", 6900, 2);
let modelo_diez = new Modelo ("Miami", 8700, 7);
let modelo_once = new Modelo ("California", 11200, 1);
let modelo_doce = new Modelo ("Lisboa", 10200, 3);
let modelo_trece = new Modelo ("Praga", 9700, 5);
let modelo_catorce = new Modelo ("Munich", 8500, 4);
let modelo_quince = new Modelo ("Buenos Aires", 5700, 6);
let lista_objetos = [
    modelo_uno,
    modelo_dos,
    modelo_tres,
    modelo_cuatro,
    modelo_cinco,
    modelo_seis,
    modelo_siete,
    modelo_ocho,
    modelo_nueve,
    modelo_diez,
    modelo_once,
    modelo_doce,
    modelo_trece,
    modelo_catorce,
    modelo_quince
];

console.log(modelo_uno);

modelo_uno.get_datos();
modelo_dos.get_datos();
modelo_tres.get_datos();
modelo_cuatro.get_datos();
modelo_cinco.get_datos();
modelo_seis.get_datos();
modelo_siete.get_datos();
modelo_ocho.get_datos();
modelo_nueve.get_datos();
modelo_diez.get_datos();
modelo_once.get_datos();
modelo_doce.get_datos();
modelo_trece.get_datos();
modelo_catorce.get_datos();
modelo_quince.get_datos();

console.log("<----------LISTA DE CLIENTES----------->");
console.log(lista_clientes);

compra_calzado();
console.log("<----------LISTA ACTUALIZADA----------->");
console.log(lista_objetos);

let modelos_fabricar = lista_objetos.filter(fabricacion_faltastock);
console.log("<----------MODELOS A FABRICAR----------->");
console.log(modelos_fabricar);*/

/*<-------------------------------------------------------------------------------------------------------------------------------------------------------------------->*/

/*console.log("Bienvenidos a Narciza");
let monto = prompt("Ingrese el monto del producto seleccionado");
monto = parseInt(monto);

let tarjetas = prompt("Ingrese el tipo de tarjeta que posee: BBVA, Santander, Scotiabank o Itau")
let total_uno = calcular_descuentotarjeta(monto, tarjetas);


let cuotas = prompt("En cuantas cuotas: 1, 3, 6 o 12")
let total_dos = calcular_interescuotas(monto, cuotas);

let total = total_dos - total_uno;

mostrar_datos_compra(monto, tarjetas, cuotas, total);*/

/*<---------------------------------------------------------------------------------------------------------------------------------------------->*/

let carrito = [];

function agregar_a_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode

    let nombre_producto = padre.querySelector("h5").textContent;

    let precio_producto = padre.querySelector("span").textContent;

    let img_producto = abuelo.querySelector("img").src;

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad:1
    };

    carrito.push(producto);

    console.log(carrito);

    mostrar_carrito();

}


function mostrar_carrito(){

    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for( let producto of carrito ){

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;
        tabla.append(fila);

    }


    let btn_borrar = document.querySelectorAll(".borrar_elemento");
    
    for( let btn of btn_borrar ){

        btn.addEventListener("click" , borrar_producto);
    }

}


function borrar_producto(e){

    console.log("BORRAR ESTE PRODUCTO: " , e.target);
    let abuelo = e.target.parentNode.parentNode;

    abuelo.remove();
}


let btn_compra =  document.querySelectorAll(".botonCompra");

console.log(btn_compra);


for( let boton of btn_compra){

    boton.addEventListener("click" , agregar_a_carrito);
}


let btn_carrito = document.getElementById("mostrar_carrito");


btn_carrito.addEventListener("click" , function(){

    let carrito = document.getElementById("carrito");

    if( carrito.style.display != "none"){

        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "block";
    }
})

/*<----------------------------------------------------------------------------------------------------------------------------------------->*/

let modal = document.getElementById('modal_registro');

let btn = document.getElementById('mostrar_registro');

let span = document.getElementById('close_registro');

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

/*<----------------------------------------------------------------------------------------------------------------------------------------->*/

let enviar_info = document.getElementById('enviar')

enviar.onclick = function(e){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let contrasenia = document.getElementById('contrasenia').value;
    let telefono = document.getElementById('telefono').value;
    let nacimiento = document.getElementById('nacimiento').value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);
    localStorage.setItem("contrasenia", contrasenia);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("nacimiento", nacimiento);
    modal.style.display = "none";
}

