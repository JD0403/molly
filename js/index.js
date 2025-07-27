window.onload = ()=>{
    let preload = document.querySelector("#preload");
    preload.style.display = "none";

    setTimeout(()=>{
        let logo = document.querySelector("img");
        logo.style.animation = "logoFade 1s 1";
        setTimeout(()=>{
            window.location.replace("./molly/home.html");
        }, 800);
    }, 3000);
}