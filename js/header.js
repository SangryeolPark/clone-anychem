window.onload = () => {
    let header = document.querySelector(".header");
    let nav = document.querySelector(".nav");

    nav.addEventListener("mouseenter", () => {
        header.classList.add("header-active");
    });

    nav.addEventListener("mouseleave", () => {
        header.classList.remove("header-active");
    });
};
