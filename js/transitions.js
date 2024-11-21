var objs = document.getElementsByClassName("object");
var loading = document.getElementById("loading");
var initialized = false;

function update(e) {
    var windowHeight = window.innerHeight;

    for (var element of objs) {
        var rect = element.getBoundingClientRect();

        var translate = 0;
        var scale = 1;
        var rotate = 0;
        var blur = 0;
        var opacity = 1;

        var progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / rect.height)) - (1 - Math.max(0, Math.min(1, rect.bottom / rect.height)));

        if (element.classList.contains("nofade")) {
            if (Math.min(1, (windowHeight - rect.top) / rect.height) == 1) {
                element.style.transform = "translateX(0px) scale(1) rotate(0deg)";
                element.style.webkitFilter = "blur(0px) opacity(1)";
                continue;
            }
        }

        if (progress == 0) {
            element.style.webkitFilter = "opacity(0)";
            continue;
        }

        if (element.classList.contains("scale")) { 
            scale = Math.max(0.3, progress);
        }

        if (element.classList.contains("rotate")) {
            if (element.classList.contains("left")) {
                rotate = 45 - progress * 45
            } else if (element.classList.contains("right")) {
                rotate = -45 + progress * 45
            }
        }
        
        if (element.classList.contains("glide")) {
            if (element.classList.contains("left")) {
                translate = -rect.width + progress * rect.width;
            } else if (element.classList.contains("right")) {
                translate = rect.width - progress * rect.width;
            }
        }

        element.style.transform = "translateX(" + translate +  "px) scale(" + scale + ") rotate(" + rotate + "deg)";


        if (element.classList.contains("blur")) {
            blur = 15 - progress * 15;
        }

        if (element.classList.contains("opacity")) {
            opacity = progress;
        }

        element.style.webkitFilter = "blur(" + blur +  "px) opacity(" + opacity + ")";
    }
}


function showLoading() {
    loading.style.display = "flex";
    loading.classList.remove('fadeout');
}

function hideLoading() {
    loading.classList.add('fadeout');
    setTimeout(function() {
        loading.style.display = "none";
    }, 1000);
}

window.onload = function() {
    hideLoading();
    initialized = true;
};


update();
window.addEventListener("scroll", update);
window.addEventListener("resize", update);