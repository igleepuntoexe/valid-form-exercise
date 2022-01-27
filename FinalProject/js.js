document.addEventListener("DOMContentLoaded", inicio)
let contador = 0

function inicio(){
    let btn = document.getElementById("comp")
    btn.addEventListener("click", comprar)

    let btn1 = document.getElementById("compeB")
    btn1.addEventListener("click", comprobar)

    let btn2 = document.getElementById("ntB")
    btn2.addEventListener("click", numeroTarjeta)

    let btn3 = document.getElementById("csB")
    btn3.addEventListener("click", validaCodigo)

    let btn4 = document.getElementById("res")
    btn4.addEventListener("click", borrardatos1)

    let btn5 = document.getElementById("res1")
    btn5.addEventListener("click", borrardatos2)

    let btn6 = document.getElementById("res2")
    btn6.addEventListener("click", borrardatos3)

    let btn7 = document.getElementById("res3")
    btn7.addEventListener("click", borrardatos4)

    let btn8 = document.getElementById("res4")
    btn8.addEventListener("click", borrardatos5)
}

function comprobar(){
    let comp = document.getElementById("compe").value
    if (comp == null || comp == ""){
        alert("Introduce tu código")
    }

    if (comp.length != 8){
        document.getElementById("nashe").style.color = "red"
        document.getElementById("nashe").innerHTML = "DOCUMENTO INCORRECTO"
    }else{
        document.getElementById("nashe").style.color = "green"
        document.getElementById("nashe").innerText = "DOCUMENTO CORRECTO"
        console.log("Introduciendo documento...")
    }
}

function numeroTarjeta(){
    let nTarjeta = document.getElementById("nt").value
    if (nTarjeta == "" || nTarjeta == null){
        alert("Introduce el número de tu tarjeta")
    }

    if (nTarjeta.length != 16){
        document.getElementById("nashe2").style.color = "red"
        document.getElementById("nashe2").innerHTML = "NUMERO DE TARJETA INCORRECTO"
    }else{
        document.getElementById("nashe2").style.color = "green"
        document.getElementById("nashe2").innerText = "NUMERO DE TARJETA CORRECTO"
        console.log("Introduciendo número de la tarjeta...")
    }
}

function validaCodigo(){
    let code = document.getElementById("cS").value
    if (code == "" || code == null){
        alert("Introduzca el Código de Seguridad por favor")
    }

    if (isNaN(code)){
        alert("El código no lleva letras")
    }

    if (code.length != 6){
        document.getElementById("nashe3").style.color = "red"
        document.getElementById("nashe3").innerHTML = "CODIGO DE SEGURIDAD ERRONEO"
    }else{
        document.getElementById("nashe3").style.color = "green"
        document.getElementById("nashe3").innerText = "CODIGO DE SEGURIDAD CORRECTO"
        console.log("confirmando código de seguridad...")
    }
}

function borrardatos1(){
    document.getElementById("nom").value = ""
    document.getElementById("primA").value = ""
    document.getElementById("segA").value = ""
    document.getElementById("compe").value = ""
    document.getElementById("document").options.selectedIndex = 0;
    document.getElementById("emal").value = ""
}

function borrardatos2(){
    document.getElementById("texta").value = ""
}

function borrardatos3(){
    document.getElementById("canye").value = ""
    document.getElementById("num").value = ""
    document.getElementById("let").value = ""
    document.getElementById("ciu").value = ""
    document.getElementById("cPostal").value = ""
    document.getElementById("tc").checked = false
    document.getElementById("re").checked = false
    document.getElementById("tb").checked = false
}

function borrardatos4(){
    document.getElementById("nt").value = ""
    document.getElementById("cS").value = ""
    document.getElementById("meses").options.selectedIndex = 0;
    document.getElementById("anho").value = ""
    document.getElementById("rad").value = ""
    document.getElementById("tit").value = ""
    document.getElementById("rad").checked = false
}

function borrardatos5(){
    document.getElementById("tv").checked = false
    document.getElementById("rev").checked = false
    document.getElementById("we").checked = false
    document.getElementById("ot").checked = false
}

