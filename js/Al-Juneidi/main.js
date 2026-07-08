
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function scrollToHome() {
    scrollToSection("home");
}

function scrollToAbout() {
    scrollToSection("about");
}

function scrollToProducts() {
    scrollToSection("products");
}

function scrollToContact() {
    scrollToSection("contact");
}