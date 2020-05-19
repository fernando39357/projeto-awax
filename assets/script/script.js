document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        main = document.getElementById("main")
        loader = document.getElementById("loader")
        main.classList.remove("mainLoading");
        loader.classList.add("mainLoading");
    }
});
function submitForm() {

    alert("Enviado!");
}