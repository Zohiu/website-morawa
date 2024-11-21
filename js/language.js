var lang = "de"

var langbutton = document.getElementById("lang-button");

function loadEN() {
    showLoading();
    fetch("../lang/en.json")
    .then((response) => response.json())
    .then((json) => {
        Object.entries(json).forEach(([key, value]) => {
            var element = document.getElementById(key);
            if (element != null) {
                element.innerHTML = value;
                console.log(element);
            }
        });
        if (initialized) {
            hideLoading();
        }
        document.documentElement.setAttribute('lang', lang); 
        localStorage.setItem("language", "en");
    });
}

function onButton() {
    if (lang == "de") {
        lang = "en"
        langbutton.innerHTML = "Deutsch"
        loadEN();

    } else {
        localStorage.setItem("language", "de");
        location.reload();
    }
}

langbutton.addEventListener("click", onButton)

if (localStorage.getItem("language") == "en") {
    onButton();
} else {
    hideLoading();
}