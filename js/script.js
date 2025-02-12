document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero", {
        duration: 1,
        y: -50,
        opacity: 0
    });

    gsap.from(".project-card", {
        scrollTrigger: ".project-card",
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2
    });
});
