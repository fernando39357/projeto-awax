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
const openMenu = document.querySelectorAll(".menuOpener")[0]
const menu = document.querySelectorAll("nav")[0]
openMenu.addEventListener("click", () => {
    menu.classList.toggle("menuOpen")
})