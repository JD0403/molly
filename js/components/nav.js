fetch("../../molly/components/nav.html")
    .then(response => response.text())
    .then(data => {
        let mobil = document.querySelector("#mobil");
        mobil.insertAdjacentHTML("beforebegin", data);
});

function toggleON(){
    let menu = document.querySelector(".menu");
    if(menu.style.display == "" || menu.style.display == "none"){ // el menu es visible
        let d1 = document.querySelector(".d1");
        let d2 = document.querySelector(".d2");
        let d3 = document.querySelector(".d3");

        d1.style.display = "none";
        d2.style.transform = "rotate(45deg)";
        d2.style.top = "50%";
        d3.style.transform = "rotate(135deg)";
        d3.style.top = "50%";


        menu.style.display = "block";
    } else {
        let d1 = document.querySelector(".d1");
        let d2 = document.querySelector(".d2");
        let d3 = document.querySelector(".d3");

        d1.style.display = "block";
        d2.style.transform = "none";
        d2.style.top = "25%";
        d3.style.transform = "none";
        d3.style.top = "75%";

        menu.style.display = "none";
    }
}