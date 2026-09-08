const getStarted = document.querySelector("#getStarted");

getStarted.addEventListener("click", function () {

    const trainingSection = document.querySelector("#training");

    trainingSection.scrollIntoView({
        behavior: "smooth"
    });

});
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

const navLinks = document.querySelectorAll("#navMenu a");


menuButton.addEventListener("click", function () {

    const isOpen = navMenu.classList.toggle("active");

    if (isOpen) {

        menuButton.textContent = "✕";

        menuButton.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

    } else {

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        navMenu.classList.remove("active");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});