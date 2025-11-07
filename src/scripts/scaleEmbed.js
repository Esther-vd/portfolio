const embedSize = document.querySelectorAll(".window__img--desktop");

function updateScaleFactor() {
    for (let i = 0; i < embedSize.length; i++) {
        const windowSize = document.querySelector(".window__container__img").clientWidth;
        let scaleFactor = windowSize / embedSize[i].clientWidth
        document.querySelectorAll(".window__img--desktop")[i].style.transform = `scale(${scaleFactor})`;
    }
}


window.addEventListener("resize", updateScaleFactor);
updateScaleFactor();