// scale embed
const embedSize = document.querySelectorAll(".window__img--desktop");

function updateScaleFactor() {
    for (let i = 0; i < embedSize.length; i++) {
        const windowSize = document.querySelector(".window__container__img").clientWidth;
        let scaleFactor = windowSize / embedSize[i].clientWidth
        document.querySelectorAll(".window__img--desktop")[i].style.transform = `scale(${scaleFactor})`;
    }
}

// hamburger menu
window.addEventListener("resize", updateScaleFactor);
updateScaleFactor();

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav__links').classList.toggle('expanded');
});

// click event
document.querySelector(".header__icon__folder").addEventListener('click', () => {
    const height = document.querySelector(".header__icon__folder").getBoundingClientRect().height;
    console.log(height);
    
   document.querySelector(".header__icon__folder").style.display="none";
    document.querySelector(".header__icon__file").style.display="block"; 
    document.querySelector(".header__icon__file").style.height=`${height}px`;
})