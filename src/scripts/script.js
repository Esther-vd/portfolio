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

//gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

const gsapCode = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin);
  gsapIndex();
  folderGsap();
};

const gsapIndex = () => {
  ScribblesGsap();
};

const ScribblesGsap = () => {
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
    },
  });
  scribleTl
    .from(".scribble__arrow--plantin--line", { duration: 0.3, drawSVG: 0 })
    .from(".scribble__arrow--plantin--arrow", { duration: 0.2, drawSVG: 0 });
};

const folderGsap = () => {
  document
    .querySelectorAll(".folder__svg")
    .forEach((element) =>
      element.addEventListener("mouseenter", () => folderHandler(element))
    );

  document
    .querySelectorAll(".folder__svg")
    .forEach((element) =>
      element.addEventListener("mouseleave", () =>
        folderReverseHandler(element)
      )
    );
};

const folderHandler = (element) => {
  let folderAnimation = gsap.timeline({});

  folderAnimation
    .to(element, {
      rotation: 5,
      scale: 0.95,
      duration: 0.3,
    })
    .to(element, {
      rotation: -3,
      duration: 0.4,
    });
};

const folderReverseHandler = (element) => {
  let folderAnimation = gsap.timeline({});
  
  folderAnimation
    .to(element, {
      rotation: 3,
      scale: 1,
      duration: 0.4,
    })
    .to(element, {
      rotation: 0,
      duration: 0.3,
    });
};


// click event
const headerClickEvent = () => {
let headerIconTl =  gsap.timeline({
})
  if (document.querySelector(".header__icon__folder")) {
    document
      .querySelector(".header__icon__folder")
      .addEventListener("click", () => {
        const height = document
          .querySelector(".header__icon__folder")
          .getBoundingClientRect().height;
        headerIconTl
          .to(".header__icon__folder .folder__svg", { y: 20, duration: 0.2 })
          .to(".header__icon__folder", { opacity: 0, duration: 0 })
          .to(".header__icon__file", { opacity: 1, duration: 0 })
          .from(".header__icon__file", { scale: .9, duration: 0.2 })
          .to(".header__icon__file", { y: -10, duration: 0.1 }, "<")
          .to(".header__icon__file", { y: 10, duration: 0.2 });

        document.querySelector(
          ".header__icon__file"
        ).style.height = `${height}px`;
      });
  }
};


const init = () => {
  window.addEventListener("resize", updateScaleFactor);
  updateScaleFactor();
  hamburger();
  headerClickEvent();
  gsapCode();
};

init();
