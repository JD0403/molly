// cada producto tiene su funcino la cual modifica el texto de cada uno y modifica el reenvio del boton de compra
function menuClose(){
    let menu = document.querySelector(".menu-info-producto");
    let body = document.querySelector("body");
    body.style.overflow = "scroll";
    menu.style.display = "none";
}
// productos -------------------------------------------------------------------------------------------
function llaveros(){
    let titulo = "LLAVEROS";
    let texto = "¡Llaveros personalizados, puedes poner una imagen animada, logo o fotografía en ellos!, ¡Están a tan solo $20 MXN!! ¡APARTA EL TUYO!";
    let img = "../assets/llaveros.jpg";
    let link = "Hola!%20tienes%20llaveros%20disponibles?";

    config(titulo, texto, img, link);
    repeat();
}
function librosColorear(){
    let titulo = "LIBROS PARA COLOREAR";
    let texto = "¡Libros para colorear personalizados, envía tu diseño o personaje favorito y nosotros lo personalizamos!!, ¡están a tan solo $15 MXN! ¡Aparta y ven por el tuyo!!";
    let img = "../assets/libros_colorear.jpg";
    let link = "Hola!%20tienes%20libros%20para%20colorear%20disponibles?";

    config(titulo, texto, img, link);
    repeat();
}
function bolsaRegalo(){
    let titulo = "MINI BOLSA DE REGALO";
    let texto = "Mini bolsa de regalo personalizada, puedes personalizarla con imágenes de tu personaje favorito, fotografías propias o un diseño con colores únicos a tu elección! ¡¡están a tan solo $12 MXN!! ¡Ven por la tuya!";
    let img = "../assets/bolsa_regalo.jpg";
    let link = "Hola!%20tienes%20bolsas%20de%20regalo%20disponibles?";

    config(titulo, texto, img, link);
    repeat();
}

// flujo de página -------------------------------------------------------------------------------------------
function config(name, descripcion, img, link){
    let titulo = document.querySelector(".name-producto");
    let texto = document.querySelector(".detalles");
    let imagen = document.querySelector("#imagen-alt");
    let button = document.querySelector(".comprar");
    
    let comprar = "https://wa.me/+529931897922?text="+link;
    titulo.textContent = name;
    texto.textContent = descripcion;
    imagen.src = img;
    button.addEventListener("click", ()=>{
        window.location.href = comprar;
    });
}
function repeat(){
    let menu = document.querySelector(".menu-info-producto");
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
    menu.style.display = "block";
}
function vacio(){
    let titulo = "";
    let texto = "";
    let img = "";
    let link = "";

    config(titulo, texto, img, link);
    repeat();
}