function comprar(evento){
    evento.preventDefault()
    //NAME
    let nom = document.getElementById("nom").value
    if (nom == "" || nom == null){
        alert("El nombre es Obligatorio, por favor Introdúcelo")
    }else{
        console.log("Nombre válido")
    }

    //FIRST NAME
    let primApellido = document.getElementById("primA").value
    if (primApellido == "" || primApellido == null){
        alert("El Primer Apellido es Obligatorio, por favor Introdúcelo")
    }else{
        console.log("Primer Apellido válido")
    }

    //SECOND NAME
    let segundoApellido = document.getElementById("segA").value
    if (segundoApellido == "" || segundoApellido == null){
        alert("El Segundo Apellido es Obligatorio, por favor Introdúcelo")
    }else{
        console.log("Segundo Apellido válido")
    }

    //DOCUMENT
    let documento = document.getElementsByName("document")[0]
    if (documento.selectedIndex == [0]){
        alert("Seleccion tu Documento de Identidad")
    }else{
        console.log("El usurio eligió la opción: " + documento.selectedIndex)
    }

    //EMAIL
    let email = document.getElementById("emal").value
    if (email == "" || email == null){
        alert("Introduce un correo")
    }

    if (email.includes("@gmail.com") || email.includes("@hotmail.com") || email.includes("@outlook.com")){
        console.log("Correo válido")
    }else{
        alert("Correo inválido")
    }

    //TEXTAREA
    let textarea = document.getElementById("texta").value
    if (textarea == null || textarea == ""){
        alert("Rellene la información de su pedido por favor")
    }

    if (textarea.includes("CANTIDAD:20 - PRODUCTO:Botones - REFERENCIA:048F - COLOR:Rojo")){
        console.log("Información del pedido enviada")
    }

    //STREET
    let canye = document.getElementById("canye").value
    if (canye == "" || canye == null){
        alert("Introduce tu calle")
    }else{
        console.log("Calle introducida correctamente...")
    }

    //NUMBER
    let numer = document.getElementById("num").value
    if (isNaN(numer)){
        alert("Tu número no puede tener letras")
    }

    if (numer == "" || numer == null){
        alert("Introduce el número de tu calle por favor")
    }else{
        console.log("Introduciendo tu número de la calle...")
    }

    //LETTER
    let letter = document.getElementById("let").value
    if (!isNaN(letter)){
        alert("Usted tiene que Introducir una letra no un número")
    }

    if (letter == "" || letter == null){
        alert("Introduce la letra de tu vivienda por favor")
    }else{
        console.log("Introduciendo letra correctamente...")
    }

    //CITY
    let city = document.getElementById("ciu").value
    if (city == "" || city == null){
        alert("Introduce tu ciudad por favor")
    }else{
        console.log("Introduciendo la ciudad...")
    }

    //CODIGO POSTAL
    let codPostal = document.getElementById("cPostal").value
    if (codPostal == "" || codPostal == null){
        alert("Introduzca su código postal")
    }else if (codPostal.length < 5 && 6 > codPostal.length){
        alert("Tu Codigo Postal tiene que tener menos de 5 cifras")
    }

    //FORMA DE PAGO
    let fdp = document.querySelectorAll(".radio input")
    for (i=0;i < fdp.length;i++){
        if (fdp[i].checked){
            contador++
        }
    }
    if (contador > 1){
        alert("Solo puedes marcar una opción")
    } 

    //MESES
    let meses = document.getElementsByName("mees")[0]
    if (meses.selectedIndex == [0]){
        alert("Seleccion el mes de caducidad")
    }

    //AÑO
    let anhoo = document.getElementById("anho").value
    if (isNaN(anhoo)){
        alert("El año no puede tener letras")
    }
    if (anhoo < 2022 ){
        alert("Tu fecha de caducidad es invalida")
    }

    if (anhoo == "" || anhoo == null){
        alert("Introduce el año de caducidad por favor")
    }

    //TITULO DE LA TARJETA
    let titTar = document.getElementById("tit").value
    if (titTar == "" || titTar == null){
        alert("Introduce el titular de tu tarjeta por favor")
    }else{
        console.log("Introduciendo credenciales...")
    }

    //PRIVACIDAD
    let condPriv = document.querySelectorAll(".radio11 input")
    for (i=0;i < condPriv.length;i++){
        if (condPriv[i].checked){
            contador++
        }
    }
    if (contador =  0){
        alert("Marque Obligatoriamente esta opción")
    }

    let forms = document.querySelector("form")
    forms.submit()
}