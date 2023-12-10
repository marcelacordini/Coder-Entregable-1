const tipodecafe = [" 1. Expreso", " 2. Lágrima", " 3. Cortado", " 4. Cafe con leche"];
const tamaño = [" 1. Breve", " 2. Americano", " 3. Doble"];
const agregados = ["Crema", "Espuma", "Chocolate"]; 
const tipodeleche = [" 1. Entera", " 2. Descremada", " 3. de Almendras", " 4. de Coco"];

var clave = true;
var cafe = 0;
var medida = 0;
var detalle = 0;
var extras = "";
var pedido = [];
var i=0;
var milk = "";
var cant = 1;

function menu(){
    alert("Tomemos cafecito!");
    cafe = parseInt(prompt("Qué tipo de café te gustaría ? \nSeleccioná el número de tu prerefencia.\n" + tipodecafe));
        if ((cafe == 1) || (cafe ==2) || (cafe ==3) || (cafe == 4)) {
            alert ("Café seleccionado:" + tipodecafe[cafe-1]);
            return true;
        } else {
            alert ("Selección finalizada por el usuario, presiono la tecla " + cafe);
            return false;
        }
}

function tamanio(){
    medida = parseInt(prompt("De qué tamaño prefiere su " + tipodecafe[cafe-1].slice(4) + "?\n  Seleccioná el número de tu preferencia.\n" + tamaño));
        if ((medida == 1) || (medida ==2) || (medida ==3)) {
            alert("Tamaño seleccionado:" + tamaño[medida-1]); 
            return true       
        } else {
            alert ("Selección finalizada por el usuario, presiono la tecla " + medida);
            return false
        }
}

function agregado(){
    if (confirm ("Quiere algún agregado en su " + tipodecafe[cafe-1].slice(4) + " " + tamaño[medida-1].slice(4) +"?")){
        for (var i = 0; i < agregados.length; i++){
            if (confirm("Desea " + agregados[i] + "?")){
                if (extras == ""){
                extras = agregados[i];
            } else {
                extras = extras + ", " + agregados[i];
            }
            }
        }
        if (extras != ""){
            alert("Usted ha agregados los siguientes complementos: " + extras);
        } else {
            alert("Usted no ha seleccionado complementos");
        }
    } else {
        alert("Usted no ha seleccionado complementos");
    }
}

function leche(){
    detalle = parseInt(prompt("Qué tipo de leche quiere? \n  Seleccioná el número de tu preferencia.\n" + tipodeleche)) 
    if ((detalle == 1) || (detalle == 2) || (detalle == 3) || (detalle == 4)) {
        alert("Tipo de leche seleccionada: " + tipodeleche[detalle-1].slice(4));
        milk = tipodeleche[detalle-1].slice(4);
        if (extras != ""){
            alert ("Usted seleccionó: "+ tipodecafe[cafe-1].slice(4) + " " + tamaño[medida-1].slice(4) + " con: " + extras + " y leche " + milk);
        } else {
            alert("Usted seleccionó: "+ tipodecafe[cafe-1].slice(4) + " " + tamaño[medida-1].slice(4) + " y leche " + milk);
        }
        return true
    } else {
        alert ("Selección finalizada por el usuario, presiono la tecla " + detalle);
        return false
    }
}

while (clave){ 
    if (menu()){
        if (tamanio()){
            agregado();
            milk = "No Corresponde"
            if (cafe != 1){
                clave = leche();                             
            } else {
                if (extras != ""){
                    alert ("Usted seleccionó: "+ tipodecafe[cafe-1].slice(4) + " " + tamaño[medida-1].slice(4) + "con: " + extras);
                } else {
                    alert ("Usted seleccionó: "+ tipodecafe[cafe-1].slice(4) + " " + tamaño[medida-1].slice(4));
                }
            }
        } else {
            alert("Fin del programa");
            clave = false;            
        }
    } else {
        alert("Fin del programa");
        clave = false;
    }
    
    if(clave){
        if (confirm("Quiere agregar más unidades de este café?")){
            cant = parseInt(prompt("Qué cantidad quiere en total?"));
        }
    }
    
    pedido[i]= {
            "Detalle": tipodecafe[cafe-1].slice(4),
            "Tamaño": tamaño[medida-1].slice(4),
            "Agregados": extras,
            "Tipo de leche": milk, 
            "Cantidad": cant
        }
    
    i++;
    extras = "";
    detalle = 0;
    cant = 1;

    if (clave){
        clave = confirm("Desea pedir otro café?");
    }
}
    
if (i>0) {

    for (let j = 0; j < pedido.length; j++) {
        alert("Pedido: " + (j+1) + "\nDetalle: " + pedido[j].Detalle + "\n Tamaño: " + pedido[j].Tamaño + "\n Agregados: " + pedido[j].Agregados + "\n Tipo de leche: " + pedido[j]["Tipo de leche"]+ "\n Cantidad: " + pedido[j].Cantidad);
    } 

    for (let j = 0; j < pedido.length; j++) {
        console.log("Detalle: " + pedido[j].Detalle + "\n Tamaño: " + pedido[j].Tamaño + "\n Agregados: " + pedido[j].Agregados + "\n Tipo de leche: " + pedido[j]["Tipo de leche"]+ "\n Cantidad: " + pedido[j].Cantidad);
    } 
}

