


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const progressBar = document.querySelector("#progress");

if (progressBar) {
    gsap.fromTo(
        progressBar,
        { scaleX: 0 },
        {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        }
    );
}

const servicesSection = document.getElementById("services");

if (servicesSection) {
    ScrollTrigger.create({
        trigger: servicesSection,
        start: "top top",
        end: "bottom top",
        pin: servicesSection,
        pinSpacing: false,
        invalidateOnRefresh: true,
    });
}

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

const toggleButton = document.querySelector("#toggledark");
const replayButton = document.querySelector("#replayIntro");

const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5, ease: "power2.out" },
});

tl.from("h1", { y: 60, opacity: 0, duration: 1 })
    .from("nav a", { y: -20, opacity: 0, stagger: 0.15 })
    .from("main section:not(#hero)", { y: 20, opacity: 0, stagger: 0.2 });

if (document.querySelector("h1, nav a, main section:not(#hero)")) {
    tl.play();
}

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        gsap.fromTo(
            toggleButton,
            { rotation: 0 },
            { rotation: 360, duration: 0.8, ease: "back.out(1.7)" }
        );
    });
}

if (replayButton) {
    replayButton.addEventListener("click", () => {
        tl.restart();
    });
}