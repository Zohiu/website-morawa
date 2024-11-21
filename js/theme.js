var themebutton = document.getElementById("mode-button");

var spinner = document.getElementById("loading-spinner");
var modeicon = document.getElementById("mode-icon");


function setTheme() {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        rootDataset.theme = "light";
        localStorage.setItem("theme", "light");
        spinner.classList.add("loading-spinner-alt");
        modeicon.classList.add("ico-alt");
    } else {
        rootDataset.theme = "";
        localStorage.setItem("theme", "");
        if (spinner.classList.contains("loading-spinner-alt")) {
            spinner.classList.remove("loading-spinner-alt")
        }
        if (modeicon.classList.contains("ico-alt")) {
            modeicon.classList.remove("ico-alt")
        }
    }

}

window.matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', setTheme)


const rootDataset = document.documentElement.dataset;

function changeTheme() {
    if (rootDataset.theme == "light")  {
        spinner.classList.remove("loading-spinner-alt");
        modeicon.classList.remove("ico-alt");
        rootDataset.theme = "";
        localStorage.setItem("theme", "");
    } else {
        spinner.classList.add("loading-spinner-alt");
        modeicon.classList.add("ico-alt");
        rootDataset.theme = "light";
        localStorage.setItem("theme", "light");
    }
}

themebutton.addEventListener("click", changeTheme);

// Remember theme choice
if (localStorage.getItem("theme") == "light") {
    rootDataset.theme = "light";
    spinner.classList.add("loading-spinner-alt");
    modeicon.classList.add("ico-alt");
} else {
    setTheme();
}
