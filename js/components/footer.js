fetch("./components/footer.html")
    .then(response => response.text())
    .then(data => {
        let footer = document.querySelector("footer");
        footer.insertAdjacentHTML("afterbegin", data);
});
