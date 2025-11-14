// scale embed
const embedSize = document.querySelectorAll(".window__img--desktop");

function updateScaleFactor() {
  for (let i = 0; i < embedSize.length; i++) {
    const windowSize = document.querySelector(
      ".window__container__img"
    ).clientWidth;
    let scaleFactor = windowSize / embedSize[i].clientWidth;
    document.querySelectorAll(".window__img--desktop")[
      i
    ].style.transform = `scale(${scaleFactor})`;
  }
}

// hamburger menu
const hamburger = () => {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav__links").classList.toggle("expanded");
  });
};

// click event
const headerClickEvent = () => {
  if (document.querySelector(".header__icon__folder")) {
    document
      .querySelector(".header__icon__folder")
      .addEventListener("click", () => {
        const height = document
          .querySelector(".header__icon__folder")
          .getBoundingClientRect().height;
        document.querySelector(".header__icon__folder").style.display = "none";
        document.querySelector(".header__icon__file").style.display = "block";
        document.querySelector(
          ".header__icon__file"
        ).style.height = `${height}px`;
      });
  }
};

//gsap 
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

const gsapCode = () => {
     gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin);
     gsapIndex();
}

const gsapIndex = () => {
    let scribleHeroTl = gsap.timeline({
      paused: false,
    });
    scribleHeroTl
      .from(".scribble__arrow--hero--line", { duration: 0.3, drawSVG: 0 })
      .from(".scribble__arrow--hero--arrow", { duration: 0.2, drawSVG: 0 });
    
      let scribleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scribble__arrow--plantin--line",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none reverse none",
        scrub: 0,
        markers: true,
      },
    });
    scribleTl
      .from(".scribble__arrow--plantin--line", { duration: 0.3, drawSVG: 0 })
      .from(".scribble__arrow--plantin--arrow", { duration: 0.2, drawSVG: 0 });
}

const init = () => {
  window.addEventListener("resize", updateScaleFactor);
  updateScaleFactor();
  hamburger();
  headerClickEvent();
  gsapCode();
};

init();
