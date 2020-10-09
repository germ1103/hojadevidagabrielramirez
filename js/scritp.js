function getData(){
    console.log("hola");
    var primerApellido = document.getElementById("apellido_1").value;
    var segundoApellido = document.getElementById("apellido_2").value;
    var nombre = document.getElementById("nombre").value;
    console.log(primerApellido+" "+segundoApellido+" "+nombre);
    document.getElementById("firma").innerHTML = primerApellido+" "+segundoApellido+" "+nombre;
   
}
function ocultar(){
    var x= document.getElementById("datosPersonales");
    if(x.style.display != "none"){
        x.style.display = 'none';
    }else{
        x.style.display = 'block'
    }

};
function ocultarAcademicas(){
    var x = document.getElementById("formacionAcademica");
    if(x.style.display != "none"){
        x.style.display = 'none';
    }else{
        x.style.display = 'block'
    }
}

function reloj(){
    var x = document.getElementById("reloj");
    var tiempo = new Date();
    var segundos = tiempo.getSeconds();
    var minutos = tiempo.getMinutes();
    var horas = tiempo.getHours();
    //Evitar los ceros individuales
    if(segundos <10){
        segundos = "0"+segundos;
    }
    if(minutos <10){
        minutos = "0"+minutos;
    }
    if(horas <10){
        horas = "0"+horas; 
   }
    x.innerHTML = horas+" : "+minutos+" : "+segundos;
}setInterval(reloj,1000);